import dashboardStyle from '../dashboard/style.module.css'
import { LayoutHeader } from '../header'
import style from './style.module.css'
import React from 'react'
import { MyButton } from '../button'
import { data } from './data'
import { ReactComponent as ProfileDP } from '../../assests/images/profileDP.svg'
import sideBarStyle from '../dashboard/sidebar/style.module.css'
import { CustomInput } from '../input'
import axios from 'axios'
import toast from 'react-hot-toast'
import { combinedClasses } from '../../utilities/format'
import errorstyle from '../login/style.module.css'
import addStyle from '../inventory/addMedicine/style.module.css'

export const SettingSection = () => {

    return (
        <section className={dashboardStyle.dashboardSection}>

            <div className={dashboardStyle.dashboardMain}>
                <Main />
            </div>
        </section>
    )
}

export const Main = () => {

    return (
        <section className={dashboardStyle.main}>
            <Head />
            <SettingsMain />
        </section>
    )
}
export const Head = () => {
    const [show, setShow] = React.useState(false)
    const handleDropDown = () => {
        setShow(!show)
        // !show ? arrow===<MdOutlineKeyboardArrowDown/>:<MdOutlineKeyboardArrowUp/>
    }
    const handleSubmit = () => {

    }
    const handleCancel = () => {

    }
    return <div className={dashboardStyle.head}>
        <div className={dashboardStyle.info}>
            <h3>Settings</h3>
            <p>Manage your account settings</p>
        </div>
        <div className={style.buttons} onClick={handleDropDown}>
            <MyButton type='primary'
                onClick={handleSubmit}
            //disabled={isSubmitting}
            >
                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                Save Changes
            </MyButton>
            <MyButton type='outline' className={style.cancelbtn}
                onClick={handleCancel}
            //disabled={isSubmitting}
            >
                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                Cancel
            </MyButton>
        </div>
    </div>
}
export const SettingsMain = () => {

    const [userData, setUserData] = React.useState('');
    const [success, setSuccess] = React.useState(false)
    const [person, setPerson] = React.useState({
        id: " ",
        fullName: " ",
        username: " ",
        email: " ",
        number: " ",
        fax: " ",
        address: "",
        country: ""
    })
    React.useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {

                setUserData(result.userData);

            })
            .catch(error =>
                console.log(error))
    }, [])
    const id = userData.length + 1
    const handleInput = (e) => {
        e.persist()
        setPerson({ ...person, [e.target.name]: e.target.value })
    }
    const saveperson = (e) => {
        e.preventDefault()

        const data = {
            company: person.company,
            id: JSON.stringify(id),
            username: person.username,
            email: person.email,
            number: person.number,
            fax: person.fax,
            address: person.address,
            country: person.country
        }
        axios.post('http://localhost:3001/stock', data)
            .then(result => {
                setUserData(result.userData)
                console.log(userData)
                toast('Stock Succesfully Added')
                setSuccess('Stock Successfully Added')
            })
            .catch(error => console.log(error))

        // const stock ={
        //     name: "",
        //     id: "",
        //     group: "",
        //     qty: ""
        // }
    }
    const handleChange = () => {

    }
    const handleDelete = () => {

    }

    return (
        <section className={style.settings}>
            <div className={style.column1}>
                {data.map((list) =>
                    <div className={style.list}>
                        {list.icon}
                        <p>{list.title}</p>
                    </div>
                )}
            </div>
            <div>
                <div>
                    <h6>General Information</h6>
                    <p>Update your photo and personal details</p>
                </div>
                <div>
                    <h6>Profile Picture</h6>
                    <div>
                        <div className={style.intro}>
                            <div className={style.picDiv}>
                                <div className={style.dp}><ProfileDP className={style.pic} /></div>
                                <div></div>
                            </div>
                            <div className={style.info}>
                                <h6 >Maria</h6>
                                <p>Role Title</p>
                                <p>Location</p>
                            </div>
                        </div>
                        <div className={style.buttons}>
                            <MyButton type='primary'
                                onClick={handleChange}
                            //disabled={isSubmitting}
                            >
                                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                                Change
                            </MyButton>
                            <MyButton type='outline' className={style.cancelbtn}
                                onClick={handleDelete}
                            //disabled={isSubmitting}
                            >
                                {/* <Link to="/dashboard" className={combinedClasses(style.loginlink, 'link')}> Sign In </Link> */}
                                Delete
                            </MyButton>
                        </div>
                    </div>
                </div>
                <div></div>
            </div>
            <form action="" onSubmit={saveperson}>
                {success && <div className={combinedClasses(errorstyle.error, style.success)}>{success}</div>}
                <div className={addStyle.inputs}>
                    <CustomInput type="text" name='fullName' onChange={handleInput} label={"Full Name"} className={style.type} />
                    <CustomInput type="text" name='company' onChange={handleInput} label={"Company's Name"} className={style.type} />
                    <CustomInput type="text" name='username' onChange={handleInput} label={"Username"} className={style.type} />
                    <CustomInput type="text" name='email' onChange={handleInput} label={"Email Address"} className={style.type} />
                    <CustomInput type="text" name='number' onChange={handleInput} label={"Phone Number"} className={style.type} />
                    <CustomInput type="text" name='fax' onChange={handleInput} label={"Fax"} className={style.type} />
                    <CustomInput type="text" name='address' onChange={handleInput} label={"Full Address"} className={style.type} />
                    <CustomInput type="text" name='country' onChange={handleInput} label={"Country"} className={style.type} />
                </div>


            </form>
        </section>
    )
}