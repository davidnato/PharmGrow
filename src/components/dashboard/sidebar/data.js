import { MdOutlineSpaceDashboard, MdOutlineInventory2, MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp, MdOutlineHelpCenter, MdOutlineTune, MdOutlinePeople, MdOutlineNotifications, MdOutlineSettings } from "react-icons/md";
import { PiChatDots } from "react-icons/pi";
import { IoAnalytics } from "react-icons/io5";
import { routes } from '../../../utilities/routes'

export const sideBarNavs1 = [
    { icon: <MdOutlineSpaceDashboard />, title: 'Dashboard', url: routes.dashboard() },
    {
        icon: <MdOutlineInventory2 />, title: 'Inventory',
        subtitle: [
            { title: 'List of Medicines', url: '' },
            { title: 'Medicine Groups', url: '' }],
        dropDown: <MdOutlineKeyboardArrowDown />, arrowUp: <MdOutlineKeyboardArrowUp />
    },
    { icon: <IoAnalytics />, title: 'Reports', dropDown: <MdOutlineKeyboardArrowDown />, url: routes.reports() },
    { icon: <MdOutlineTune />, title: 'Configuration', url: routes.configuration() }
]

export const sideBarNavs2 = [
    { icon: <MdOutlinePeople />, title: 'Account', dropDown: <MdOutlineKeyboardArrowDown />, url: routes.account() },

    { icon: <PiChatDots />, title: 'Contact Management', url: routes.chat() },
    { icon: <MdOutlineNotifications />, title: 'Notifications', url: routes.notification() },
    { icon: <PiChatDots />, title: 'Chat with Visitors', url: routes.chat() },

]

export const sideBarNavs3 = [

    { icon: <MdOutlineSettings />, title: 'Application Settings', url: routes.settings() },
    { icon: <MdOutlineHelpCenter />, title: 'Help', url: routes.help }
]