import { NavigatorScreenParams } from '@react-navigation/native'
import { questionsT, sectionT } from './LessonTypes'

export type RootStackParamList = {
  UI: undefined
  BOTTOM_TABS?: NavigatorScreenParams<RootBottomTabParamList>
  LESSON_DETAIL_SCREEN: lessonDetail
  TEST_SCREEN: {
    tests: questionsT[]
    questsHeader: string
  }
  LEARN_SCREEN: {
    words: questionsT[]
  }
}
interface lessonDetail extends sectionT {
  header: string
  questsHeader: string
}

export type RootBottomTabParamList = {
  TOP_TABS?: NavigatorScreenParams<RootTopTabParamList>
  QR_SCREEN: undefined
}

export type RootTopTabParamList = {
  EN_SCREEN: undefined
  JS_SCREEN: undefined
  RN_SCREEN: undefined
  TS_SCREEN: undefined
  AWS_SCREEN: undefined
}
