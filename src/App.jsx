import React from 'react';
import Header from './Components/Header/Header.jsx';
import './App.css'
import Hero from './Components/Hero/Hero.jsx';
import Companies from './Components/Companies/Companies.jsx';
import Residencies from './Components/Residencies/Residencies.jsx';
import Value from './Components/Value/Value.jsx';
import Contact from './Components/Contact/Contact.jsx';
import GetStart from './Components/GetStart/GetStart.jsx';
import Footer from './Components/Footer/Footer.jsx';

function App() {

  return (
    <div className='App'>
      <div className='handh'>
          <div className='white-gradient'/>
              <Header />
              <Hero />
          </div>
          <Companies />
          <Residencies />
          <Value />
          <Contact />
          <GetStart />
          <Footer />
        </div>
  )
}

export default App
