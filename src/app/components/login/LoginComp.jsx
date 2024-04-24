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
import axios from 'axios'
import Cookies from 'universal-cookie';



export const LoginDiv = () => {
    const [search, setSearch] = useState("")
    // const [rememberMe, setRemeberMe] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState(false)
    const [user, setUser] = React.useState([])
    const [cookies, setCookies]= React.useState(new Cookies)
    const [input, setInput] = React.useState({
        username: '',
        password: ''
        // checkbox: ""
    })
    // const handleRememberCheckbox = (event) => {
    //     setRemeberMe(event.target.checked)
    // }
    const handleInput = (e) => {
        e.persist()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleLogin = (e) => {
        e.preventDefault()
        const user = {
            username: input.username,
            password: input.password
        }
        axios.post('http://localhost:3001/user', user)
            .then(result => {
                setUser(result.data)
                console.log(user)
                // toast('Account Successfully created')
                // setSuccess('Account Successfully created')
            })
            .catch(error => console.log(error))

            .finally(() => {
                setIsSubmitting(false)
            });

            setCookies('password', user.password)
            setCookies('username', user.username)

            window.location.reload();
    }
    // useEffect(() => {
    //     axios.get('http://localhost:3002/user')
    //     .then(result => {console.log(result)
    //     })
    //     .catch(error => console.log(error))
    // }, [])
    // const handleLogin = () => {
    //     axios.get('http://localhost:3002/user')
    //     .then(result => {console.log(result)
    //     })
    //     .catch(error => console.log(error))


    //     // }, [])

    //     .catch((error) => {
    //         console.log("Failed", error.message)
    //         toast(error.message)
    //         setError(error.message)
    //     })
    //     .finally(() => {
    //         setIsSubmitting(false)
    //     })
    //     .then(console.log);
    // }
    // useEffect(() => {
    


    // useEffect(() => {
    //     const user = isUserLogin()
    //     if (user) {
    //         window.location.href = routes.dashboard()
    //         console.log('welcome')
    //     }
    // }, [])

    return (
        <section className={style.login}>
            <LogoDiv className={style.logo} />
            <main className={style.main}>
                {error && <div className={style.error}>{error}</div>}
                <div className={style.loginIntro}>
                    <h3>Sign in</h3>
                    <p>Please login to continue to your account</p>
                </div>

                <form action="" className={style.myForm}>
                    <div className={style.inputs}>
                        <CustomInput onChange={handleInput} type="email" placeholder="Username" label={"Username"} />
                        <CustomInput onChange={handleInput} type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
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
                        disabled={isSubmitting}>Sign in with Google <span><FcGoogle /></span></MyButton>
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
            <Logo />
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

