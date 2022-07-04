import React, { useEffect } from 'react'
import { AppWithProviders } from './src/AppWithProviders'
import { LogBox } from 'react-native'
import SplashScreen from 'react-native-splash-screen'
LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native'])

function App() {
  useEffect(() => {
    SplashScreen.hide()
  }, [])
  return <AppWithProviders />
}

export default App
