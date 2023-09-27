import React from 'react';
import {FaFacebookSquare, FaInstagramSquare, FaTwitterSquare} from 'react-icons/fa';
import {MdDirectionsWalk} from 'react-icons/md';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-6 grid lg:grid-cols-6 gap-8 text-gray-300 text-center md:text-left'>
        <div className='lg:col-span-3'>
            <div className='flex items-end text-[#3DA5D9] pb-0 hover:text-[#29339B] hover:cursor-pointer lg:w-[50%] justify-center md:justify-start'>
                <MdDirectionsWalk className='pb-0' size={38} />
                <h1 className='m:w-full text-3xl pl-0'>super<b>HIKE</b></h1>
            </div>
            <p className='py-4  lg:w-[50%]'>We take the hassle out of hiking so you can enjoy new adventures without the worry.</p>
            <div className='flex md:w-[75%] m:w-[50%] justify-center md:justify-start'>
                <FaFacebookSquare className='mr-2 text-[#3DA5D9] hover:text-[#29339B]' size={30} />
                <FaInstagramSquare className='mr-2 text-[#3DA5D9] hover:text-[#29339B]' size={30} />
                <FaTwitterSquare className='text-[#3DA5D9] hover:text-[#29339B]' size={30} />
            </div>
        </div>
        <div className='lg:col-span-3 md:flex sm:flex-row justify-between mt-6 lg:mt-0'>
            <div>
                <h6 className='font-medium text-gray-400'>Europe</h6>
                <ul>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Scotland</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>The Alps</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Ireland</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 mt-10 md:mt-0'>Asia</h6>
                <ul>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Everest Base Camp</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Nepal</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>Annapurna</li>
                </ul>
            </div>
            <div>
                <h6 className='font-medium text-gray-400 mt-10 md:mt-0'>Australia</h6>
                <ul>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>East Coast</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>New Zealand (N)</li>
                    <li className='py-2 text-sm text-[#3DA5D9] hover:text-[#29339B] hover:cursor-pointer'>New Zealand (S)</li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Footer