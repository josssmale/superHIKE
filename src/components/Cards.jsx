import React from 'react';
import Card from './Card';
import Alps400 from '../assets/alps400.jpg';
import Everest400 from '../assets/everest400.jpg';
import NewZealand400 from '../assets/new_zealand400.jpg';

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <Card props={{ image: Alps400, alt: 'alps', location: 'Explore The Alps', price: '£899', flights: 'Flights included', accommodation: 'Accommodation included', guides: 'Choose your guide' }} />
            <Card props={{ image: Everest400, alt: 'everest', location: 'Everest Base Camp Awaits', price: '£1799', flights: 'Flights included', accommodation: 'Accommodation included', guides: 'Choose your guide' }} />
            <Card props={{ image: NewZealand400, alt: 'new zealand', location: 'New Zealand\'s Trails', price: '£2199', flights: 'Flights included', accommodation: 'Accommodation included', guides: 'Choose your guide' }} />
        </div>
    </div>
  )
}

export default Cards