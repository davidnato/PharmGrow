import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { ReportMain } from "./reportComp"
import dashboardStyle from '../dashboard/style.module.css'

export const Report = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <ReportMain/>
        </section>
    )
}