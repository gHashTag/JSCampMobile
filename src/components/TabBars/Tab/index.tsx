import React from 'react'
import { Image, Pressable, StyleSheet } from 'react-native'
import { TopIcons, BottomIcons } from './images'
import { s, ms } from 'react-native-size-matters'

interface TabT {
  icon: string
  onPress?: () => void
  type?: 'top' | 'bottom'
}

export function Tab({ icon, type = 'bottom', onPress }: TabT) {
  const image =
    type === 'top'
      ? TopIcons.find(x => x.title === icon).path
      : BottomIcons.find(x => x.title === icon).path

  return (
    <Pressable onPress={onPress} style={imgContainer}>
      <Image resizeMode="center" source={image} style={img} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  img: {
    width: ms(65, 0.7),
    height: ms(40, 0.7)
  },
  imgContainer: {
    flex: 1,
    marginHorizontal: s(2),
    alignItems: 'center'
  }
})

const { img, imgContainer } = styles
