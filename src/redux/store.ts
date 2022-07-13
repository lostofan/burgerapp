import { configureStore } from "@reduxjs/toolkit";
import ingridientCounterReducer from "./ingridientCounterSlice";
import showModalSlice from "./showModalSlice";

export const store = configureStore({
    reducer: {
        ingCounter: ingridientCounterReducer,
        showModal: showModalSlice
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AddDispatch = typeof store.dispatch;