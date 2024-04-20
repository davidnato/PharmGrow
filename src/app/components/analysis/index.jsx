import React from "react"
import {SideBar } from '../dashboard/sidebar'
import style from './style.module.css'
import { AnalysisMain } from "./AnalysisComp"
import dashboardStyle from '../dashboard/style.module.css'

export const Analysis = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <AnalysisMain/>
        </section>
    )
}