import { SideBar } from "../dashboard/sidebar"
import style from './style.module.css';

import { InventoryComp } from "./InventoryComp"

export const Inventory=()=>{
    return(
        <section className={style.inventoryComp}>
            <SideBar/>
            <InventoryComp/>
        </section>
    )
}