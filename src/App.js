import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Advert from './components/Advert';
import Newsletter from './components/Newsletter';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Advert />
      <Newsletter />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
