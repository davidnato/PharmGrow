import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { SettingSection, AddUsers, UsersList } from "./SettingsComp"
import listStyle from '../inventory/medicineList/style.module.css'

export const Settings = () => {
    return (
        <section className={listStyle.medicinesList}>
            <SideBar/>
            <SettingSection/>
        </section>
    )
}
export const AddUserSection = () => {
    return (
        <section className={listStyle.medicinesList}>
            <SideBar/>
            <AddUsers/>
        </section>
    )
}
export const UsersListSection = () => {
    return (
        <section className={listStyle.medicinesList}>
            <SideBar/>
            <UsersList/>
        </section>
    )
}