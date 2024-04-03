import style from './style.module.css'
import { LayoutHeader } from '../../header'
import { analysisTwo } from '../data'
import { MdOutlineKeyboardArrowRight, MdOutlineAdd, MdOutlineDeleteOutline } from "react-icons/md";
import dashboardstyle from '../../dashboard/style.module.css'
import { CustomInput } from '../../input';
import addstyle from '../addMedicine/style.module.css'
import { MyButton } from '../../button';
import { Link } from 'react-router-dom';
import { routes } from '../../../utilities/routes';
import { combinedClasses } from '../../../utilities/format';

export const MedicinesGroupsComp = () => {
    return (
        <section className={style.inventory}>
            <header className={style.header}><LayoutHeader /></header>
            <MedicinesGroupsMain />
        </section>
    )
}

export const MedicinesGroupsMain = () => {
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
            <CustomInput type="search" placeholder="Search" className={style.search} />
            <AnalysisTwo />
            <div>
                {/* <div className={dashboardstyle.eachAnalysis}> */}
                <div className={addstyle.prescription}>
                    <div>
                        <h6>How to use</h6>
                        <p></p>
                        {/* <p>Take this medication by mouth with or without food as directed by your doctor, usually once daily.</p> */}
                    </div>
                    <div>
                        <h6>Side Effects</h6>
                        <p></p>
                        {/* <p>Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.</p> */}
                    </div>
                </div>
                <MyButton type='outline' title='Save Details' className={addstyle.btn}
                // onClick={handleadd}
                // disabled={isSubmitting}
                >
                    <MdOutlineDeleteOutline />
                    Delete Medicine
                </MyButton>


                {/* </div> */}
            </div>
        </div>
    )
}

export const AnalysisTwo = () => {
    return (
        <div className={dashboardstyle.analysis2}>
            {
                analysisTwo.map((analysis) =>
                    <div className={dashboardstyle.eachAnalysis}>
                        <div className={dashboardstyle.row1}>
                            <h6>{analysis.title}</h6>
                            <p>{analysis.navigate} &nbsp; <span>{analysis.arrow}</span></p>
                        </div>
                        <div className={dashboardstyle.row2}>
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