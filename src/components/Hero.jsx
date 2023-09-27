import React from 'react'
import Typed from 'react-typed'
import Hero1240 from '../assets/hero1240.jpg';

const Hero = () => {
  return (
    <div className='text-white bg-[#1b1213]'>
        <div className='max-w-[1240px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-top pt-[136px]' style={{ backgroundImage: `url(${Hero1240})` }}>
            <div className='flex justify-center items-center'>
                <h1 className='text-[#5C574F] md:text-5xl sm:text-4xl text-2xl font-bold py-4'>Adventures in </h1>
                <Typed className='text-[#5C574F] md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2' strings={['Europe', 'Asia', 'Australia']} typeSpeed={120} backSpeed={140} loop/>
            </div>
            <p className='md:text-2xl text-lg font-bold text-gray-500'>Let our specialists guide you</p>
            <button className='bg-[#3DA5D9] hover:bg-[#29339B] hover:cursor-pointer w-[200px] rounded-md font-medium my-6 mx-auto py-3 mt-10 text-white'>START HIKING</button>
        </div>
    </div>
  )
}

export default Hero