import React from 'react'

const Card = ({props}) => {
  return (
    <div>            
        <div className='w-full shadow-xl bg-gray-50 flex flex-col p-4 my-8 rounded-lg hover:bg-gray-100 hover:scale-105 duration-300'>
            <img className='mx-auto mt-[-3rem] bg-transparent' src={props.image} alt={props.alt} />
            <h2 className='text-2xl font-bold text-center py-8'>{props.location}</h2>
            <p className='text-center text-4xl font-bold'><span className='text-lg'>from</span> {props.price}</p>
            <div className='text-center font-medium'>
                <p className='py-2 border-b mx-8 mt-8'>{props.flights}</p>
                <p className='py-2 border-b mx-8'>{props.accommodation}</p>
                <p className='py-2 mx-8'>{props.guides}</p>
            </div>
            <button className='bg-[#3DA5D9] hover:bg-[#29339B] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-white'>Start HIKE</button>
        </div>
    </div>
  )
}

export default Card