import style from './style.module.css'
import { Logo } from '../../logo/index'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ReactComponent as ProfileDP } from '../../../assests/images/profileDP.svg'
import { sideBarNavs1, sideBarNavs2, sideBarNavs3 } from './data';
import { MdOutlineAccountCircle, MdOutlineLogout, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../../../app/utilities/format';
import { NavLink } from 'react-router-dom';
// import { HandleDropDown } from '../../hooks/toggle';

export const SideBarDiv = () => {
    const [show, setShow] = React.useState(false)
    const [dropDown, setDropDown] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)

        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const navDropDown = (e) => {
        // setDropDown(!dropDown)
        (e.target.className === style.subData) ? setDropDown(dropDown) : setDropDown(!dropDown)
        // let subMenu= e.target.querySelector(style.subData)
        
        // if (e.target.className != style.subtitle) {
        //     setDropDown(!dropDown)
        //     style[subtitle].style.background="red"
        // }
        // if (e.target.className === style.subtitle) {
        //     setDropDown(dropDown)
        // }
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
                        <div className={combinedClasses(style.navDiv1, 'navDiv')} >
                            {
                                sideBarNavs1.map((nav, index) =>
                                    <NavLink to={nav.url}
                                        className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div className={style.navBardiv} >
                                            {nav.icon}
                                            <div className={style.navTitle}>
                                                <h6>{nav.title}</h6>

                                                {/* <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                        ? item.iconClosed
                        : null}
                </div>
            </SidebarLink>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <DropdownLink
                            to={item.path}
                            key={index}
                        >
                            {item.icon}
                            <SidebarLabel>
                                {item.title}
                            </SidebarLabel>
                        </DropdownLink>
                    ); */}
                                                {
                                                    nav.subtitle && dropDown &&
                                                    <div className={combinedClasses(style.subtitle, 'navDiv')} dropDown={dropDown}>
                                                        {nav.subtitle && nav.subtitle.map((subData) =>
                                                                <NavLink to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')}>{subData.title}</NavLink>
                                                            )}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div onClick={navDropDown}>{index == dropDown ? nav.arrowUp : nav.dropDown}</div>
                                    </NavLink>
                                )
                            }
                        </div>
                        <div className={style.navDiv2}>
                            {
                                sideBarNavs2.map((nav) =>
                                    <Link to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div onClick={navDropDown} className={style.navBardiv}>
                                            {nav.icon}
                                            <div className={style.navTitle}>
                                                <h6>{nav.title}</h6>
                                                {nav.subtitle &&
                                                    <div className={style.subtitle}>
                                                        {nav.subtitle &&
                                                            nav.subtitle.map((subData) =>
                                                                <li>{subData.title}</li>
                                                            )}
                                                    </div>
                                                }
                                            </div>
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
                                        <div onClick={navDropDown} className={style.navBardiv}>
                                            {nav.icon}
                                            <div className={style.navTitle}>
                                                <h6>{nav.title}</h6>
                                                {nav.subtitle &&
                                                    <div className={style.subtitle}>
                                                        {nav.subtitle &&
                                                            nav.subtitle.map((subData) =>
                                                                <li>{subData.title}</li>
                                                            )}
                                                    </div>
                                                }
                                            </div>
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