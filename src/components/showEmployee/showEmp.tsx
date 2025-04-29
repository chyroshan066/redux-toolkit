"use client";

import { useSelector, useDispatch } from "react-redux";
import styles from "./showEmp.module.css";
import { deleteEmployee } from "@/reduxToolkit/slice/employeeSlice";
import { RootState } from "@/reduxToolkit/store";
import { Data } from "@/types/employeeTypes";

export const ShowEmployees = () => {
  const employeeData = useSelector((data: RootState) => data.employee.employees);
  const dispatch = useDispatch();
  const deleteDataDispatch = (itemId: string) => {
    dispatch(deleteEmployee({ id: itemId }));
  };

  return (
    <div className={`${styles.container} h-[70vh]`}>
      <h2 className={styles.title}>Show Employees</h2>
      {employeeData.map((item: Data) => (
        <h4 key={item.id} className="mb-1">
          <span>{item.name}</span>
          <button
            className={styles.button}
            onClick={() => deleteDataDispatch(item.id)}
          >
            Delete
          </button>
        </h4>
      ))}
    </div>
  );
};
