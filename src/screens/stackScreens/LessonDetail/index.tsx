import React, { useEffect, useState } from 'react'
import { Platform, ScrollView, StyleSheet, View } from 'react-native'
// @ts-ignore
// import example from '../../../DATA/example.md' // don't touch
// import Markdown from 'react-native-markdown-display'
// import { getMarkdownStyle } from '../../../markdownStyle'
import { RouteProp, useFocusEffect, useTheme } from '@react-navigation/native'
import { Button, Header, Space, VideoPlayer } from '../../../components'
import { vs } from 'react-native-size-matters'
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../types'
import Orientation from 'react-native-orientation'
import StatusBar from '@react-native-community/status-bar'
import { en_color, white } from '../../../constants'
import { useTypedSelector } from '../../../store'

interface LessonDetailT {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LESSON_DETAIL_SCREEN'>
  route: RouteProp<RootStackParamList, 'LESSON_DETAIL_SCREEN'>
}

export function LessonDetail({ navigation, route }: LessonDetailT) {
  const [isPortrait, setIsPortrait] = useState<boolean>(true)
  const { contentUrl, questions, header, questsHeader, poster } = route.params
  const theme = useTheme()
  // const markStyle = getMarkdownStyle(theme)
  const oLestener = (orientation: Orientation.orientation) => {
    console.log(orientation)
    const portrair = orientation === 'PORTRAIT'
    setIsPortrait(portrair)
  }
  const {
    dark,
    colors: { background }
  } = theme
  const { bgColor } = useTypedSelector(state => state.bgColor)
  const backgroundColor = dark ? background : bgColor
  useFocusEffect(() => {
    if (Platform.OS === 'android') {
      setTimeout(() => StatusBar.setBackgroundColor(backgroundColor), 50)
      return () => StatusBar.setBackgroundColor(background)
    }
  })

  useEffect(() => {
    console.log('one')
    Orientation.unlockAllOrientations()
    Orientation.addOrientationListener(oLestener)
    return () => {
      console.log('two')
      StatusBar.setHidden(false)
      Orientation.lockToPortrait()
      Orientation.removeOrientationListener(oLestener)
    }
  }, [])

  const handleBack = () => {
    navigation.goBack()
  }
  const handleTest = () => {
    if (questions) {
      navigation.navigate('TEST_SCREEN', { tests: questions, questsHeader })
    }
  }
  const handleLearn = () => {
    if (questions) {
      navigation.navigate('LEARN_SCREEN', { words: questions })
    }
  }
  return (
    <View style={[container, { backgroundColor }]}>
      {isPortrait && (
        <Header
          textColor={white}
          onPressL={handleBack}
          onPressR={handleTest}
          nameIconL=":back:"
          nameIconR={questions ? 'brain' : undefined}
          title={header}
        />
      )}
      <View style={container}>
        {/* @ts-ignore */}
        {/* <Markdown rules={markStyle.rules} mergeStyle={false} style={markStyle.styles}>
          {example}
        </Markdown> */}
        <VideoPlayer
          source={{
            uri: contentUrl
          }}
          poster={poster}
          paused
          viewStyle={isPortrait && videoContainer}
        />
        {isPortrait && questions && (
          <View style={btnContainer}>
            <Button color={white} onPress={handleLearn} title="Учить" />
            <Button color={white} onPress={handleTest} title="Тест" />
          </View>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  videoContainer: {
    maxHeight: vs(230)
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

const { container, videoContainer, btnContainer } = styles
