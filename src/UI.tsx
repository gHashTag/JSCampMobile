import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import { s, vs } from 'react-native-size-matters'
import {
  Button,
  ButtonEmoji,
  Header,
  InputAnswer,
  LessonCard,
  SelectMany,
  Space,
  Text,
  TextError,
  EmojiSelect
} from './components'
import { H, ts_color, ts_gradient } from './constants'

export function UI() {
  return (
    <ScrollView style={container}>
      <Text title="Text h0 Кириллица" h0 />
      <Text title="Text h1 Кириллица" h1 centerText />
      <Text title="Text h2 Кириллица" h2 />
      <Text title="Text h3 Кириллица" h3 />
      <Text title="Text h4 Кириллица" h4 />
      <Text title="Text h5 Кириллица" h5 oneColor="blue" />
      <Text title="Text h6 Кириллица" h6 />
      <Text title="Text h7 Кириллица" h7 />
      <Text title="Text h8 Кириллица" h8 textStyle={{ textAlign: 'right' }} />
      <Text
        title="Text h9 Кириллица"
        h9
        colors={{
          light: 'yellow',
          dark: 'pink'
        }}
      />
      <Text title="Text body hahha Кириллица" bodyH oneColor="blue" />
      <Space height={vs(20)} />
      <TextError
        onPress={() => console.log('error pressed')}
        title="TEXT error и кириллица"
      />
      <Space height={vs(20)} />
      <Button onPress={() => console.log('button pressed')} title="Button" />
      <LessonCard
        gradient={{ top: ts_gradient, bottom: ts_color }}
        leftIcon="language-typescript"
        title="Some lesson for TypeScript tab. Interfaces."
        lightText
        elements={[
          { isStarted: true, percents: 40 },
          { isStarted: false, percents: 0 },
          { isStarted: false, percents: 0 },
          { isStarted: false, percents: 0 },
          { isStarted: false, percents: 0 },
          { isStarted: false, percents: 0 }
        ]}
      />
      <Header
        onPressL={() => console.log('L')}
        onPressR={() => console.log('R')}
        nameIconL="chevron-left"
        title="Haha it's very big Header"
      />
      <View style={{ height: H, width: '100%' }}>
        <SelectMany
          onWin={() => console.log('win')}
          questionText="За сколько лет можно изучить программирование?"
          correctAnswers={['1', '2', '3']}
          variants={['1', '5', '2', '7', '12', '3', '18', '57', '26', '74']}
        />
      </View>
      <InputAnswer
        onWin={() => console.log('you win!')}
        correctAnswer="react NatiVe"
        questionText="Введите лучшую библиотеку в мире для создания приложений"
      />
      <Space height={vs(50)} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: s(20)
  }
})

const { container } = styles
