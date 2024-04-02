import { MdOutlineHealthAndSafety, MdOutlineKeyboardArrowDown, MdKeyboardDoubleArrowRight, MdOutlineMedicalServices } from 'react-icons/md';
import { FaNotesMedical } from "react-icons/fa6";


export const analysisOne = [
    { icon: <MdOutlineHealthAndSafety />, title: "Good", description: "Inventory Status", footer: "View Detailed Report" },
    {
        icon: <FaNotesMedical />, title: "Rs. 8,55,875", description: 'Revenue :', descriptionInfo: 'Jan 2022', dropDown: <MdOutlineKeyboardArrowDown />, footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight />
    },
    { icon: <MdOutlineMedicalServices />, title: "298", description: "Medicines Available", footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight /> },
    { icon: <FaNotesMedical />, title: "01", description: "Medicine Shortage", footer: "View Detailed Report", arrowRight: <MdKeyboardDoubleArrowRight /> }
]

export const analysisTwo=[
    {title: 'Inventory', navigate: 'Go to Configuration', arrow: <MdKeyboardDoubleArrowRight/>, count1: '302', count2: '11', count1Title: 'Total no of Medicines', count2Title: 'Medicine Groups'},
    {title: 'Quick Report', navigate: 'March 2024', arrow: <MdOutlineKeyboardArrowDown/>, count1: '302', count2: '11', count1Title: 'Qty of Medicines sold', count2Title: 'Invoices Generated'},
    {title: 'My Pharmacy', navigate: 'Go to User Management', arrow: <MdKeyboardDoubleArrowRight/>, count1: '302', count2: '11', count1Title: 'Total no of Suppliers', count2Title: 'Total no of Users'},
    {title: 'Customers', navigate: 'Go to Costomers Page', arrow: <MdKeyboardDoubleArrowRight/>, count1: '302', count2: '11', count1Title: 'Total no of Customers', count2Title: 'Frequiently bought items'}
]