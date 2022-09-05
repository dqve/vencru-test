import { configureStore } from '@reduxjs/toolkit';
// 👇 import dataReducer from dataSlice
import dataReducer from './features/products/dataSlice'

export const store = configureStore({
  reducer: {
    // 👇 Add the dataReducer to the reducer object
    userData: dataReducer
  },
// 👇 show the devTools only in development
devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;