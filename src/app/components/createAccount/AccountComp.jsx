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
import { Link } from 'react-router-dom'


export const CreateAccount = () => {
    const [success, setSuccess] = React.useState(false)
    const [error, setError] = React.useState(false)
    const [data, setData]=React.useState('');
    const [isSubmitting, setIsSubmitting]=React.useState(false)
    const [input, setInput] = React.useState({
        username: " ",
        password: " ",
        checkbox: ""
    })
    const handleInput = (e) => {
        e.persist()
        setInput({ ...input, [e.target.name]: e.target.value })
    }
    // const handleEmail = (event) => {
    //     setEmail(event.target.value)
    // }
    // const handlePassword = (event) => {
    //     setPassword(event.target.value)
    // }
    // const handleRememberCheckbox = (event) => {
    //     setRemeberMe(event.target.checked)
    // }
    // const handleLogin = async () => {
    //     setIsSubmitting(true)
    //     const payload = {
    //         username: email,
    //         password: password,
    //         rememberMe
    //     }
    const handleSignUp = (e) => {
        e.preventDefault()
        
        const data = {
            username: input.name,
            password: input.password,
            cPassword: input.cPassword
        }
        axios.post('http://localhost:3000/', data)
        .then(result => {
            setData(result.data)
            toast('Stock Succesfully Added')
            setSuccess('Stock Successfully Added')
        })
        .then((response) => {
            console.log('Success', response)
            localStorage.setItem('user', JSON.stringify(response))
            window.location.href = '/login'
        })
        .catch(error => console.log(error))
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
                <form action="" className={loginstyle.myForm}>
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
                    onClick={handleSignUp}
                    // disabled={isSubmitting} 
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
