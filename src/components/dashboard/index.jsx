import React from "react"
import {SideBar } from './sidebar/index'
import style from './style.module.css'
import { DashboardMain } from "./DashboardComp"

export const Dashboard = () => {
    return (
        <section className={style.dashboard}>
            <SideBar/>
            <DashboardMain/>
        </section>
    )
}