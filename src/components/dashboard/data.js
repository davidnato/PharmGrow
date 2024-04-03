import { MdOutlineHealthAndSafety, MdOutlineKeyboardArrowDown, MdKeyboardDoubleArrowRight, MdOutlineMedicalServices } from 'react-icons/md';
import { FaNotesMedical } from "react-icons/fa6";
import {routes} from '../../utilities/routes'

export const analysisOne = [
    { icon: <MdOutlineHealthAndSafety />, title: "Good", description: "Inventory Status", footer: "View Detailed Report", url: routes.inventory()},
    {
        icon: <FaNotesMedical />, title: "Rs. 8,55,875", description: 'Revenue :', descriptionInfo: 'Jan 2022', dropDown: <MdOutlineKeyboardArrowDown />,
         footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight/>,url: routes.revenue()
    },
    { icon: <MdOutlineMedicalServices />, title: "298", description: "Medicines Available", url: routes.available(),
    footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight /> },
    { icon: <FaNotesMedical />, title: "01", description: "Medicine Shortage", url: routes.notavailable(),
     footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight /> }
]

export const analysisTwo=[
    {title: 'Inventory', navigate: 'Go to Configuration', url: routes.configuration(), arrow: <MdKeyboardDoubleArrowRight/>, url: routes.medicinegroups(),
     count1: '302', count2: '11', count1Title: 'Total no of Medicines', count2Title: 'Medicine Groups'},
    {title: 'Quick Report', navigate: 'March 2024', url: routes.reports(), arrow: <MdOutlineKeyboardArrowDown/>, url: routes.reports(),
     count1: '302', count2: '11', count1Title: 'Qty of Medicines sold', count2Title: 'Invoices Generated'},
    {title: 'My Pharmacy', navigate: 'Go to User Management', url: routes.settings(), arrow: <MdKeyboardDoubleArrowRight/>, url: routes.management(),
    count1: '302', count2: '11', count1Title: 'Total no of Suppliers', count2Title: 'Total no of Users'},
    {title: 'Customers', navigate: 'Go to Costomers Page', url: routes.chat(), arrow: <MdKeyboardDoubleArrowRight/>, url: routes.chat(),
     count1: '302', count2: '11', count1Title: 'Total no of Customers', count2Title: 'Frequiently bought items'}
]