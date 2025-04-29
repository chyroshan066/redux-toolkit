export type Data = {
  id: string;
  name: string;
};

export type EmployeeState = {
  employees: Data[];
  isLoading: boolean;
  error: null | object;
  employeesAPIData: Data[];
};
