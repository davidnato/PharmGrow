import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { SuppliersSection } from "./SupliersComp"
import dashboardStyle from '../dashboard/style.module.css'
import { AddSupplier } from "./SupliersComp"

export const Supplier = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <SuppliersSection/>
        </section>
    )
}
export const AddNewSupplier=()=>{
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <AddSupplier/>
        </section>
    )
}