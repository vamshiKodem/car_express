import { configureStore } from "@reduxjs/toolkit";
import carDetailReducer from "../reducer/carDetailReducer";

const store = configureStore({
  reducer: {
    carDetailReducer: carDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
