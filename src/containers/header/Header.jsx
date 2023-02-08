import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>Let's Build something amazing with GPT-3 OpenAI </h1>
      <p>Sit non amet voluptate culpa exercitation elit et proident aliquip. Reprehenderit excepteur incididunt ipsum dolor culpa nulla aliquip sunt cupidatat.Aliquip qui tempor officia amet .</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address"/>
        <button type='button'>GetStarted</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt='people' />
        <p>1,600 people requested access in the last 24hours</p>
      </div>

      </div>
      <div className="gpt3__header-image">
        <img src={ai} alt="ai" />
      </div>

      
      </div>
  )
}

export default Header