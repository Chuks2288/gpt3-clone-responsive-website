import React from 'react';
import './possibility.css';
import { possibility } from '../../assets';
// import { Feature } from '../../components/Feature';

export default function Possibility() {
    return (
        <div className='gpt3__possibility section__padding ' id='possibility'>
            <div className="gpt3__possibiltiy-image">
                <img src={possibility} alt="possibility" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Request Early Access to Get Started</h4>
                <h1>The possibilities are beyond your imagination</h1>
                <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment.
                    Party we years to order allow asked of.
                </p>
                <span>Request Early Access to Get Started</span>

            </div>
        </div>
    )
}
