import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header/index'
import sideBarstyle from '../dashboard/sidebar/style.module.css'
import style from './style.module.css'
import { MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowRight } from 'react-icons/md';
// import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
// import { HandleDropDown } from '../hooks/toggle';
import React, { useEffect } from 'react';
import { getRevenue } from '../../utilities/API';
import axios from 'axios';
import { MdOutlineArrowUpward } from "react-icons/md";
import { mapData } from './data'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
// import { Link } from 'react-router-dom';
// import { combinedClasses } from '../../utilities/format';

export const AnalysisMain = () => {

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
    const [show, setShow] = React.useState(false)

    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }

    return (
        <section className={dashboardStyle.main}>
            <Head/>
            <div className={style.analysisRow1}>
                <div className={style.eachbox}><Chart /></div>
                <div className={style.eachbox}><CustomTable /></div>
            </div>
            <div className={style.analysisRow2}>
                <div className={style.gridGrid}>
                    {mapData.map((data, index) => {
                        return <div className={style.eachbox} key={index}>
                            <h6>{data.title}</h6>
                            <div className={style.amount}>
                                <h3>{data.amount}</h3>
                                <div className={index === 3 ? style.lastIndex : style.green}>
                                    <MdOutlineArrowUpward /> &nbsp;
                                    19%</div>
                            </div>
                            <p className={style.p1}>Compared to Last Month</p>
                            <div className={style.details}>
                                <p>View Details</p>
                                <MdOutlineKeyboardArrowRight />
                            </div>
                        </div>

                    })}

                </div>
                <div>hello</div>
                <div>hello</div>
            </div>
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
            <h3>Sales Report</h3>
            <p>Today's Sales Report</p>
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
export const Chart = () => {
    const [dataNew, setDataNew] = React.useState([])
    const [revenueData, setRevenueData] = React.useState({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        // .then(result => {
        //     setData(result.data);
        //     // console.log(data)
        // })
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
            .then(res => {
                // console.log(res)
                setDataNew(res.carts)
                console.log(res.carts)
                let allItems = res.carts
                console.log(allItems)
                const inventory = allItems.map((stock) => {
                    return stock.discountedTotal;
                });
                console.log(inventory)
                // setDataNew(inventory)
                const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
                const dataSource = {
                    labels,
                    datasets: [
                        {
                            label: 'Sales',
                            data: inventory,
                            backgroundColor: '#0095FF',
                        }
                    ],
                };
                setRevenueData(dataSource)
                console.log(revenueData)
            })
            // console.log(dataNew)
            // console.log('dataNew')
            // .then((res) => {
            //     // setData(result.data);
            //     // console.log(data)
            //     const inventory = res.carts.map((cart) => {
            //         return cart.discountedTotal;
            //     });
            //     // const inventory = 'hello'
            //     // console.log(inventory)
            //     const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            //     const dataSource = {
            //         labels,
            //         datasets: [
            //             {
            //                 // label: 'Dataset 1',
            //                 data: inventory,
            //                 backgroundColor: '#0095FF',
            //             }
            //         ],
            //     };
            //     // setRevenueData(dataSource)
            // })
            .catch(error => console.log(error))

    }, [])

    return <Bar options={options} data={revenueData} />;
}
export const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
        },
        title: {
            display: true,
            text: 'Total Revenue',
        },
    },
};

export const CustomTable = () => {
    return <section className={style.tableSection}>
        <h6>Top Products</h6>
        <table className={style.table}>
            <thead>
                <tr className={style.headrow}>
                    <th className={style.head}>#</th>
                    <th className={style.head}>Name</th>
                    <th className={style.head}>Popularity </th>
                    <th className={style.head}>Sales</th>
                </tr>
            </thead>
            <tbody>

                {/* {data.map((user, index) => */}
                    <tr>
                        <td>id</td>
                        <td>name</td>
                        <td>Popularity chart</td>
                        <td>%</td>

                    </tr>
                {/* )} */}
            </tbody>
        </table>
    </section>
}


