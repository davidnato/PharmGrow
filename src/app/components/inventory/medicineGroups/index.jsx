import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import {MedicinesGroupsComp} from './medicineGroupsComp'
//import dashboardstyle from '../../dashboard/style.module.css'

export const MedicinesGroups=()=>{
    return(
        <section className={style.medicinesGroups}>
            <SideBar/>
            <MedicinesGroupsComp/>
        </section>
    )
}