import { LayoutHeader } from '../../header';
import style from './style.module.css';
import {MedicinesListComp} from './MedicineListComp'
//import dashboardstyle from '../../dashboard/style.module.css'

export const MedicinesList=()=>{
    return(
        <section className={style.medicinesList}>
            <LayoutHeader/>
            <MedicinesListComp/>
        </section>
    )
}