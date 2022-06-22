import React, { useEffect, useRef, useState } from 'react'
import { MaterialTopTabBarProps } from '@react-navigation/material-top-tabs'
import { StyleSheet, useColorScheme, View, Animated } from 'react-native'
import { mvs, vs } from 'react-native-size-matters'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { Tab } from '../Tab'
import { en_color, getColor, W } from '../../../constants'

const tabWidth = W / 5

export function TopTabBar({ state, navigation, descriptors }: MaterialTopTabBarProps) {
  const { index, routes } = state
  const { top } = useSafeAreaInsets()
  const paddingTop = top + vs(5)
  const lineAnim = useRef(new Animated.Value(0)).current
  const scheme = useColorScheme()
  const [lineColor, setLineColor] = useState(en_color)

  useEffect(() => {
    startAnim(index)
  }, [index])

  const startAnim = (index: number) => {
    Animated.timing(lineAnim, {
      toValue: index * tabWidth,
      duration: 200,
      useNativeDriver: true
    }).start(() => {
      const curColor = getColor(index)
      setLineColor(curColor)
    })
  }

  const handlePress = (name: string, isFocused: boolean) => {
    if (!isFocused) {
      navigation.navigate('BOTTOM_TABS', {
        screen: 'TOP_TABS',
        params: {
          screen: name,
          merge: true
        }
      })
    }
  }

  return (
    <View style={[tabContainer, { paddingTop }]}>
      {routes.map(({ name, key }, id) => {
        const word = scheme === 'dark' ? '_W' : '_B'
        const isFocused = index === id
        const suffix = isFocused ? '_ACTIVE' : word
        return (
          <Tab
            onPress={() => {
              handlePress(name, isFocused)
            }}
            key={id}
            type="top"
            icon={`${name}${suffix}`}
          />
        )
      })}
      <Animated.View
        style={[
          line,
          { backgroundColor: lineColor, transform: [{ translateX: lineAnim }] }
        ]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tabContainer: {
    paddingBottom: vs(5),
    flexDirection: 'row'
  },
  line: {
    width: tabWidth,
    height: vs(2),
    position: 'absolute',
    bottom: 0,
    left: 0
  }
})
const { tabContainer, line } = styles
