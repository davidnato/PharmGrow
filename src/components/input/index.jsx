import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import React from 'react'
import style from './style.module.css'
import { combinedClasses } from "../../utilities/format";


export const CustomInput = ({ ...props }) => {
    const [show, setShow] = React.useState(false)
    let label = props.label
    let type = props.type


    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    // const hideShowToggle=()=}{

    // }
    // <div className={style.inputDiv}>
    //         <label>{label}</label>
    //         <div className={style.inputFieldDiv}></div>
    const combineClass=combinedClasses(props.className)
    return (
        <div className={style.inputDiv}>
            {type === 'search' ?
                <div className={style.inputFieldDiv}>
                    <input {...props} type={type} className={style.search}/>
                    <div className={style.icon}>
                        <IoSearchOutline />
                    </div>
                </div> :
                <div className={style.labelInput}>
                    <label>{label}</label>
                    <div className={style.inputFieldDiv}>
                        <input {...props} type={type} />
                        {
                            props.type === 'password' &&
                            <div onClick={handleIconToggle} className={style.icon}>
                                {
                                    !show ?
                                        <HiOutlineEyeOff /> :
                                        <HiOutlineEye />
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}