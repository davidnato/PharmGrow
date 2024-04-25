
import style from './style.module.css';
import {MedicinesListComp} from './MedicineListComp'
import { SideBar } from '../../dashboard/sidebar';
import dashboardstyle from '../../dashboard/style.module.css'

export const MedicinesList=()=>{
    return(
        <section className={style.medicinesList}>
            <SideBar/>
            <MedicinesListComp/>
        </section>
    )
}