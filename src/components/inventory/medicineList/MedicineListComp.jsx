import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdOutlineFilterAlt,MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { routes } from "../../../utilities/routes";
import { CustomInput } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import { MyButton } from "../../button";

export const MedicinesListComp = () => {
    return (
        <section className={style.MedicinesListComp}>
            <SideBar />
            <MedicinesListMain />
        </section>
    )
}

export const MedicinesListMain = () => {
    return (
        <div className={combinedClasses(dashboardstyle.main, style.main)}>
            <div className={dashboardstyle.head}>
                <div className={dashboardstyle.info}>
                    <h3 className={style.title}>Inventory <span>&nbsp; <MdOutlineKeyboardArrowRight /></span> &nbsp;List of Medicines</h3>
                    <p>List of Medicines available for sales</p>
                </div>
                <div className={dashboardstyle.downloadButton}>
                    <button >
                        <Link to={routes.addMedicine()} className={combinedClasses(style.downloadButton, 'link')} >
                            <MdOutlineAdd />
                            <p>Add New Item</p>
                        </Link>
                    </button>
                </div>
            </div>
            <div>
                <CustomInput type="search" placeholder="Search" className={style.search} />
                <div>
                    <MdOutlineFilterAlt />
                    <MyButton type='outline'
                    // onClick={handleLogin} 
                    >
                        <p>- Select Group -</p>
                        <MdOutlineKeyboardArrowDown/>
                    </MyButton>
                </div>
            </div>

        </div>
    )
}