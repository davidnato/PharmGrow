import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';

import { AddMedicineComp } from "./AddMedicineComp"

export const AddMedicine=()=>{
    return(
        <section className={style.addMedicineComp}>
            <SideBar/>
            <AddMedicineComp/>
        </section>
    )
}