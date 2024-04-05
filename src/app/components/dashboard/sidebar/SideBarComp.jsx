import style from './style.module.css'
import { Logo } from '../../logo/index'
import { PiDotsThreeOutlineVerticalFill } from "react-icons/pi";
import { ReactComponent as ProfileDP } from '../../../assests/images/profileDP.svg'
import { sideBarNavs1, sideBarNavs2, sideBarNavs3 } from './data';
import { MdOutlineAccountCircle, MdOutlineLogout, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import React from 'react';
import { Link } from 'react-router-dom';
import { combinedClasses } from '../../../../app/utilities/format';
// import { HandleDropDown } from '../../hooks/toggle';

export const SideBarDiv = () => {
    const [show, setShow] = React.useState(false)
    const [dropDown, setDropDown] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)

        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const navDropDown = (e) => {
        if(e.target.className!=style.subdata){
            setDropDown(!dropDown)
        }
        else{
            setDropDown(dropDown)
        }
        
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
                        <div  className={style.navDiv1}>
                            {
                                sideBarNavs1.map((nav) =>
                                    <Link to={nav.url} className={combinedClasses(style.navBar, 'bluebglink')}>
                                        <div  className={style.navBardiv}>
                                            {nav.icon}
                                            <div className={style.navTitle}>
                                                <h6>{nav.title}</h6>
                                                {dropDown &&
                                                    nav.subtitle &&
                                                    <div className={style.subtitle}>
                                                        {nav.subtitle &&
                                                            nav.subtitle.map((subData) =>
                                                                <Link to={subData.url} className={combinedClasses(style.subdata, 'bluebglink')}>{subData.title}</Link>
                                                            )}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <div onClick={navDropDown}>{nav.dropDown}</div>
                                    </Link>
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