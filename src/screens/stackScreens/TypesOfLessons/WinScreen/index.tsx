import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { CenterView, Header, Space, Text } from '../../../../components'
// @ts-ignore
import Unicorn from '../../../../../assets/gif/unicorn.gif'
import { s, vs } from 'react-native-size-matters'
import { goBack, W, white } from '../../../../constants'
import { useTypedSelector } from '../../../../store'
import { useDispatch } from 'react-redux'
import { incrementSection, saveResult } from '../../../../slices'

interface WinScreenT {
  title?: string
}
export function WinScreen({ title }: WinScreenT) {
  const { cardName, part, lessonId } = useTypedSelector(st => st.section)
  const dispatch = useDispatch()
  const onExit = () => {
    dispatch(saveResult({ part, id: lessonId }))
    dispatch(incrementSection())
  }
  return (
    <View style={container}>
      <Header onPressL={onExit} nameIconL=":back:" textColor="white" title="Победа" />
      <Space height={vs(30)} />
      <Text h7 centerText oneColor={white} title={title ? title : cardName} />
      <CenterView>
        <View style={gifContainer}>
          <Image style={gifStyle} source={Unicorn} />
        </View>
      </CenterView>
    </View>
  )
}

const styles = StyleSheet.create({
  gifStyle: {
    width: '100%',
    height: '100%'
  },
  gifContainer: {
    width: W / 1.5,
    height: W / 1.5,
    borderRadius: s(5),
    overflow: 'hidden'
  },
  container: {
    flex: 1
  }
})
const { gifStyle, container, gifContainer } = styles
