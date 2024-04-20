import { useState, useEffect } from "react"
import { routes } from "../utilities/routes"
import axios from "axios"

export const IsProtectedRoute = () => {
    const [userLoggedIn, setUserLoggedIn] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3002/user')
            .then(result => {
                setUserLoggedIn(result)
                console.log(userLoggedIn)
            })
            // .then(response=>{
            //     const user=JSON.parse(localStorage.getItem('user') ?? '{}')
            //     if (user){
            //         return routes.dashboard();
            //     }
            //     window.location.href = '/login'
            //     return null
            //     console.log(response.user)
            // })
            // .then(userData{
            //     if (userLoggedIn) {
            //         return routes.dashboard();
            //     }
            //     window.location.href = '/login'
            //     return null
            // })
            .catch(error => console.log(error))
    }, [])
    //make an api with user id
    // return user.email && user.token
    
}