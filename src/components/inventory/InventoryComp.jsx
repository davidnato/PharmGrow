import style from './style.module.css';
import { LayoutHeader } from '../header'
import { MdOutlineAdd } from "react-icons/md";
import dashboardstyle from '../dashboard/style.module.css'
import { analysisOne} from './data';

export const InventoryComp = () => {
    return (
        <section className={style.inventory}>
            <header className={style.header}><LayoutHeader /></header>
            <div className={style.main}><InventoryMain /></div>
        </section>
    )
}

export const InventoryMain = () => {
    return (
        <div className={dashboardstyle.main}>
            <div className={dashboardstyle.head}>
                <div className={dashboardstyle.info}>
                    <h3>Inventory</h3>
                    <p>List of Medicines available for sales</p>
                </div>
                <div className={dashboardstyle.downloadButton}>
                    <button>
                        <MdOutlineAdd/>
                        <p>Add New Item</p>
                    </button>
                </div>
            </div>
            <AnalysisOne />
        </div>
    )
}

export const AnalysisOne = () => {
    return (
        <div className={dashboardstyle.analysis}>
            {
                analysisOne.map((analysis) =>
                    <div className={dashboardstyle.eachAnalysis}>
                        <div className={dashboardstyle.main}>
                            <div className={dashboardstyle.image}>{analysis.icon}</div>
                            <h6>{analysis.title}</h6>
                            <div className={dashboardstyle.description}><p>{analysis.description}</p></div>
                        </div>
                        <div className={dashboardstyle.footer}>
                            <p>{analysis.footer}</p>
                            {analysis.arrowRight}
                        </div>
                    </div>
                )
            }
        </div>
    )
}