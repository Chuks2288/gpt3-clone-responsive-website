import React from 'react';
import './article.css';


export default function Article({ imgUrl, date, title }) {
    return (
        <div className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="blog" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div className="">
                    <p>{date}</p>
                    <h3>{title}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}
