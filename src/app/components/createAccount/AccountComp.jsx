import style from '../login/style.module.css'
// import thisStyle from './style.module.css'
// // import { LoginDiv } from '../login/LoginComp'
// import { LogoDiv } from "../login/LoginComp";
import { CustomInput } from '../input';
import { MyButton } from "../button";
import { FcGoogle } from 'react-icons/fc';
import { LogoDiv } from '../login/LoginComp';
import loginstyle from '../login/style.module.css'
// import { useState, useRef, useEffect } from React
import React from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom'


export const CreateAccount = () => {
    const [success, setSuccess] = React.useState(false)
    const [isSubmitting, setIsSubmitting] = React.useState(false)
    const [user, setUser] = React.useState([])
    const navigate = useNavigate()
    const [input, setInput] = React.useState({
        username: '',
        password: ''
        // checkbox: ""
    })
    // const handleRememberCheckbox = (event) => {
    //     setRemeberMe(event.target.checked)
    // }
    const handleInput = (e) => {
        e.preventDefault()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    const handleSignUp = (event) => {
        const user = {
            username: input.username,
            password: input.password
        }
        event.preventDefault()
        axios.post('http://localhost:3002/user', user)
            .then(result => {
                setUser(result.user)
                console.log(user)
                // if (result.user === 'success') {
                //     navigate('/login')
                // }
                toast('User Succesfully Added')
                setSuccess('User Successfully Added')
            })
            .finally(() => {
                setIsSubmitting(false)
            })

        // axios.post('https://dummyjson.com/auth/login', user)
        //     .then(result => {
        //         console.log('Success', result)
        //         localStorage.setItem('user', JSON.stringify(result))
        //     })

        //note that payload is defined already, the object details can be used directly here
    }

    return (
        <section className={loginstyle.login}>
            <LogoDiv />

            <main className={loginstyle.main}>
                {/* {error && <div className={style.error}>{error}</div>} */}
                <div className={loginstyle.loginIntro}>
                    <h3>Sign Up</h3>
                    <p>Sign up to enjoy the feature of Revolutie</p>
                </div>
                <form action="" onSubmit={handleSignUp} className={loginstyle.myForm}>
                    <div className={loginstyle.inputs}>
                        <CustomInput
                            // onChange={handleEmail} 
                            type="text" placeholder="Your Name" name='username' onChange={handleInput} label={"Your Name"} />
                        <CustomInput
                            // onChange={handleEmail} 
                            type="email" placeholder="Username" name='password' onChange={handleInput} label={"Username"} />
                        <CustomInput
                            // onChange={handlePassword}
                            type="password" placeholder="Password" name='cPassword' onChange={handleInput} label={"Password"} className={style.passwordDiv} />
                    </div>
                    {/* <MyButton  type='primary' title='LOGIN'/> */}
                    <MyButton type='primary' title='Sign Up'
                        
                    disabled={isSubmitting} 
                    />
                    <div className={loginstyle.divider}><span>or</span></div>
                    <MyButton type='outline' className={loginstyle.loginBtn}
                    // onClick={handleGoogle}
                    // disabled={isSubmitting}
                    >Continue with Google <span><FcGoogle /></span></MyButton>
                    <p>Already have an account? &nbsp;
                        <Link to="/login">  Sign in</Link></p>
                </form>

            </main>
        </section>
    )
}
