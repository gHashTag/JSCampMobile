import { createNavigationContainerRef } from '@react-navigation/native'
import { Dimensions, Platform } from 'react-native'
import { RootStackParamList } from './types'

// NAVIGATION
export const navRef = createNavigationContainerRef<RootStackParamList>()

export const goToUI = () => {
  // @ts-ignore
  if (navRef.isReady) {
    navRef.navigate('UI')
  }
}

// Dimensions
export const win = Dimensions.get('window')
export const W = win.width
export const H = win.height

// COLORS
export const primary = '#50E3C2'
export const secondary = '#ff06f4'
export const gray = '#949494'
export const white = '#ffffff'
export const black = '#17191A'
export const darkGray = '#3B3B3B'
export const lightGray = '#BFBFBF'
export const brightTurquoise = '#1EE4EC'
export const green = '#2ECC71'

export const en_gradient = '#FED2F1'
export const en_color = '#FDBEEA'
export const js_gradient = '#F6E367'
export const js_color = '#F3DE50'
export const rn_gradient = '#D3FFEF'
export const rn_color = '#BEFCE5'
export const ts_gradient = '#178FE0'
export const ts_color = '#007ACD'
export const aws_gradient = '#FC30F3'
export const aws_color = '#FF06F4'

export const getColor = (id: number) => {
  return ['#FDBEEA', '#F3DE50', '#BEFCE5', '#007ACD', '#FF06F4'][id]
}
// THEMES
export const lightTheme = {
  dark: false,
  colors: {
    primary: secondary,
    background: white,
    card: '#F6F8FA',
    text: black,
    border: darkGray,
    notification: 'rgb(255, 69, 58)'
  }
}
export const darkTheme = {
  dark: true,
  colors: {
    primary: primary,
    background: black,
    card: '#282A36',
    text: white,
    border: lightGray,
    notification: 'rgb(255, 69, 58)'
  }
}

// FONTS
export const KLMN = Platform.OS === 'ios' ? 'KLMN-Flash-Pix' : 'KLMN_Flash_Pix'
export const Dolbak = Platform.OS === 'ios' ? 'The Dolbak' : 'TheDolbak-Brush'
export const Etna = Platform.OS === 'ios' ? 'Etna' : 'etna-free-font'
export const Narrow = '3270Narrow'

export function shuffle(array: any[]) {
  return array
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
}

export function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)]
}
