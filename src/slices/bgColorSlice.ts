import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { en_color, rn_color, aws_color, ts_color, js_color } from '../constants'

const initialState: initT = {
  bgColor: en_color
}

const allColors = {
  en: en_color,
  rn: rn_color,
  aws: aws_color,
  ts: ts_color,
  js: js_color
}

type allColorsT = 'en' | 'rn' | 'aws' | 'ts' | 'js'

export const bgColorSlice = createSlice({
  name: 'bgColor',
  initialState,
  reducers: {
    setColor: (state, action: PayloadAction<string>) => {
      state.bgColor = action.payload
    },
    toggleColor: (state, action: PayloadAction<allColorsT>) => {
      state.bgColor = allColors[action.payload]
    }
  }
})

export const { setColor, toggleColor } = bgColorSlice.actions

export const bgColorReducer = bgColorSlice.reducer

interface initT {
  bgColor: string
}
