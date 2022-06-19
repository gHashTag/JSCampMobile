import React from 'react'
import { AppWithProviders } from './src/AppWithProviders'
import { LogBox, YellowBox } from 'react-native'
LogBox.ignoreLogs(['ViewPropTypes will be removed from React Native'])

function App() {
  return <AppWithProviders />
}

export default App
