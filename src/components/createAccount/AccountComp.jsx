import style from '../login/style.module.css'
// import thisStyle from './style.module.css'
// // import { LoginDiv } from '../login/LoginComp'
// import { LogoDiv } from "../login/LoginComp";
import { CustomInput } from '../input';
import { MyButton } from "../button";
import { FcGoogle } from 'react-icons/fc';
import { LogoDiv } from '../login/LoginComp';
import loginstyle from '../login/style.module.css'


export const CreateAccount = () => {
    return (
       /* <div className={style.loginContainer}>
            {/* <header className={style.header}>
                <CustomInput
                    // onChange={handleSearch} 
                    type="search" placeholder="Search for anything here.." className={style.search} />
            </header> }
            <main className={style.main}>
                <CustomInput
                    // onChange={handleEmail} 
                    type="text" placeholder="Business Name" label={"Business Name"} />
                <CustomInput
                    // onChange={handleEmail} 
                    type="email" placeholder="www.derilpharmacy.com" label={"Email"} />
                <CustomInput
                    // onChange={handleEmail} 
                    type="password" placeholder="Password" label={"Password"} />
                <CustomInput
                    // onChange={handleEmail} 
                    type="password" placeholder="Confirm Password" label={"Confirm Password"} />
                <MyButton type='primary' className={style.loginBtn} title='Sign up'
                // onClick={handleLogin}
                // disabled={isSubmitting} 
                /> */

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
                            type="text" placeholder="Your Name" label={"Your Name"} />
                                <CustomInput 
                                // onChange={handleEmail} 
                                type="email" placeholder="Username" label={"Username"} />
                                <CustomInput 
                                // onChange={handlePassword}
                                 type="password" placeholder="Password" label={"Password"} className={style.passwordDiv} />
                            </div>
                            {/* <MyButton  type='primary' title='LOGIN'/> */}
                            <MyButton type='primary' title='Sign Up'
                                // onClick={handleSignUp}
                                // disabled={isSubmitting} 
                                />
                            <div className={loginstyle.divider}><span>or</span></div>
                            <MyButton type='outline' className={loginstyle.loginBtn}
                                // onClick={handleGoogle}
                                // disabled={isSubmitting}
                                >Continue with Google <span><FcGoogle /></span></MyButton>
                            <p>Already have an account? &nbsp;
                                <a href="/login">  Sign in</a></p>
                        </form>

                    </main>
                </section>
    )
}
