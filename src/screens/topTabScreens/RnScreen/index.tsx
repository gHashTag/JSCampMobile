import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer } from '../../../components'
import { rn_color, rn_gradient } from '../../../constants'
import { RnScreenT } from './type'

export function RnScreen({ navigation, route }: RnScreenT) {
  return (
    <ScrollContainer>
      {/* <LessonCard
        gradient={{ top: rn_gradient, bottom: rn_color }}
        leftIcon="react"
        title="Some lesson for React Native tab. Conditions."
      /> */}
      <ComingSoon />
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({})

const {} = styles
