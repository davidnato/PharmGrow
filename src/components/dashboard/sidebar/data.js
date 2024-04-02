import { MdOutlineSpaceDashboard, MdOutlineInventory2, MdOutlineKeyboardArrowDown, MdOutlineHelpCenter, MdOutlineTune, MdOutlinePeople, MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";
import { PiChatDots} from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";

export const sideBarNavs1 = [
    { icon: <MdOutlineSpaceDashboard />, title: 'Dashboard', url: '' },
    {icon: <MdOutlineInventory2 />, title: 'Inventory', dropDown: <MdOutlineKeyboardArrowDown />
        // url: routes.dashboard()
    },
    { icon: <IoAnalytics />, title: 'Reports', dropDown: <MdOutlineKeyboardArrowDown />, url: '' },
    { icon: <MdOutlineTune />, title: 'Configuration', url: '' }
]

export const sideBarNavs2 = [
    { icon: <MdOutlinePeople />, title: 'Account', dropDown: <MdOutlineKeyboardArrowDown />, url: '' },
    
    { icon: <PiChatDots />, title: 'Contact Management', url: '' },
    { icon: <MdOutlineNotifications />, title: 'Notifications', url: '' },
    { icon: <PiChatDots />, title: 'Chat with Visitors', url: '' },
    
]

export const sideBarNavs3 = [
    
    { icon: <MdOutlineSettings />, title: 'Application Settings', url: '' },
    { icon: <MdOutlineHelpCenter />, title: 'Help', url: '' }
]