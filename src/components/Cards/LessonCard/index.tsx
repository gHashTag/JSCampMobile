import React from 'react'
import { Pressable, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Gradient from 'react-native-linear-gradient'
import { s, vs } from 'react-native-size-matters'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Text, ProgressChain, progressElementT } from '../../'
import { black, W, white } from '../../../constants'

interface LessonCardT {
  id: number
  cardImage?: string
  title?: string
  gradient: {
    top: string
    bottom: string
  }
  lightText?: boolean
  onPress?: () => void
  border?: boolean
}

const widthCard = W - s(15) * 2

export function LessonCard({
  cardImage,
  id,
  gradient,
  lightText,
  onPress,
  border
}: LessonCardT) {
  const text = lightText ? white : black
  return (
    <Gradient
      colors={[gradient.top, gradient.bottom]}
      start={{ x: 0.25, y: 0.25 }}
      style={[container, border && bordered]}
    >
      <TouchableOpacity activeOpacity={0.5} style={pressableContainer} onPress={onPress}>
        <Image style={imgStyle} resizeMode="stretch" source={{ uri: cardImage }} />
        {/* <Pressable style={subContainer} onPress={onPress}>
         <EntypoIcon color={text} name={'check'} size={s(65)} />
      </Pressable> */}
      </TouchableOpacity>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: s(10),
    width: widthCard,
    height: widthCard,
    marginVertical: vs(15)
  },
  pressableContainer: {
    flex: 1
  },
  bordered: {
    borderWidth: s(2),
    borderColor: white
  },
  headerContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headerText: {
    flex: 1,
    marginLeft: s(5)
  },
  imgStyle: {
    width: '100%',
    height: '100%'
  }
})

const { container, bordered, imgStyle, pressableContainer } = styles
