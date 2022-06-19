import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { UI } from './UI'
import { RootBottomTabParamList, RootStackParamList, RootTopTabParamList } from './types'
import { darkTheme, lightTheme, navRef } from './constants'
import {
  AwsScreen,
  EnScreen,
  JsScreen,
  QrScreen,
  RnScreen,
  TsScreen,
  LessonDetail,
  TestScreen,
  LearnScreen
} from './screens'
import { BottomTabBar, TopTabBar } from './components'
import { useColorScheme } from 'react-native'

const Stack = createNativeStackNavigator<RootStackParamList>()
const BottomTab = createBottomTabNavigator<RootBottomTabParamList>()
const TopTab = createMaterialTopTabNavigator<RootTopTabParamList>()

export function Navigation() {
  const scheme = useColorScheme()
  const theme = scheme === 'dark' ? darkTheme : lightTheme
  return (
    <NavigationContainer theme={theme} ref={navRef}>
      <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
        initialRouteName="BOTTOM_TABS"
      >
        <Stack.Screen name="UI" component={UI} />
        <Stack.Screen name="BOTTOM_TABS" component={BottomTabNavigation} />
        <Stack.Group
          screenOptions={{
            animation: 'slide_from_right'
          }}
        >
          {/* Lesson group */}
          <Stack.Screen name="LESSON_DETAIL_SCREEN" component={LessonDetail} />
          <Stack.Screen name="TEST_SCREEN" component={TestScreen} />
          <Stack.Screen name="LEARN_SCREEN" component={LearnScreen} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function BottomTabNavigation() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false
      }}
      tabBar={props => <BottomTabBar {...props} />}
    >
      <BottomTab.Screen name="TOP_TABS" component={TopTabNavigation} />
      {/* <BottomTab.Screen name="QR_SCREEN" component={QrScreen} /> */}
    </BottomTab.Navigator>
  )
}

function TopTabNavigation() {
  return (
    <TopTab.Navigator tabBar={props => <TopTabBar {...props} />}>
      <TopTab.Screen name="EN_SCREEN" component={EnScreen} />
      <TopTab.Screen name="JS_SCREEN" component={JsScreen} />
      <TopTab.Screen name="RN_SCREEN" component={RnScreen} />
      <TopTab.Screen name="TS_SCREEN" component={TsScreen} />
      <TopTab.Screen name="AWS_SCREEN" component={AwsScreen} />
    </TopTab.Navigator>
  )
}
