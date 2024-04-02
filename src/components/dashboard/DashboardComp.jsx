import style from './style.module.css'
import sideBarstyle from './sidebar/style.module.css'
import { LayoutHeader } from '../header';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import { analysisOne, analysisTwo } from './data';
import { AiOutlineFileExcel, AiOutlineFilePdf } from "react-icons/ai";


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
    return (
        <div className={style.main}>
            <div className={style.head}>
                <div className={style.info}>
                    <h3>Dashboard</h3>
                    <p>A quick data overview of the Inventory</p>
                </div>
                <div className={style.downloadButton}>
                    <button>Download Report
                        <div className={style.buttonDropdown}>
                            <MdOutlineKeyboardArrowDown />
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
                        </div>
                    </button>
                </div>
            </div>
            <AnalysisOne />
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
                        <div className={style.footer}>
                            <p>{analysis.footer}</p>
                            {analysis.arrowRight}
                        </div>
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
                            <p>{analysis.navigate} &nbsp; <span>{analysis.arrow}</span></p>
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