"use client";

import { useDispatch, useSelector } from "react-redux";
import styles from "@/components/showEmployee/showEmp.module.css";
import { deleteEmployee } from "../../reduxToolkit/slice/employeeSlice";
import Link from "next/link";
import { RootState } from "../../reduxToolkit/store";
import { Data } from "@/types/employeeTypes";

export default function DeleteEmployee(){
    const employeeData = useSelector((data: RootState) => data.employee.employees)
    const dispatch = useDispatch();
    const deleteDataDispatch = (itemId: string) => {
        dispatch(deleteEmployee({ id: itemId }));
    }

    return <>
        <div className={`${styles.container} h-[100vh]`}>
            <h2 className={styles.title}>Delete Employee</h2>
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
            <Link href="/" className="text-blue-900">Home</Link>
        </div>
    </>
}