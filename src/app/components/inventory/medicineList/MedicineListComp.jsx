import { SideBar } from "../../dashboard/sidebar"
import style from './style.module.css';
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdOutlineFilterAlt, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { routes } from "../../../utilities/routes";
import { CustomInput } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import { MyButton } from "../../button";
import { useEffect } from "react";
import React from "react";
import { HiOutlineSelector } from "react-icons/hi";
import axios from 'axios';
import { LayoutHeader } from '../../header';




export const MedicinesListComp = () => {
    return (
        <section className={style.medicinesListComp}>
            <header className={style.header}><LayoutHeader /></header>
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
            <div className={style.head2}>
                <CustomInput type="search" placeholder="Search" className={style.search} />
                <div>
                    <MdOutlineFilterAlt />
                    <MyButton type='outline' className={style.button}
                    // onClick={handleLogin} 
                    >
                        <p> - Select Group - </p>
                        <MdOutlineKeyboardArrowDown />
                    </MyButton>
                </div>
            </div>
            <Table />

        </div>
    )
}

export const Table = () => {
    const [data, setData] = React.useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/stock')
            .then(result => {
                setData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    })

    return (

        <div>
            <table className={style.table}>
                <thead>
                    <tr className={style.headrow}>
                        <th className={style.head}>Medicine Name
                            <HiOutlineSelector />
                        </th>
                        <th className={style.head}>Medicine ID
                            <HiOutlineSelector />
                        </th>
                        <th className={style.head}>Group Name
                            <HiOutlineSelector />
                        </th>
                        <th className={style.head}>Stock in Qty
                            <HiOutlineSelector />
                        </th>
                        <th className={style.head}>Action
                            <HiOutlineSelector />
                        </th>
                        {/* <th>View Full Detail</th> */}
                    </tr>
                </thead>
                <tbody>

                    {data.map((user, index) =>
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.id}</td>
                            <td>{user.group}</td>
                            <td>{user.qty}</td>
                            <td>
                                <Link to={routes.medicineDetail()}>View Full Detail</Link></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}