import React, { useCallback, useEffect, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { RouteProp, useFocusEffect, useTheme } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { useTypedSelector } from '../../../store'
import StatusBar from '@react-native-community/status-bar'
import {
  CenterView,
  EmojiSlider,
  Header,
  Loading,
  Space,
  Text
} from '../../../components'
import Emoji from 'react-native-emoji'
import { s, vs } from 'react-native-size-matters'
import { shuffle, white } from '../../../constants'
import { emojiT } from '../../../types/LessonTypes'
import Sound from 'react-native-sound'

interface LearnScreenT {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LEARN_SCREEN'>
  route: RouteProp<RootStackParamList, 'LEARN_SCREEN'>
}

const win = new Sound('win.mp3')

export function LearnScreen({ navigation, route }: LearnScreenT) {
  const { words } = route.params
  const dataUrl = words[0].emoji?.dataUrl
  const [emojiData, setEmojiData] = useState<emojiT[]>()
  const [curEmoji, setCurEmoji] = useState<emojiT>()
  const [speed, setSpeed] = useState<number>(35)
  const curIndex = useRef<number>(0)
  const { bgColor } = useTypedSelector(state => state.bgColor)
  const {
    dark,
    colors: { background }
  } = useTheme()
  const backgroundColor = dark ? background : bgColor
  const fetchEmojiData = async () => {
    if (dataUrl) {
      const res = await (await fetch(dataUrl)).json()
      setEmojiData(shuffle(res))
    }
  }
  useEffect(() => {
    fetchEmojiData()
  }, [])
  useFocusEffect(
    useCallback(() => {
      setTimeout(() => StatusBar.setBackgroundColor(backgroundColor), 50)
      return () => StatusBar.setBackgroundColor(background)
    }, [])
  )
  useEffect(() => {
    if (emojiData) {
      const timerId = setInterval(() => {
        if (curIndex.current !== emojiData.length - 1) {
          setCurEmoji(emojiData[curIndex.current])
          const soundObj = new Sound(emojiData[curIndex.current].url, undefined, () => {
            soundObj.play()
          })
          curIndex.current = curIndex.current + 1
        } else {
          win.play()
          navigation.goBack()
        }
      }, 5000 - speed * 40)
      return () => clearInterval(timerId)
    }
  }, [emojiData, speed])
  console.log(curEmoji)
  const isSymbol = curEmoji?.name?.length === 1

  return (
    <View style={[container, { backgroundColor }]}>
      <Header onPressL={navigation.goBack} nameIconL=":back:" title={curEmoji?.title} />
      {emojiData && curEmoji ? (
        <>
          <CenterView>
            {isSymbol ? (
              <Text h10 title={curEmoji.title} />
            ) : (
              <Emoji name={curEmoji.name} style={emojiStyle} />
            )}
            <Space height={vs(30)} />
            <Text oneColor={white} h8 title={curEmoji.ru} />
          </CenterView>
          <EmojiSlider
            initPercent={speed}
            onChange={e => setSpeed(e)}
            emojiR=":tiger:"
            emojiL=":turtle:"
          />
          <Space height={vs(45)} />
        </>
      ) : (
        <View style={[container, { backgroundColor }]}>
          <Loading color={white} />
        </View>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  emojiStyle: {
    fontSize: s(120)
  }
})

const { container, emojiStyle } = styles
