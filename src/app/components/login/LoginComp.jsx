import React from 'react'
import { CustomInput } from '../input'
import style from './style.module.css'
import { MyButton } from '../button'
import { useState, useEffect } from 'react'
import toast from 'react-hot-toast';
import { isUserLogin } from '../../../app/utilities/user'
import { Logo } from '../logo'
import { ReactComponent as Img } from '../../assests/images/right-column.svg'
import { FcGoogle } from "react-icons/fc";
import { routes } from '../../../app/utilities/routes'
import { Link } from 'react-router-dom'
import { combinedClasses } from '../../utilities/format'

export const LoginDiv = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [search, setSearch] = useState("")
    const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const handleSearch = (event) => {
        setSearch(event.target.value)
    }


    const handleEmail = (event) => {
        setEmail(event.target.value)
    }
    const handlePassword = (event) => {
        setPassword(event.target.value)
    }
    const handleRememberCheckbox = (event) => {
        setRemeberMe(event.target.checked)
    }

    const handleLogin = async () => {
        setIsSubmitting(true)
        const payload = {
            username: email,
            password: password,
            rememberMe
        }
        console.log({ payload }, "I'm inside")
        //Login user and get token
        fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
            //note that payload is defined already, the object details can be used directly here
        })

            /*    .then(response => response.json())
                .then(async (response)=>{
                   if (response.status !==200){ 
                    const data =await response.json()
                    throw data
                }
            })
                .then(async(response)=>{
                    if (response.status >= 400){
                        const data= await  response.json()
                        throw data
                    }
                }) */
            /*    const data = await response.json();
                if (response.status >= 400) {
                    toast.error(error.message)
                    setError(error.message)
                } else {
                    console.log('Success', response)
                    localStorage.setItem('user', JSON.stringify(response))
                    window.location.href = routes.dashboard()
                }
                setIsSubmitting(false)
                
        
                .then((response) => {
                    return new Promise((resolve, reject) => {
                        if (response.status >= 400) {
                            reject(response.json())
                            return
                        }
                        resolve(response.json())
                    })
                }) */
                // .then((result)=>{
                //     const data = await response.json();
                // if (response.status >= 400) {
                //     toast.error(error.message)
                //     setError(error.message)
                // } else {
                //     console.log('Success', response)
                //     localStorage.setItem('user', JSON.stringify(response))
                //     window.location.href = routes.dashboard()
                // }
                // })
            .then((response) => {
                console.log('Success', response)
                localStorage.setItem('user', JSON.stringify(response))
                window.location.href = routes.dashboard()
                console.log(response)
            })
            .catch((error) => {
                console.log("Failed", error.message)
                toast(error.message)
                setError(error.message)
            })
            .finally(() => {
                setIsSubmitting(false)
            })
            .then(console.log);
    }

    useEffect(() => {
        const user = isUserLogin()
        if (user) {
            window.location.href = routes.dashboard()
            console.log('welcome')
        }
    }, [])
    return (
        <section className={style.login}>
            <LogoDiv className={style.logo}/>
            <main className={style.main}>
                {error && <div className={style.error}>{error}</div>}
                <div className={style.loginIntro}>
                    <h3>Sign in</h3>
                    <p>Please login to continue to your account</p>
                </div>
                <form action="" className={style.myForm}>
                    <div className={style.inputs}>
                        <CustomInput onChange={handleEmail} type="email" placeholder="Username" label={"Username"} />
                        <CustomInput onChange={handlePassword} type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
                    </div>
                    <div className={style.rememberMe}>
                        <input type="checkbox" id='rememberMe' />
                        <label htmlFor="rememberMe">&nbsp; Keep me logged in</label>
                    </div>
                    {/* <MyButton  type='primary' title='LOGIN'/> */}
                    <MyButton type='primary'
                        onClick={handleLogin}
                        disabled={isSubmitting}><Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link></MyButton>
                       
                    <div className={style.divider}><span>or</span></div>
                    <MyButton type='outline' className={style.loginBtn}
                        onClick={handleLogin}
                        disabled={isSubmitting}>Sign in with Google <span><FcGoogle/></span></MyButton>
                    <p>Need an account? &nbsp;
                        <Link to="/signUP">  Create one</Link></p>
                </form>

            </main>
        </section>
    )
}
export const LogoDiv = () => {
    return (
        <div>
            <Logo/>
            <div className={style.footer}></div>
        </div>
    )
}

export const LoginImg = () => {
    return (
        <div className={style.columnImg}>
            <Img />
        </div>
    )
}

