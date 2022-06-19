import React from 'react'
import { StyleSheet, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer } from '../../../components'
import { aws_color, aws_gradient } from '../../../constants'
import { AwsScreenT } from './type'
import { FlatList } from 'react-native-gesture-handler'
import { nanoid } from 'nanoid/non-secure'
import { s, vs } from 'react-native-size-matters'
import { LessonData } from '../../../types/LessonTypes'

export function AwsScreen({ navigation, route }: AwsScreenT) {
  const handlePressCard = (item: LessonData) => {
    if (item.sections[0].type === 'quest') {
      navigation.navigate('TEST_SCREEN', {
        tests: item.sections[0].questions,
        questHeader: item.sections[0].questsHeader
      })
    } else {
      navigation.navigate('LESSON_DETAIL_SCREEN', item.sections[0])
    }
  }
  return (
    <ScrollContainer>
      {/* <FlatList
        data={data}
        scrollEnabled={false}
        ListHeaderComponent={() => <Space height={vs(20)} />}
        renderItem={({ item }) => (
          <LessonCard
            onPress={() => handlePressCard(item)}
            gradient={{ top: aws_gradient, bottom: aws_color }}
            leftIcon="aws"
            title={item.cardTitle}
          />
        )}
        keyExtractor={() => nanoid()}
      /> */}
      <ComingSoon />
    </ScrollContainer>
  )
}
