import { HiOutlineEye, HiOutlineEyeOff } from "react-icons/hi";
import { IoSearchOutline } from "react-icons/io5";
import React from 'react'
import style from './style.module.css'
import { combinedClasses } from "../../../app/utilities/format";
import { Table } from "../inventory/medicineList/MedicineListComp";
import { useState, useEffect } from "react";
import axios from "axios";


export const CustomInput = ({ ...props }) => {
    const [show, setShow] = React.useState(false)
    let label = props.label
    let type = props.type


    if (props.type === 'password') {
        type = !show ? 'password' : 'text'
    }
    const handleIconToggle = () => {
        setShow(!show)
    }
    // const hideShowToggle=()=}{

    // }
    // <div className={style.inputDiv}>
    //         <label>{label}</label>
    //         <div className={style.inputFieldDiv}></div>
    const combineClass = combinedClasses(props.className)
    return (
        <div className={style.inputDiv}>
            {type === 'search' ?
                <div className={combinedClasses(style.inputFieldDiv, style.searchField)}>
                    <input {...props} type={type} className={style.search} />
                    <div className={style.icon}>
                        <IoSearchOutline />
                    </div>
                </div> :
                <div className={style.labelInput}>
                    <label className={type === 'text' ? style.nobg : style.bg}>{label}</label>
                    <div className={style.inputFieldDiv}>
                        <input {...props} type={type} />
                        {
                            props.type === 'password' &&
                            <div onClick={handleIconToggle} className={style.icon}>
                                {
                                    !show ?
                                        <HiOutlineEyeOff /> :
                                        <HiOutlineEye />
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    )
}
// src/components/Search.js

// import React, { useState } from 'react';
// import Scroll from './Scroll';
// import SearchList from './SearchList';
export const Search = (...props) => {
    
    const [searchField, setSearchField] = useState("false");
    const [searchParam] = useState(["group", "name", "usage"]);
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3001/stock')
            .then(result => {
                
                setData(result.data);
                console.log(data)
            })
            .catch(error => console.log(error))
    }, [])
            const search=(data)=> {
                console.log(data)
                return data.filter((item) => {
                    return searchParam.some((newItem) => {
                        return (
                            item[newItem]
                                .toString()
                                .toLowerCase()
                                .indexOf(searchField.toLowerCase()) > -1
                        );
                    });
                });
            }
            const handleSearch=(e)=>{
                if(e.target===''){
                    setSearchField(false)
                }
                else{
                setSearchField(e.target.value)
                setSearchField(!searchField)
            }
        }
    return (
        <div className={style.searchDiv}>
        <div className={combinedClasses(style.inputFieldDiv, style.searchField)}>
        <input {...props} type="search"  name="search" placeholder="Search for Available Medicines" className={style.search}  onChange={(e)=>setSearchField(e.target.value)}/>
            {/* <input {...props} type="search"  name="search"className={style.search}  onChange={(e)=>setSearchField(e.target.value)}/> */}
            <div className={style.icon}>
                <IoSearchOutline />
            </div>
        </div>
        <ul className={style.searchList}>
        {searchField&&
        search(data).map((medicine, index)=>(
<li>{medicine.name}</li>
))}
        </ul>
        
        </div>
    )
}

// export const SearchList = ({ filteredPersons }) => {
//     const filtered = filteredPersons.map(person =>
//         <Card key={person.id} person={person} />);
//     return (
//         <div>
//             {filtered}
//         </div>
//     );
// }

// // export const Scroll = (props) => {
// //     return (
// //         <div style={{ overflowY: 'scroll', height: '70vh' }}>
// //             {props.children}
// //         </div>
// //     );
// // }

// export const Search = ({ details }) => {

//     const [searchField, setSearchField] = useState("");
//     const [searchShow, setSearchShow] = useState(false);

//     const filteredPersons = details.filter(
//         person => {
//             return (
//                 person
//                     .name
//                     .toLowerCase()
//                     .includes(searchField.toLowerCase()) ||
//                 person
//                     .email
//                     .toLowerCase()
//                     .includes(searchField.toLowerCase())
//             );
//         }
//     );

    

//     // function searchList() {
//     //     if (searchShow) {
//     //         return (
//     //             <SearchList filteredPersons={filteredPersons} />
//     //             <Scroll>

//     //             </Scroll>
//     //         );
//     //     }
//     // }

//     return (
//         <section className="garamond">
//             <div className="navy georgia ma0 grow">
//                 <h2 className="f2">Search your course</h2>
//             </div>
//             <div className={combinedClasses(style.inputFieldDiv, style.searchField)}>
//                 <input {...props} type={type} className={style.search} onChange={handleChange} />
//                 <div className={style.icon}>
//                     <IoSearchOutline />
//                 </div>
//             </div>
//             {/* <input
//                     className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
//                     type="search"
//                     placeholder="Search People"
//                     onChange={handleChange}
//                 /> */}
//             {searchList()}
//         </section>
//     );
// }