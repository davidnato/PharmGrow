import React from "react"
import {SideBar } from '../../dashboard/sidebar'
import style from './style.module.css'
import dashboardStyle from '../../dashboard/style.module.css'
import { ShortageComp } from "./ShortageComp"

export const Shortage = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <ShortageComp/>
        </section>
    )
}