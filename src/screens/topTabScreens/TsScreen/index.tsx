import { nanoid } from 'nanoid/non-secure'
import React from 'react'
import { FlatList, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer, Space } from '../../../components'
import { ts_color, ts_gradient } from '../../../constants'
import { LessonData } from '../../../types/LessonTypes'
import { TsScreenT } from './type'
import data from '../../../DATA/TS.json'

export function TsScreen({ navigation, route }: TsScreenT) {
  // const handlePressCard = (item: LessonData) => {
  //   if (item.sections[0].type === 'quest') {
  //     navigation.navigate('TEST_SCREEN', {
  //       tests: item.sections[0].questions,
  //       questHeader: item.sections[0].questsHeader
  //     })
  //   } else {
  //     navigation.navigate('LESSON_DETAIL_SCREEN', item.sections[0])
  //   }
  // }
  return (
    <ScrollContainer>
      {/* <FlatList
        data={data}
        ListHeaderComponent={() => <Space height={vs(20)} />}
        renderItem={({ item }) => (
          <LessonCard
            onPress={() => handlePressCard(item)}
            gradient={{ top: ts_gradient, bottom: ts_color }}
            leftIcon="language-typescript"
            title={item.cardTitle}
            lightText
          />
        )}
        keyExtractor={() => nanoid()}
      /> */}
      <ComingSoon />
    </ScrollContainer>
  )
}
