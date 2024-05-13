import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className="gpt3__header section__padding">
      <div className="gpt3__header-content">
        <div className="gradient__text">
          <h1>Lets Build Something Amazing with GPT-3 Open AI </h1>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet nisi harum ea ut distinctio quae. Odit tenetur laudantium alias ut cumque deleniti animi quas dignissimos, ab magni nisi ipsa in.</p>
          <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email Address' />
          <button type='button'>Get Started</button>
          </div>
          <div className="gpt3__header-content__people">
            <img src={people} alt='people'/>
            <p>1K+ people has requested access in 24 hours</p>
          </div>
      </div>
        <div className="gpt3__header-image">
          <img src={ai} alt="ai" />
        </div>
    </div>
  )
}

export default Header