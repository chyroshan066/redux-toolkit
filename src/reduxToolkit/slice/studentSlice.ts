import { Data } from "@/types/employeeTypes";
import { StudentState } from "@/types/studentTypes";
import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";

const initialState: StudentState = {
  students: [],
};

const Slice = createSlice({
  name: "studentsSlice",
  initialState,
  reducers: {
    addStudents: (state, action: PayloadAction<{ name: string }>) => {
      const data: Data = {
        id: nanoid(),
        name: action.payload.name,
      };
      state.students.push(data);
    },
  },
});

export const { addStudents } = Slice.actions;
export const studentReducer = Slice.reducer;
