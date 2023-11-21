import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Search from './components/Search/Search';
import Driver from './components/Driver-Slider/Driver';
import Benefits from './components/Benefits/Benefits';
import Luxury from './components/Luxury/Luxury';
import Footer from './components/Footer/Footer';
import SubFooter from './components/SubFooter/SubFooter';

const Home = () => {
  return (
    <>
      <NavBar />
      <Search />
      <Driver />
      <Benefits />
      <Luxury />
      <Footer />
      <SubFooter />
    </>
  )
}

export default Home;