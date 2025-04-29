import { Data, EmployeeState } from "@/types/employeeTypes";
import {
  createAsyncThunk,
  createSlice,
  current,
  nanoid,
  PayloadAction,
} from "@reduxjs/toolkit";

const initialState: EmployeeState = {
  employees: [],
  isLoading: false,
  error: null,
  employeesAPIData: [],
};

export const apiData = createAsyncThunk("apiData", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  return response.json(); // we must return some value in async function inside createAsyncThunk
});

const Slice = createSlice({
  name: "employeeSlice", // name must be defined, you can name whatever you want
  initialState,
  reducers: {
    // addEmployee: (state, action: PayloadAction<{ employees: MyData }>) => {            // Traditional approach
    addEmployee: (state, action: PayloadAction<{ name: string }>) => {
      // We can nest as much deeper as we want. Since, we are operating on only one employee data, so we didn't passed an array here
      const data: Data = {
        id: nanoid(), //nanoid method returns "string", not a "number"
        name: action.payload.name,
      };
      state.employees.push(data);
      if (typeof window !== "undefined") {
        //Extra guard to make sure code runs only in browser (not in server side like Next.js SSR)
        const empData = JSON.stringify(current(state.employees)); //while saving in "localStorage", "sessionStorage" or "cookies", redux state are immutable, so we must use "current" to wrap the redux-states.
        localStorage.setItem("emp", empData);
      }
    },
    deleteEmployee: (state, action: PayloadAction<{ id: string }>) => {
      state.employees = state.employees.filter(
        (employee) => employee.id !== action.payload.id
      );
      if (typeof window !== "undefined")
        // typeof window returns string
        localStorage.setItem("emp", JSON.stringify(state.employees));
    },
    setEmployee: (state, action: PayloadAction<Data[]>) => {
      state.employees = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(apiData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(apiData.rejected, (state, action) => {
      state.error = action.error;
      state.isLoading = false;
    });
    builder.addCase(apiData.fulfilled, (state, action) => {
      state.employeesAPIData = action.payload;
      state.isLoading = false;
    });
  },
});

export const { addEmployee, deleteEmployee, setEmployee } = Slice.actions; // must be destructed and exported for slice actions.
export const employeeReducer = Slice.reducer;
