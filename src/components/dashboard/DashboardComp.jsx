import style from './style.module.css'
import sideBarstyle from './sidebar/style.module.css'
import { LayoutHeader } from '../header';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";
import { HandleDropDown } from '../hooks/toggle';
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../utilities/format';

export const DashboardMain = () => {
    return (
        <section className={style.dashboardSection}>
            <header>
                <LayoutHeader />
            </header>
            <div className={style.dashboardMain}>
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
        <div className={style.main}>
            <div className={style.head}>
                <div className={style.info}>
                    <h3>Dashboard</h3>
                    <p>A quick data overview of the Inventory</p>
                </div>
                <div className={style.downloadButton} onClick={handleDropDown}>
                    <button>Download Report
                        <div className={style.buttonDropdown} >
                            <MdOutlineKeyboardArrowDown  />
                            {show &&
                                <div className={style.dashboardhover}>
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
            <AnalysisOne />
            { }
            <AnalysisTwo />
        </div>
    )
}

export const AnalysisOne = () => {
    return (
        <div className={style.analysis}>
            {
                analysisOne.map((analysis) =>
                    <div className={style.eachAnalysis}>
                        <div className={style.main}>
                            <div className={style.image}>{analysis.icon}</div>
                            <h6>{analysis.title}</h6>
                            <div className={style.description}><p>{analysis.description}
                                <span>&nbsp; {analysis.descriptionInfo} &nbsp; {analysis.dropDown}</span>
                            </p></div>
                        </div>
                        <Link to={analysis.url} className={combinedClasses(style.footer, 'link')}>
                            <p>{analysis.footer}</p>
                            {analysis.arrowRight}
                        </Link>
                    </div>
                )
            }
        </div>
    )
}

export const AnalysisTwo = () => {
    return (
        <div className={style.analysis2}>
            {
                analysisTwo.map((analysis) =>
                    <div className={style.eachAnalysis}>
                        <div className={style.row1}>
                            <h6>{analysis.title}</h6>
                            <Link to={analysis.url} className='link'>{analysis.navigate} &nbsp; <span>{analysis.arrow}</span></Link>
                        </div>
                        <div className={style.row2}>
                            <div>
                                <h3>{analysis.count1}</h3>
                                <p>{analysis.count1Title}</p>
                            </div>
                            <div>
                                <h3>{analysis.count2}</h3>
                                <p>{analysis.count2Title}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}