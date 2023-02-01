import React from 'react';
import { Feature } from '../../components';

import './gpt3.css';

const Gpt3 = () => {
  return (
    <div className='gpt3__whatgpt3 section__margin' id='whatgpt3'>
      <div className="gpt3__whatgpt3-feature">
        <Feature />
      </div>
      <div className="gpt3__gpt3-heading">
        <h1 className='gradient-text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className="gpt3__whatgp3-container">
        <Feature />
        <Feature />
        <Feature />
        
      </div>

    </div>
  )
}

export default Gpt3