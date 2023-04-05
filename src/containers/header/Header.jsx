import React from 'react';
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';




export default function Header() {
    return (
        <div className='gpt3__header section__padding' id='home'>
            <div className="gpt3__header-content">
                <h1 className='gradient__text'>
                    Let's Build Something amazing with GPT-3 OpenAI
                </h1>
                <p className="">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit esse
                    voluptas nihil exercitationem? Earum accusamus dolor rerum libero,
                    expedita labore quibusdam. Nulla cumque sapiente laboriosam repellendus.
                </p>
                <div className="gpt3__header-content__input">
                    <input type="email" placeholder='Your email address' />
                    <button type='button'>Get Started</button>
                </div>

                <div className="gpt3__header-content_people">
                    <img src={people} alt="people" />
                    <p className="">
                        1,600 people visited in the last 24hours
                    </p>
                </div>

            </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai" />
            </div>
        </div>
    )
}
