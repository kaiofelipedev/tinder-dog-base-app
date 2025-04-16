import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counter-slice'
import detailsDogReducer from './slices/details-dog-slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    detailsDog: detailsDogReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch