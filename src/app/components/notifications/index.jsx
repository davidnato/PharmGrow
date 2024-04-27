// import {SfNav} from 'react-sf-building-blocks'
// import DateTime from '../dateTime'

import React from "react"
import DateTime from "../dateTime"
import axios from "axios"
import toast from "react-hot-toast"


export const Notification = (props) => {
    const [notification, setNotification] = React.useState()
    const [data, setData] = React.useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                setData(result.message);
                toast(result.message)
            })
            .catch(error => console.log(error))
    }, [])
    // let index={props.index}
    return (
        <div>
            {/* {notification && notification.map((item, index) => */}
                <ul key={index}>
                    {result.message && data.map((item, index) =>
                    <li className={style.message}>{item.message} <span><DateTime/></span></li>
                    )}
                </ul>
        </div>



    )
}