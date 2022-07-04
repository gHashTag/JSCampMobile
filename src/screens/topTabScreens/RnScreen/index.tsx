import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer } from '../../../components'
import { black, rn_color, rn_gradient } from '../../../constants'
import { RnScreenT } from './type'

export function RnScreen({ navigation, route }: RnScreenT) {
  const isDark = useColorScheme() === 'dark'
  return (
    <ComingSoon textColor={black} bg="rn" />
    // <ScrollContainer bgColor={!isDark ? rn_color : undefined}>
    //   {/* <LessonCard
    //     gradient={{ top: rn_gradient, bottom: rn_color }}
    //     leftIcon="react"
    //     title="Some lesson for React Native tab. Conditions."
    //   /> */}
    // </ScrollContainer>
  )
}

const styles = StyleSheet.create({})

const {} = styles
