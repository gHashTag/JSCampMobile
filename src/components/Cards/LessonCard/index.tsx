import React from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import Gradient from 'react-native-linear-gradient'
import { s, vs } from 'react-native-size-matters'
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text, ProgressChain, progressElementT } from '../../'
import { black, white } from '../../../constants'

interface LessonCardT {
  leftIcon: string
  title: string
  gradient: {
    top: string
    bottom: string
  }
  elements?: progressElementT[]
  lightText?: boolean
  onPress?: () => void
  border?: boolean
}

export function LessonCard({
  leftIcon,
  title,
  gradient,
  lightText,
  elements,
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
      <Pressable onPress={onPress}>
        <View style={headerContainer}>
          <MaterialIcon color={text} name={leftIcon} size={s(65)} />
          <Text
            oneColor={text}
            numberOfLines={3}
            textStyle={headerText}
            title={title}
            h4
          />
        </View>
        {elements && (
          <ProgressChain circleColor={gradient.bottom} text={text} elements={elements} />
        )}
      </Pressable>
    </Gradient>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(5),
    borderRadius: s(10),
    paddingVertical: s(10),
    marginVertical: vs(15)
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
  }
})

const { container, headerContainer, headerText, bordered } = styles
