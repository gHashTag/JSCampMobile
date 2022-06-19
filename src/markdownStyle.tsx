import React from 'react'
import { Theme } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import { RenderRules } from 'react-native-markdown-display'
import { s, vs } from 'react-native-size-matters'
import { CodeHighlighter, Text } from './components'
import { secondary } from './constants'
import { nanoid } from 'nanoid/non-secure'

export const getMarkdownStyle = (theme: Theme) => {
  const {
    colors: { text, border, primary, notification, background, card }
  } = theme
  const styles = StyleSheet.create({
    body: {},
    // Headings
    heading1: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      fontSize: s(30),
      marginTop: vs(10),
      marginBottom: vs(16),
      alignSelf: 'center',
      color: text
    },
    heading2: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: s(22),
      marginTop: vs(8),
      marginBottom: vs(10)
    },
    heading3: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: s(18),
      marginTop: vs(6),
      marginBottom: vs(6)
    },
    heading4: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: s(16),
      marginTop: vs(4),
      marginBottom: vs(4)
    },
    heading5: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: s(13),
      marginTop: vs(4),
      marginBottom: vs(4)
    },
    heading6: {
      flexDirection: 'row',
      fontFamily: 'Spectral-Bold',
      color: text,
      fontSize: s(11),
      marginTop: vs(4),
      marginBottom: vs(4)
    },

    // Text Output
    text: {},
    textgroup: {},
    paragraph: {
      marginVertical: vs(8),
      lineHeight: s(18),
      flexWrap: 'wrap',
      fontFamily: 'Spectral-Medium',
      flexDirection: 'row',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      fontSize: s(14),
      color: border
    },
    hardbreak: {
      width: '100%',
      height: 1
    },
    softbreak: {},

    // Emphasis
    strong: {
      fontFamily: 'Spectral-Bold'
    },
    em: {
      fontFamily: 'Spectral-MediumItalic'
    },
    s: {
      // не знаю что это
      textDecorationLine: 'line-through'
    },
    // Links
    link: {
      textDecorationLine: 'underline',
      color: primary,
      fontFamily: 'Spectral-Bold'
    },
    blocklink: {
      flex: 1,
      borderColor: '#000000',
      borderBottomWidth: 1
    },
    // Blockquotes
    blockquote: {
      backgroundColor: 'rgba(139, 139, 139, 0.1)',
      borderColor: secondary,
      borderLeftWidth: s(1),
      paddingLeft: s(10),
      paddingBottom: vs(4)
    },
    // Code
    code_inline: {
      // `code`
      backgroundColor: card
    },
    code_block: {
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(5)
    },
    fence: {
      // ```code```
      backgroundColor: card,
      paddingVertical: s(10),
      paddingHorizontal: s(5),
      borderRadius: s(10)
    }
  })
  const rules: RenderRules = {
    fence: a => {
      // console.log('fence:', a)
      // @ts-expect-error
      return <CodeHighlighter key={nanoid()} type={a.sourceInfo} codeText={a.content} />
    },
    code_inline: a => {
      console.log('code_inline:', a)
      return <CodeHighlighter key={nanoid()} type={'js'} codeText={a.content} />
    }
  }
  return {
    styles,
    rules
  }
}

export const markdownStyle = StyleSheet.create({
  body: {},

  // Horizontal Rule
  hr: {
    backgroundColor: '#000000',
    height: 1
  },

  // Lists
  bullet_list: {},
  ordered_list: {},
  list_item: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_icon: {
    marginLeft: s(5),
    marginRight: s(8),
    color: 'blue',
    fontSize: s(20)
  },
  // @pseudo class, does not have a unique render rule
  bullet_list_content: {
    flex: 1
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_icon: {
    marginLeft: 10,
    marginRight: 10
  },
  // @pseudo class, does not have a unique render rule
  ordered_list_content: {
    flex: 1
  },

  // Code

  // Tables
  table: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 3
  },
  thead: {},
  tbody: {},
  th: {
    flex: 1,
    padding: 5
  },
  tr: {
    borderBottomWidth: 1,
    borderColor: '#000000',
    flexDirection: 'row'
  },
  td: {
    flex: 1,
    padding: 5
  },

  // Links
  link: {
    textDecorationLine: 'underline'
  },
  blocklink: {
    flex: 1,
    borderColor: '#000000',
    borderBottomWidth: 1
  },

  // Images
  image: {
    flex: 1
  },

  // Text Output
  text: {},
  textgroup: {},
  paragraph: {
    marginTop: vs(7),
    marginBottom: vs(7),
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    fontSize: s(14)
  },
  hardbreak: {
    width: '100%',
    height: 1
  },
  softbreak: {},

  // Believe these are never used but retained for completeness
  pre: {},
  inline: {},
  span: {}
})
