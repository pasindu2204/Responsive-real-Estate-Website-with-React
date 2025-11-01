import React from 'react';
import Header from './Components/Header/Header.jsx';
import './App.css'
import Hero from './Components/Hero/Hero.jsx';
import Companies from './Components/Companies/Companies.jsx';
import Recidences from './Components/Recidences/Recidences.jsx';

function App() {

  return (
    <div className='App'>
      <div className='handh'>
        <div className='white-gradient'/>
     <Header />
     <Hero />
     </div>
     <Companies />
     <Recidences />
    </div>
  )
}

export default App
