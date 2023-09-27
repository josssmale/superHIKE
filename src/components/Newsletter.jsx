import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4 text-center md:text-left'>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Want super deals, reviews and hiking tips?</h1>
                <p>Our newsletter will keep you up to date.</p>
            </div>
            <div className='my-4 text-center md:text-left'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email' />
                    <button className='bg-[#3DA5D9] hover:bg-[#29339B] hover:cursor-pointer w-[200px] rounded-md font-medium ml-4 my-6 px-6 py-3 text-black'>Join us</button>
                </div>
                <p>Read our <span className='text-[#3DA5D9]'>Privacy Policy</span>.</p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter