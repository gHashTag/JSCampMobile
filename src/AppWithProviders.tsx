import StatusBar from '@react-native-community/status-bar'
import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { black, gray, white } from './constants'
import { Navigation } from './Navigation'
import SystemNavigationBar from 'react-native-system-navigation-bar'
import Orientation from 'react-native-orientation'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { store } from './store'

export function AppWithProviders() {
  const scheme = useColorScheme()
  const isDark = scheme === 'dark'
  const barStyle = isDark ? 'light-content' : 'dark-content'
  const bg = isDark ? black : white

  useEffect(() => {
    SystemNavigationBar.setNavigationColor(bg, isDark ? false : true)
    SystemNavigationBar.setNavigationBarDividerColor(gray)
    Orientation.lockToPortrait()
  }, [])

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <Provider store={store}>
          <StatusBar backgroundColor={bg} barStyle={barStyle} />
          <Navigation />
        </Provider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}
