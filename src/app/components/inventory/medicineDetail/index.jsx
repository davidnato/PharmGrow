import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import {MedicinesDetailComp} from './medicineDetailComp'
//import dashboardstyle from '../../dashboard/style.module.css'

export const MedicinesDetail=()=>{
    return(
        <section className={style.medicinesGroups}>
            <SideBar/>
            <MedicinesDetailComp/>
        </section>
    )
}