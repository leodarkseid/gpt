import React from 'react'


import {Footer, Blog, Possibility, Features, Gpt3,Header } from './containers';
import {Navabar, Brand, CTA } from './components';
const App = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <Navbar />
        <Header />



      </div>
      <Brand />
      <Gpt3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
       
    </div>
  )
}

export default App