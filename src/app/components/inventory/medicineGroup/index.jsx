import React from "react"
import {SideBar } from '../../dashboard/sidebar'
import style from './style.module.css'
import dashboardStyle from '../../dashboard/style.module.css'
import { GroupComp } from "./GroupComp"

export const Groups = () => {
    return (
        <section className={dashboardStyle.dashboard}>
            <SideBar/>
            <GroupComp/>
        </section>
    )
}