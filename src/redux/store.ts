import { configureStore } from '@reduxjs/toolkit';
import ingridientCounterReducer from './ingridientCounterSlice';

export const store = configureStore({
  reducer: {
    ingridientCounter: ingridientCounterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;
