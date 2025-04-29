"use client";

import { apiData } from "@/reduxToolkit/slice/employeeSlice";
import { AppDispatch, RootState } from "@/reduxToolkit/store";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"

export default function APIData(){
    const dispatch = useDispatch<AppDispatch>();
    const { employeesAPIData, isLoading, error} = useSelector((state: RootState) => state.employee);

    useEffect(() => {  
        dispatch(apiData());
    }, [dispatch])

    return (
        isLoading? (
            <p>Loading....</p>
        ): error? (
            <p>Error...</p>
        ): employeesAPIData.length > 0 ? (
                employeesAPIData.map((item) => (
                    <p key={item.id}>{item.name}</p>
                ))
        ): (
        <p>No data found</p> 
        )
    )
}