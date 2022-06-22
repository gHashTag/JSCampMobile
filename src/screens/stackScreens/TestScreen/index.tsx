import React, { useEffect } from 'react'
import { Platform, StyleSheet, View } from 'react-native'
import { RouteProp, useFocusEffect, useTheme } from '@react-navigation/native'
import {
  DragVariant,
  EmojiSelect,
  Header,
  InputAnswer,
  SelectMany,
  Text
} from '../../../components'
import { vs } from 'react-native-size-matters'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import { useState } from 'react'
import { questionsT } from '../../../types/LessonTypes'
import { en_color, white } from '../../../constants'
import StatusBar from '@react-native-community/status-bar'
import { useTypedSelector } from '../../../store'

interface TestScreenT {
  navigation: NativeStackNavigationProp<RootStackParamList, 'TEST_SCREEN'>
  route: RouteProp<RootStackParamList, 'TEST_SCREEN'>
}

export function TestScreen({ navigation, route }: TestScreenT) {
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const { tests, questsHeader } = route.params
  const lastTestId = tests.length - 1
  const handleBack = () => {
    navigation.goBack()
  }
  const { bgColor } = useTypedSelector(state => state.bgColor)
  const {
    dark,
    colors: { background }
  } = useTheme()
  const backgroundColor = dark ? background : bgColor
  useFocusEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => StatusBar.setBackgroundColor(backgroundColor), 50)
      return () => StatusBar.setBackgroundColor(background)
    }
  })

  const onWin = () => {
    if (lastTestId === questionIndex) {
      navigation.navigate('BOTTOM_TABS', {
        screen: 'TOP_TABS'
      })
    } else {
      setQuestionIndex(pr => pr + 1)
    }
  }

  return (
    <View style={[container, { backgroundColor }]}>
      {tests[questionIndex].type !== 'emoji' && (
        <Header onPressL={handleBack} nameIconL=":back:" title={questsHeader} />
      )}
      <SelectType onWin={onWin} {...tests[questionIndex]} />
    </View>
  )
}

interface SelectTypeT extends questionsT {
  onWin: () => void
}

function SelectType({ type, drag, input, manySelect, emoji, onWin }: SelectTypeT) {
  const [emojiData, setEmojiData] = useState()
  const fetchEmojiData = async () => {
    if (emoji) {
      const res = await (await fetch(emoji.dataUrl)).json()
      setEmojiData(res)
    }
  }
  useEffect(() => {
    fetchEmojiData()
  }, [])
  switch (type) {
    case 'drag':
      // @ts-ignore
      return <DragVariant onWin={onWin} {...drag} />
    case 'input':
      // @ts-ignore
      return <InputAnswer onWin={onWin} {...input} />
    case 'manySelect':
      // @ts-ignore
      return <SelectMany onWin={onWin} {...manySelect} />
    case 'emoji':
      // @ts-ignore
      return emojiData ? <EmojiSelect onWin={onWin} variants={emojiData} /> : null
    default:
      return null
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  videoContainer: {
    maxHeight: vs(200)
  }
})

const { container, videoContainer } = styles
