"use client";

import { AddEmployees } from "@/components/addEmployee/addEmp";
import { ShowEmployees } from "@/components/showEmployee/showEmp";
import { setEmployee } from "@/reduxToolkit/slice/employeeSlice";
import { AppDispatch } from "@/reduxToolkit/store";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function Home(){
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
      const empData = localStorage.getItem("emp")   
        if(empData)
          dispatch(setEmployee(JSON.parse(empData)));
  }, [dispatch])

  return <>
    <AddEmployees />
    <ShowEmployees />
  </>
}