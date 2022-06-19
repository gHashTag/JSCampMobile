export interface LessonData {
  id: number
  cardTitle: string
  leftIcon?: string
  sections: sectionT[]
}

export type sectionT = {
  type: 'lesson' | 'quest'
  contentUrl?: string
  questions?: questionsT[]
  header: string
  questsHeader: string
  poster?: string
}

export type questionsT = {
  // выборать одно, ввести текст ответа, перенести в области кубики, выборка,
  // соединить варианты между собой, дополнить текст
  type:
    | 'oneChoice'
    | 'input'
    | 'drag'
    | 'manySelect'
    | 'joinVariants'
    | 'supplement'
    | 'emoji'
  oneChoice?: oneSelectT
  input?: inputAnswerT
  drag?: DragVariantT
  manySelect?: manySelectT
  joinVariants?: joinVariantsT
  supplement?: supplementT
  emoji?: emojiTestT
}

export type oneSelectT = {
  questionText: string
  variants: string[]
  correctAnswer: string
}

export type inputAnswerT = {
  questionText: string
  correctAnswer: string
}

export type DragVariantT = {
  questionText: string // с помощью regExp можно вырезать слова,
  // заключеные в какой либо символ и по порядку занести в массив,
  // а затем сравнить порядок слов которые ввел пользователь
  fakeWords: string[]
}

export type manySelectT = {
  questionText: string
  correctAnswers: string[]
  variants: string[]
}

export type emojiTestT = {
  dataUrl: string
}

export type emojiT = {
  id: string | number
  name: string
  title: string
  url: string
  ru?: string
}

export type joinVariantsT = {
  questionText: string
  left: string[]
  right: string[]
  correctCouples: string[][]
}

export type supplementT = {
  questionText: string
}
