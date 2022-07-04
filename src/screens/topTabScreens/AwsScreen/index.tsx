import React from 'react'
import { StyleSheet, useColorScheme, View } from 'react-native'
import { ComingSoon, LessonCard, ScrollContainer } from '../../../components'
import { aws_color, aws_gradient } from '../../../constants'
import { AwsScreenT } from './type'
import { FlatList } from 'react-native-gesture-handler'
import { nanoid } from 'nanoid/non-secure'
import { s, vs } from 'react-native-size-matters'
import { LessonData } from '../../../types/LessonTypes'

export function AwsScreen({ navigation, route }: AwsScreenT) {
  const isDark = useColorScheme() === 'dark'
  return (
    <ComingSoon bg="aws" />
    // <ScrollContainer bgColor={!isDark ? aws_color : undefined}>
    //   {/* <FlatList
    //     data={data}
    //     scrollEnabled={false}
    //     ListHeaderComponent={() => <Space height={vs(20)} />}
    //     renderItem={({ item }) => (
    //       <LessonCard
    //         onPress={() => handlePressCard(item)}
    //         gradient={{ top: aws_gradient, bottom: aws_color }}
    //         leftIcon="aws"
    //         title={item.cardTitle}
    //       />
    //     )}
    //     keyExtractor={() => nanoid()}
    //   /> */}
    // </ScrollContainer>
  )
}
