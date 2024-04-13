import { LandingHeader, LandingFooter, DashboardView, Hero, Offer } from "./LandingPageComp"
import style from './style.module.css'

export const Landing=()=>{
    return(
    <section className={style.landing}>
        <LandingHeader/>
        <Hero/>
        <DashboardView/>
        <Offer/>
        <LandingFooter/>
    </section>
)}

