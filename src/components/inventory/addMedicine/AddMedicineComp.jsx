import React, { useEffect, useState } from "react";
import style from './style.module.css'
import { LayoutHeader } from "../../header";
import dashboardstyle from '../../dashboard/style.module.css'
import { MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CustomInput } from "../../input";
import { combinedClasses } from "../../../utilities/format";
import { MyButton } from '../../button'

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
            <Form />
        </div>
    )
}


export const Form = () => {
    const [data, setData]=useState('');
    // const [id, setId]=useState
    useEffect(()=>{
        fetch('http://localhost:8000/stock')
        .then(result=>{
            console.log(result)})
            
        .catch(error=>console.log(error))

        // fetch('https://dummyjson.com/auth/login', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(payload)
        //     //note that payload is defined already, the object details can be used directly here
        // })
    }, [])
    const handleSubmit = (event) => {
        event.preventDefault();
        const id = data.length + 1;
        // fetch('http://localhost:8000/stock',{
        //     // { name: name, id: id, group: group, quantity: quantity }
            
        //         method: "POST",
        //         body: JSON.stringify(body),
        //       })
        //     .then(result =>{
            
        // setData(result.data)
        //         console.log(result);
        //         location.reload()})
        //     .catch(error => console.log(error))
    }
    return <form action="" onSubmit={handleSubmit}>
        <div className={style.inputs}>
            <CustomInput type="text" label={"Medicine Name"} className={style.type} />
            <CustomInput type="text" label={"Medicine ID"} className={style.type} />
            <CustomInput type="text" label={"Medicine Group"} className={style.type} />
            <CustomInput type="text" label={"Quantity in Number"} className={style.type} />
        </div>
        <div className={style.prescription}>
            <div>
                <h6>How to use</h6>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                {/* <p>Take this medication by mouth with or without food as directed by your doctor, usually once daily.</p> */}
            </div>
            <div>
                <h6>Side Effects</h6>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                {/* <p>Dizziness, lightheadedness, drowsiness, nausea, vomiting, tiredness, excess saliva/drooling, blurred vision, weight gain, constipation, headache, and trouble sleeping may occur. If any of these effects persist or worsen, consult your doctor.</p> */}
            </div>
        </div>
        <MyButton type='primary' title='Save Details' className={style.btn}
        // onClick={handleadd}
        // disabled={isSubmitting}
        />
    </form>

}