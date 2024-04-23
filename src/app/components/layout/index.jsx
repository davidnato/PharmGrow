import './style.module.css';
import { SideBar } from '../dashboard/sidebar';
import { LayoutHeader } from '../header';
import style from './style.module.css'

export const Layout=()=>{
    return (
        <section className={style.layout}>
            <SideBar className={style.sidebar}/>
            <LayoutHeader className={style.dashboard}/>
            {/* <SideBar />
            <ShortageComp /> */}
        </section>
    )
}