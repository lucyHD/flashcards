import { useState } from 'react'; 
import './Card.css';


const Card = ({question, answer}) => {

const [ showAnswer, setShowAnswer ]  =  useState(false)
const [ isDone, setIsDone ] = useState(false)



const showReverseSideHandler = () => {
    setShowAnswer(!showAnswer) // when button is clicked, change the state of show answer to be the opposite of its current state  
}

const doneButtonHandler = () => {
    setIsDone(!isDone)
}

    return(
      (!isDone &&
        <div className="flashcard">
            {!showAnswer ? <p> { question } </p> : <p> { answer }</p>}
            <button onClick={showReverseSideHandler}> { showAnswer ? 'Show Question' : 'Show Answer' }</button>
            <button onClick={doneButtonHandler}> Mark as Done </button>
        </div> 
        
    )
    )
}

export default Card; 


