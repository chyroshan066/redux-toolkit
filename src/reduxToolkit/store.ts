import { employeeReducer } from "./slice/employeeSlice";
import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "./slice/studentSlice";

export const store = configureStore({
  reducer: {
    employee: employeeReducer,
    student: studentReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
