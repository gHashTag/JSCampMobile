import React, { useEffect, useMemo, useRef, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { nanoid } from 'nanoid/non-secure'
import { en_color, getRandomItem, green, W, white } from '../../../constants'
import { emojiT } from '../../../types/LessonTypes'
import { ButtonEmoji, ButtonVectorIcon, Text, Space, Header } from '../../'
import { s, vs } from 'react-native-size-matters'
import Sound from 'react-native-sound'
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming
} from 'react-native-reanimated'
import { useNavigation, useTheme } from '@react-navigation/native'

const lineW = W / 1.85
const errorSound = new Sound('error.wav')
const winSound = new Sound('win.mp3')
export function EmojiSelect({ onWin, variants }: EmojiSelectT) {
  const max = variants.length > 72 ? 70 : variants.length - 5
  const lineStep = lineW / max
  const step = useSharedValue(lineStep)
  const score = useSharedValue(0)
  const soundRef = useRef<Sound>()
  const buttons = useRef<emojiT[]>([])
  const { goBack } = useNavigation()
  const [correct, setCorrect] = useState<emojiT>()
  const [isTrue, setIsTrue] = useState<boolean>()
  const {
    dark,
    colors: { text, primary }
  } = useTheme()
  const initTest = async () => {
    const vars: emojiT[] = variants.reduce((pr, cur, id) => {
      if (id < 9) {
        let newItem: emojiT | undefined = undefined
        do {
          newItem = getRandomItem(variants)
        } while (pr.findIndex((a: emojiT) => a.name === newItem?.name) !== -1)
        return [...pr, newItem]
      } else {
        return pr
      }
    }, [] as any)
    const correctAnswer: emojiT = getRandomItem(vars)
    const soundObj = new Sound(correctAnswer.url)
    setTimeout(() => {
      if (score.value >= max) {
        winSound.play()
        onWin && onWin()
      } else {
        soundRef.current = soundObj
        buttons.current = vars
        setCorrect(correctAnswer)
        setTimeout(() => soundRef.current?.play(), 600)
        score.value = score.value + 1
      }
    }, 200)
  }
  useEffect(() => {
    initTest()
  }, [])
  const onChoice = async (item: emojiT, index: number) => {
    const isCorrect = item.id === correct?.id
    if (isCorrect) {
      setIsTrue(true)
      initTest()
    } else {
      errorSound.play()
      setIsTrue(false)
    }
  }
  const handlePlay = () => {
    if (soundRef.current) {
      soundRef.current.play(() => {})
    }
  }
  const animLine = useAnimatedStyle(() => {
    return {
      width: withTiming((score.value - 1) * step.value)
    }
  })
  const title = correct?.title
  return (
    <View style={flexOne}>
      <Header
        textColor={dark ? en_color : white}
        nameIconL=":back:"
        onPressL={goBack}
        onPressR={handlePlay}
        nameIconR=":loud_sound:"
        title={title ? title : '...'}
      />
      <View>
        <View style={lineContainer}>
          <Animated.View style={[animLine, line]} />
        </View>
        <Space height={vs(55)} />
        <Text
          centerText
          oneColor={isTrue ? green : 'red'}
          h3
          fontSize={s(20)}
          title={isTrue ? 'true' : 'false'}
        />
        <Space height={vs(35)} />
        <FlatList
          numColumns={3}
          data={buttons.current}
          renderItem={({ item, index }) => (
            <View style={emojiStyle}>
              <ButtonEmoji
                textColor={dark ? undefined : white}
                onPress={() => onChoice(item, index)}
                name={item.name}
              />
            </View>
          )}
          keyExtractor={() => nanoid()}
        />
        <Space height={vs(20)} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  emojiStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: vs(5)
  },
  line: {
    height: vs(7),
    backgroundColor: white
  },
  lineContainer: {
    width: lineW + vs(2),
    alignSelf: 'center',
    height: vs(9),
    borderRadius: vs(9),
    overflow: 'hidden',
    borderWidth: vs(1),
    borderColor: white
  },
  flexOne: {
    flex: 1,
    justifyContent: 'space-between'
  },
  bottomCont: {}
})
const { emojiStyle, line, lineContainer, flexOne, bottomCont } = styles

interface EmojiSelectT {
  variants: emojiT[]
  onWin: () => void
}
