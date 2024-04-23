import dashboardStyle from '../../dashboard/style.module.css'
import listStyle from '../medicineList/style.module.css'
import { LayoutHeader } from '../../header'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import sideBarstyle from '../../dashboard/sidebar/style.module.css'
import style from './style.module.css'
import axios from 'axios';
// import { HandleDropDown } from '../hooks/toggle';
import React from 'react';
import { useEffect } from 'react';

export const ShortageComp = () => {

    return (
        <section className={dashboardStyle.dashboardSection}>
            <header>
                <LayoutHeader />
            </header>
            <div className={dashboardStyle.dashboardMain}>
                <Main />
            </div>
        </section>
    )
}

export const Main = () => {

    return (
        <section className={dashboardStyle.main}>
            <Head />
            <ShortageMain />
        </section>
    )
}

export const Head = () => {
    const [show, setShow] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    return <div className={dashboardStyle.head}>
        <div className={dashboardStyle.info}>
            <h3>Medicines Shortage</h3>
            <p>Medicines Group less than 50</p>
        </div>
        <div className={dashboardStyle.downloadButton} onClick={handleDropDown}>
            <button>Download Report
                <div className={dashboardStyle.buttonDropdown} >
                    <MdOutlineKeyboardArrowDown />
                    {show &&
                        <div className={dashboardStyle.dashboardhover}>
                            <div className={sideBarstyle.whitebg}>
                                <div className={sideBarstyle.dropDown}></div>
                                <div className={sideBarstyle.myProfileDiv}>
                                    <div className={sideBarstyle.myProfile}>
                                        <AiOutlineFileExcel />
                                        <p>Excel</p>
                                    </div>
                                    <div className={sideBarstyle.logout}>
                                        <AiOutlineFilePdf />
                                        <p>PDF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </button>
        </div>
    </div>
}
export const ShortageMain = () => {
    const [data, setData] = React.useState([])
    const [index, setIndex] = React.useState()

    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.data);
                // console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
    return(
        <section>
            <table className={listStyle.table}>
                <thead>
                    <tr className={listStyle.headrow}>
                        
                        <th className={listStyle.head}>Group Name
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                        <th className={listStyle.head}>Stock left in Qty
                            {/* <span><HiOutlineSelector /></span> */}
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {data.map((stock, index) =>
                        <tr key={index}>
                            <td>{stock.name}</td>
                            <td>{stock.id}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </section>
    )
}