import { nanoid } from 'nanoid/non-secure'
import React, { useEffect, useState } from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { LessonCard, Loading, ScrollContainer } from '../../../components'
import { js_color, js_gradient } from '../../../constants'
import { toggleColor } from '../../../slices/bgColorSlice'
import { useTypedDispatch } from '../../../store'
import { LessonData } from '../../../types/LessonTypes'
import { JsScreenT } from './type'

export function JsScreen({ navigation, route }: JsScreenT) {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)

  const fetchData = async () => {
    try {
      setLoad(true)
      const res = await (
        await fetch('https://s3.eu-central-1.wasabisys.com/jscamp/JSForKids/JS.json')
      ).json()
      setData(res)
      setLoad(false)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    fetchData()
  }, [])
  const dispatch = useTypedDispatch()
  const isDark = useColorScheme() === 'dark'
  const handlePressCard = (item: LessonData) => {
    dispatch(toggleColor('js'))
    if (item.sections[0].type === 'quest') {
      navigation.navigate('TEST_SCREEN', {
        // @ts-ignore
        tests: item.sections[0].questions,
        questHeader: item.sections[0].questsHeader
      })
    } else {
      navigation.navigate('LESSON_DETAIL_SCREEN', item.sections[0])
    }
  }
  return load ? (
    <Loading color={js_color} />
  ) : (
    <ScrollContainer bgColor={!isDark ? js_color : undefined}>
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            border={!isDark}
            key={nanoid()}
            onPress={() => handlePressCard(item)}
            gradient={{ top: js_gradient, bottom: js_color }}
            leftIcon={item.leftIcon ? item.leftIcon : 'language-javascript'}
            title={item.cardTitle}
          />
        )
      })}
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({})

const {} = styles
