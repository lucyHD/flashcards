import React from 'react';
import './Card.css'


const card = (props) => {
    

    return(
       <div className="flashcard"> 
            <p>{props.question}</p>
            <p>{props.answer} </p>
       </div> 
    )
}

export default card; 