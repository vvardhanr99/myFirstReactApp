import React from 'react';
import './display.css'

var NewsDisplay = (props) =>{
    //console.log("News Inside//",props)
    const renderNews = props.news.map((data)=>{
        return(
            <div>
                <h3>{data.title}</h3>
                <p>{data.feed}</p>
            </div>
        )
    })
    return(
        <div className='background'>
            {renderNews}
        </div>
    )
}
export default NewsDisplay