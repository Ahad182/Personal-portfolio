import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { TbHexagonLetterR } from "react-icons/tb";
import { RxHamburgerMenu } from "react-icons/rx";
import { ImCancelCircle } from "react-icons/im";
import Resumiwer from '../pages/Resumiwer';





const Header = () => {
    const [show, setShow] = useState(true)
    const navList = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "#Projects",
            name: 'Projects'
        }, {
            link: "#skills",
            name: 'Skills'
        }, {
            link: "#contact",
            name: 'Contact'
        },
        {
            link: "#hero",
            name: 'Resume'
        }
    ]
    return (
        <div>
            <header className=' w-full fixed top-0 left-0 z-40 bg-bgColor text-PrimaryColor h-[15vh] flex items-center '>
                <nav className='w-[95%] mx-auto flex items-center justify-between font-mono  text-xl'>
                    <div className="logo">
                        <Link to="/"><TbHexagonLetterR className='text-5xl hover:scale-150 hover:shadow-sm hover:shadow-PrimaryColor rounded-lg' /></Link>
                    </div>
                    {/* nav for Lg secreen */}
                    <ul className='hidden md:flex space-x-10 mr-11'>
                        {
                            navList.map((item, index) => {
                                return (
                                    <li key={item.link} className='hover:text-textColor'>
                                        <a href={item.link} className="hover:underline hover:space-y-7 hover:underline-offset-8"> <span className='text-textColor '></span> {item.name}</a>
                                    </li>
                                )
                            })
                        }

                    </ul>
                    <div className='block md:hidden' onClick={() => setShow(!show)}>
                        {show ? <RxHamburgerMenu className='text-2xl ' /> : <ImCancelCircle className='text-2xl md:hidden block' />}

                    </div>



                </nav>
                {/* nav for small secreen */}
                {show ? "" :
                    <div className=' md:hidden'> <ul className='absolute top-[15vh] left-0 h-screen  w-[100%]  bg-bgColor p-10 flex flex-col gap-7 z-10 items-center space-y-8'>
                        {
                            navList.map((item, index) => {
                                return (
                                    <li key={item.link} className='hover:text-textColor'>
                                        <NavLink to={item.link} className="hover:underline hover:space-y-7 hover:underline-offset-8" onClick={()=>setShow(!show)}> <span className='text-textColor '>{index + 1}</span> .{item.name}</NavLink>
                                    </li>
                                )
                            })
                        }

                    </ul></div>}

            </header>

           
        </div>
    )
}

export default Header
