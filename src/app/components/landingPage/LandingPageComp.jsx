import { Logo } from '../logo'
import style from './style.module.css'
import { navBar, navList } from './data'
import { Link } from 'react-router-dom'
import { routes } from '../../utilities/routes'
import { MyButton } from '../button'
import { combinedClasses } from '../../utilities/format'
import { HiOutlineGlobeAlt } from 'react-icons/hi'
import React from 'react'
import { ReactComponent as MenuIcon } from '../../assests/icon/menu.svg'
import { ReactComponent as Dashboard } from '../../assests/icon/dashboard.svg'
import { FaInstagram, FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa6";

export const LandingHeader = () => {
    const [showMenu, setMenu] = React.useState(false);
    const toggleMenu = () => {
        if (showMenu === false) {
            setMenu(true)
        } else {
            setMenu(false)
        }
    }
    return (
        <header className={style.header}>
            <Logo className={style.logo} />
            <div className={style.navlistBar}>
                <MenuIcon className={style.menuicon} onClick={toggleMenu} fill='black' />

                <div className={style.menu}>
                    <HeaderNavigation className={showMenu ? style.mobile : style.hidden} />
                </div>
                {/* <NavBar /> */}
                <div>
                    <Link to='/login' className={combinedClasses(style.loginlink, 'link')}>Log in</Link>
                    <MyButton type='primary' title='Learn More' className={style.button} />
                </div>
            </div>

        </header>
    )
}

export const HeaderNavigation = (props) => {
    return (
        <ul className={combinedClasses(style.navlist, props.className)}>
            {navBar.map((nav) =>

                <li>{nav.title}
                    <span>{nav.arrow}</span>
                </li>


            )}
        </ul>
    )
}
export const Hero = () => {
    return (
        <section className={style.hero}>
            <div className={style.headline}>
                <h1>Revenue in Healthcare is hard.</h1>
                <h1 className={style.blueh1}>We can help you.</h1>

                <p>Easily automate payroll, taxes, and compliance with a seamless experience.</p>
            </div>

            <div className={style.headlinebtn}>
                <MyButton type='primary' title='Learn More' className={combinedClasses(style.button, style.button2)} />
                <p>Hire and pay compliantly in &nbsp;
                    <span> 100+ countries &nbsp; <HiOutlineGlobeAlt /></span>
                </p>
            </div>
        </section>
    )
}
export const DashboardView = () => {
    return (
        <section className={style.dashboardView}>
            <Dashboard />
        </section>
    )
}
export const Offer = () => {
    return (
        <section className={style.offer}>
            <h1 className={style.blueh1}>Get Started</h1>
            <p>Streamline your global business and grow your team effortlessly.</p>
            <MyButton type='primary' className={combinedClasses(style.button, style.button2)}>
                <Link to='/signUP' className={combinedClasses(style.button2, 'link')}>Create Account</Link>
            </MyButton>
        </section>
    )
}

export const LandingFooter = () => {
    return (
        <footer className={style.footer}>
            <div className={style.footer1}>
                <Logo className={style.logo} />
                {/* <Navigation/> */}
                <div className={style.footerlistBar}>
                    {navList.map((lists) => {
                        return <Navigation {...lists} />
                    })
                    }
                </div>


            </div>
            <div>
                <Footerfooter />
            </div>
        </footer>
    )
}

export const Navigation = (props) => {
    return (
        <div className={style.nav}>
            <p className={style.navTitle}>{props.navTitle} </p>
            <ul className={style.navList}>
                {props.navs.map((nav) =>
                    <li className={style.footerSubList}>{nav}</li>
                )}
            </ul>
        </div>
    )
}

export const SocialLinks = () => {
    return (
        <div className={style.socials}>
            <div><FaInstagram className={style.logo} /></div>
            <div><FaFacebookF className={style.logo} /></div>
            <div><FaLinkedin className={style.logo} /></div>
            <div><FaTwitter className={style.logo} /></div>

        </div>
    )
}

export const Footerfooter = () => {
    return (
        <div className={style.footer2}>
            <ul className={style.footerlist}>
                <li>©2022. All Rights Reserved.r</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
            </ul>
            <SocialLinks />
        </div>

    )
}