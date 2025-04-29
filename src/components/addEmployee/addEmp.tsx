"use client";

import { useDispatch } from "react-redux";
import styles from "./addEmp.module.css";
import { useState } from "react";
import { addEmployee } from "@/reduxToolkit/slice/employeeSlice";
import Link from "next/link";

export const AddEmployees = () => {
  const [empName, setEmpName] = useState("");
  const dispatch = useDispatch();
  const addDataDispatch = () => {
    dispatch(addEmployee({ name: empName })); // We should pass in the same manner, as we define in slice.tsx
    setEmpName("");
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add Employees</h2>
      <input
        className={styles.input}
        type="text"
        placeholder="Enter Employee Data"
        onChange={(e) => setEmpName(e.target.value)}
        value={empName}
      />
      <button className={styles.button} onClick={addDataDispatch}>
        Add
      </button>
      <Link href="/delete-employee" className="text-blue-900">Delete</Link>
    </div>
  );
};
