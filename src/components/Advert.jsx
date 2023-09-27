import React from 'react'
import Cullin500 from '../assets/cullin500.jpg'

const Advert = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4' src={Cullin500} alt="cullin" />
            <div className='flex flex-col justify-center ml-6'>
                <p className='font-bold text-center md:text-left'>Scotland's Toughest Mountains</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2 text-center md:text-left'>The Black Cullin</h1>
                <p className='text-center md:text-left'>
                    Let our experts help you tackle the UK's most notorious hiking challenge on the beautiful isle of Skye.
                </p>
                <button className='bg-[#3DA5D9] hover:bg-[#29339B] hover:cursor-pointer w-[200px] rounded-md font-medium my-6 md:mx-0 mx-auto py-3 text-white'>Lets GO!</button>
            </div>
        </div>
    </div>
  )
}

export default Advert