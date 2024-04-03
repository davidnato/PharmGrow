import { CustomInput } from '../input';
import { IoLanguageOutline } from "react-icons/io5";
import style from './style.module.css'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

export const LayoutHeader = () => {
    return (
        <div className={style.header}>
            <CustomInput type="search" placeholder="Search for anything" className={style.search} />
            {/* <div className={style.language}>
                <div className={style.iconTitle}>
                    <IoLanguageOutline />
                    <p>English</p>
                </div>
                <MdOutlineKeyboardArrowDown />
            </div> */}
            <div className={style.greetingTime}>
                <div className={style.greeting}>
                    <div></div>
                    <p>Good Morning</p>
                </div>
                <div className={style.time}>
                    <p>14 January 2022</p>
                    <p>22:45:04</p>
                </div>
            </div>
        </div>
    )
}