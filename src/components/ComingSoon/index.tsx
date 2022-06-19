import React from 'react'
import { StyleSheet, View } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { gray } from '../../constants'
import { Space } from '../Space'
import { Text } from '../TextComponents'

export function ComingSoon() {
  return (
    <View style={container}>
      <Text h9 title="Coming soon" />
      <Space height={vs(30)} />
      <Icon name="clipboard-text-clock-outline" color={gray} size={s(120)} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: s(20)
  }
})

const { container } = styles
