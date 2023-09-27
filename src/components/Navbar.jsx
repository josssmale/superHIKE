import React, {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai';
import {MdDirectionsWalk} from 'react-icons/md';

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <div className='flex items-end text-[#3DA5D9] pb-0 hover:text-[#29339B] hover:cursor-pointer'>
                <MdDirectionsWalk className='pb-0' size={38} />
                <h1 className='w-full text-3xl pl-0'>super<b>HIKE</b></h1>
            </div>
            <ul className='hidden md:flex font-bold'>
                <li className='p-4 text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Home</li>
                <li className='p-4 text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Popular Hikes</li>
                <li className='p-4 text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>About Us</li>
                <li className='p-4 text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Contact</li>
            </ul>
            <div onClick={handleNav} className='block md:hidden text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer font-bold'>
                {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <div className='flex items-end text-[#3DA5D9] pb-4 hover:text-[#29339B] hover:cursor-pointer m-4'>
                    <MdDirectionsWalk className='pb-1' size={38} />
                    <h1 className='w-full text-3xl pl-0'>super<b>HIKE</b></h1>
                </div>
                <ul className='uppercase p-4 text-[#3DA5D9] font-bold'>
                    <li className='p-4 border-b border-gray-600 hover:text-[#29339B] hover:cursor-pointer'>Home</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#29339B] hover:cursor-pointer'>Popular Hikes</li>
                    <li className='p-4 border-b border-gray-600 hover:text-[#29339B] hover:cursor-pointer'>About Us</li>
                    <li className='p-4 hover:text-[#29339B] hover:cursor-pointer'>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar