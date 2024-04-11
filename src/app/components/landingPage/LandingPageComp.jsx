import { Logo } from '../logo'
import style from './style.module.css'
import { navBar } from './data'
import { Link } from 'react-router-dom'
import { routes } from '../../utilities/routes'
import { MyButton } from '../button'
import { combinedClasses } from '../../utilities/format'
import { HiOutlineGlobeAlt } from 'react-icons/hi'

export const LandingHeader = () => {
    return (
        <header className={style.header}>
            <Logo className={style.logo} />
            <NavBar />
            <div>
                <Link to='/login' className={combinedClasses(style.loginlink, 'link')}>Log in</Link>
                <MyButton type='primary' title='Learn More' className={style.button} />
            </div>

        </header>
    )
}
export const NavBar = () => {
    return (
        <ul className={style.navlist}>
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
                     <span> 100+ countries &nbsp; <HiOutlineGlobeAlt/></span>
                </p>
            </div>
        </section>
    )
}
export const DashboardView = () => {
    return (
        <section></section>
    )
}
export const Offer = () => {
    return (
        <section></section>
    )
}

export const LandingFooter = () => {
    return (
        <section>

        </section>
    )
}