import React, { useEffect, useState } from 'react'
import { LessonCard, Loading, ScrollContainer } from '../../../components'
import { en_color, en_gradient, goToUI } from '../../../constants'
import { EnScreenT } from './type'
import { nanoid } from 'nanoid/non-secure'
//import data from '../../../DATA/EN.json'
import { LessonData } from '../../../types/LessonTypes'
import { useTypedDispatch } from '../../../store'
import { toggleColor } from '../../../slices/bgColorSlice'
import { useColorScheme } from 'react-native'

export function EnScreen({ navigation, route }: EnScreenT) {
  const [data, setData] = useState([])
  const [load, setLoad] = useState(true)
  const isDark = useColorScheme() === 'dark'
  const fetchData = async () => {
    try {
      setLoad(true)
      const res = await (
        await fetch('https://s3.eu-central-1.wasabisys.com/jscamp/EnForKids/EN.json')
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

  const handlePressCard = (item: LessonData) => {
    dispatch(toggleColor('en'))
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
    <Loading color={en_color} />
  ) : (
    <ScrollContainer bgColor={!isDark ? en_color : undefined}>
      {data.map((item: LessonData) => {
        return (
          <LessonCard
            border={!isDark}
            key={nanoid()}
            onPress={() => handlePressCard(item)}
            gradient={{ top: en_gradient, bottom: en_color }}
            leftIcon={item.leftIcon ? item.leftIcon : 'bookshelf'}
            title={item.cardTitle}
          />
        )
      })}
    </ScrollContainer>
  )
}
