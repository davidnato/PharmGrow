import './style.module.css';
import { SideBar } from '../dashboard/sidebar';
import { LayoutHeader } from '../header';
import style from './style.module.css'
import { IoMenu } from "react-icons/io5";
import React from 'react';

export const Layout = (props) => {
    const [show, setShow] = React.useState(false)
    const showHide = (e) => {
        setShow(show===false)

    }
    // showChats.addEventListener("click", showHide)
    //     setShow(!show)
    // }
    return (
        <section className={style.layout}>
            <div className={style.menu}>
                <IoMenu className={style.menuIcon} onClick={showHide} />
                
                <SideBar className={show && style.mobile} />
            </div>

            <section className={style.viewMerge}>
                {props.children}
            </section>
            {/* <SideBar />
            <ShortageComp /> */}
        </section>
    )
}