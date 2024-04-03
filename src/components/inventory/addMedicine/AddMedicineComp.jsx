import React from "react";
import style from './style.module.css'
import { LayoutHeader } from "../../header";
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CustomInput } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import {MyButton} from '../../button'

export const AddMedicineComp = () => {
    return (
        <section>
            <header className={style.header}>
                <LayoutHeader />
            </header>
            <main className={style.main}>
                <AddMedicineMain />
            </main>
        </section>
    )
}

export const AddMedicineMain = () => {
    return (
        <div className={combinedClasses(dashboardstyle.main, style.main)}>
            <div className={dashboardstyle.head}>
                <div className={dashboardstyle.info}>

                    <h3 className={style.title}><span>Inventory &nbsp;
                        <MdOutlineKeyboardArrowRight /> &nbsp;
                        List of Medicines &nbsp;
                        <MdOutlineKeyboardArrowRight />&nbsp;
                        Add new Medicine &nbsp;</span> </h3>

                    <p>All fields are mandatory except mentioned as optional</p>
                </div>
            </div>
            <div className={style.newInfo}>
                <div className={style.eachNewInfo}>
                    <h6>Medicine Name</h6>
                    <CustomInput type="text" className={style.type} />
                </div>
                <div className={style.eachNewInfo}>
                    <h6>Medicine ID</h6>
                    <CustomInput type="text" className={style.type}/>
                </div>
                <div className={style.eachNewInfo}>
                    <h6>Medicine Group</h6>
                    <CustomInput type="select" className={style.type} placeholder= '- Select Group - '/>
                    {/* <CustomInput type="select" placeholder='- Select Group -'>
                        <MdOutlineKeyboardArrowDown />
                    </CustomInput> */}
                </div>
                <div className={style.eachNewInfo}>
                    <h6>Quantity in Number</h6>
                    <CustomInput type="number" className={style.type}/>
                </div>
            </div>
            <div className={style.prescription}>
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
            <MyButton type='primary' title='Save Details' className={style.btn}
                        // onClick={handleadd}
                        // disabled={isSubmitting}
                         />
                    
        </div>
    )
}