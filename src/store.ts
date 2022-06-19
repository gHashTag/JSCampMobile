import { configureStore } from '@reduxjs/toolkit'
import { DragAndDropReducer } from './components/QuestionComponents/DragVariant/DragAndDropSlice'
import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux'
import { bgColorReducer } from './slices/bgColorSlice'

export const store = configureStore({
  reducer: {
    DragAndDrop: DragAndDropReducer,
    bgColor: bgColorReducer
  }
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

// typed hooks
export const useTypedDispatch = () => useDispatch<AppDispatch>()
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector
export const useTypedStore = () => useStore<RootState>()
