import React from 'react'
import { Pressable, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Gradient from 'react-native-linear-gradient'
import { s, vs } from 'react-native-size-matters'
import EntypoIcon from 'react-native-vector-icons/Entypo'
import { Text, ProgressChain, progressElementT } from '../../'
import { black, W, white } from '../../../constants'
import { useTypedSelector } from '../../../store'
import { allPartsT } from '../../../types/LessonTypes'

interface LessonCardT {
  id: number
  part: allPartsT
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
const borderRadius = s(10)
export function LessonCard({
  cardImage,
  id,
  part,
  gradient,
  lightText,
  onPress,
  border
}: LessonCardT) {
  const text = lightText ? white : black
  const isComplete = useTypedSelector(st => st.profile.passed[part]).includes(id)
  return (
    <Gradient
      colors={[gradient.top, gradient.bottom]}
      start={{ x: 0.25, y: 0.25 }}
      style={[container, border && bordered]}
    >
      <TouchableOpacity activeOpacity={0.5} style={pressableContainer} onPress={onPress}>
        <Image
          borderRadius={borderRadius}
          style={imgStyle}
          resizeMode="stretch"
          source={{ uri: cardImage }}
        />

        {isComplete && (
          <EntypoIcon style={checkStyle} color={text} name={'check'} size={s(35)} />
        )}
      </TouchableOpacity>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: borderRadius,
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
  checkStyle: {
    position: 'absolute',
    left: s(10),
    top: s(10)
  },
  imgStyle: {
    width: '100%',
    height: '100%'
  }
})

const { container, bordered, imgStyle, pressableContainer, checkStyle } = styles
