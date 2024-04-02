import style from './style.module.css'
import { Logo } from '../../logo/index'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ReactComponent as ProfileDP } from '../../../assests/images/profileDP.svg'
import { sideBarNavs1, sideBarNavs2, sideBarNavs3 } from './data';
import { MdOutlineAccountCircle, MdOutlineLogout, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';

export const SideBarDiv = () => {
    const [show, setShow] = React.useState(false)
    // const handleDropDown=()=>{
    //     setShow(!show)
    //     !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    // }
    return (
        <div className={style.sidebar}>
            <div className={style.headermain}>
                <header><Logo useWhite={true} /></header>
                <main>
                    <div className={style.profileHead}>
                        <div className={style.intro}>
                            <div className={style.picDiv}>
                                <ProfileDP className={style.pic} />
                            </div>
                            <div className={style.info}>
                                <h6 >Maria</h6>
                                <p>Super Admin</p>
                            </div>
                        </div>

                        <div className={style.profile}>
                            <PiDotsThreeOutlineVerticalFill
                            // onClick={handleDropDown}
                            />

                            <div className={style.whitebg}>
                                <div className={style.dropDown}></div>
                                <div className={style.myProfileDiv}>
                                    <div className={style.myProfile}>
                                        <MdOutlineAccountCircle />
                                        <p>My Profile</p>
                                    </div>
                                    <div className={style.logout}>
                                        <MdOutlineLogout />
                                        <p>Logout</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        {/* <div>
                            <div>
                                
                            </div>
                            <div></div>
                        </div> */}
                    </div>
                    <div className={style.navBarDiv}>
                        <div className={style.navDiv1}>
                            {
                                sideBarNavs1.map((nav) =>
                                    <div className={style.navBar}>
                                        <div>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                        </div>
                                        {nav.dropDown}
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.navDiv2}>
                            {
                                sideBarNavs2.map((nav) =>
                                    <div className={style.navBar}
                                    // onClick={handleDropDown}
                                    >
                                        <div>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                        </div>
                                        {nav.dropDown}
                                    </div>
                                )
                            }
                        </div>
                        <div className={style.navDiv3}>
                            {
                                sideBarNavs3.map((nav) =>
                                    <div className={style.navBar}>
                                        <div>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                        </div>
                                        {nav.dropDown}
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </main>
            </div>
            <footer>
                <p>Powered by Jasiri © 2024</p>
                <p>v 1.1.2</p>
            </footer>
        </div>
    )
}