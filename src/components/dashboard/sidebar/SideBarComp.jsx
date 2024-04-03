import style from './style.module.css'
import { Logo } from '../../logo/index'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ReactComponent as ProfileDP } from '../../../assests/images/profileDP.svg'
import { sideBarNavs1, sideBarNavs2, sideBarNavs3 } from './data';
import { MdOutlineAccountCircle, MdOutlineLogout, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../../utilities/format';
// import { HandleDropDown } from '../../hooks/toggle';

export const SideBarDiv = () => {
    const [show, setShow] = React.useState(false)
    const [dropDown, setDropDown] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)

        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const navDropDown = () => {
        setDropDown(!dropDown)
    }
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
                            <PiDotsThreeOutlineVerticalFill onClick={handleDropDown} />
                            {show &&
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
                            }

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
                                    <Link to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div onClick={nav.dropDown && navDropDown}>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                            {dropDown &&
                                                <div className={style.navDropDown}>
                                                    {/* {sideBarNavs1[1].map((sub) =>
                                                        <h6>{sub.title}</h6>
                                                    )} */}
                                                </div>}
                                        </div>
                                        {nav.dropDown}
                                    </Link>
                                )
                            }
                        </div>
                        <div className={style.navDiv2}>
                            {
                                sideBarNavs2.map((nav) =>
                                    <Link to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}
                                    // onClick={handleDropDown}
                                    >
                                        <div>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                        </div>
                                        {nav.dropDown}
                                    </Link>
                                )
                            }
                        </div>
                        <div className={style.navDiv3}>
                            {
                                sideBarNavs3.map((nav) =>
                                    <Link to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div>
                                            {nav.icon}
                                            <h6>{nav.title}</h6>
                                        </div>
                                        {nav.dropDown}
                                    </Link>
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