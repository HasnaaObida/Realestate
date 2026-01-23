import { configureStore } from "@reduxjs/toolkit";
import propertiesReducer from "./slices/propertiesSlice";

export const store = configureStore({
  reducer: {
    properties: propertiesReducer,
  },
});

// Types dyal Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
