import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { SettingSection } from "./SettingsComp"
import dashboardStyle from '../dashboard/style.module.css'

export const Settings = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <SettingSection/>
        </section>
    )
}