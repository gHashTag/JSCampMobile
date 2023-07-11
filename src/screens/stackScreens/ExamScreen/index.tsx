import React from 'react'
import { Appearance, View } from 'react-native'
import { examComplete, schemeToggle } from '../../../slices'
import { useTypedDispatch, useTypedSelector } from '../../../store'
import { RootStackParamList } from '../../../types'
import { SelectQuestType, WinScreen } from '../TypesOfLessons'
import { RouteProp, useFocusEffect } from '@react-navigation/native'
import { useState } from 'react'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'

export const ExamScreen = ({ route }: ExamScreenProps) => {
  const [questId, setQuestId] = useState<number>(0)
  const { questions, part } = route.params
  const dispatch = useTypedDispatch()
  const lastId = questions.length - 1
  const bg = useTypedSelector(st => st.bgColor.bgWithScheme)

  useFocusEffect(() => {
    const sub = Appearance.addChangeListener(({ colorScheme }) => {
      dispatch(schemeToggle(colorScheme === 'dark'))
    })
    return () => sub.remove()
  })

  const onWin = () => {
    if (questId === lastId) {
      dispatch(examComplete(part))
    }
    setQuestId(prevQuestId => prevQuestId + 1)
  }

  return (
    <View style={{ flex: 1, backgroundColor: bg }}>
      {questId === lastId + 1 ? (
        <WinScreen title="Вы прошли экзамен!!!" />
      ) : (
        <>
          <SelectQuestType onWin={onWin} {...questions[questId]} />
        </>
      )}
    </View>
  )
}

interface ExamScreenProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'EXAM_SCREEN'>
  route: RouteProp<RootStackParamList, 'EXAM_SCREEN'>
}

export default ExamScreen