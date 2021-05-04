import { useState } from 'react';
import "./App.css";
import Card from "./components/Card";

function App() {

  const questions = [
    {
      question: "According to Schon, how many types of reflection are there?",
      answer: "2",
      id: 0,
      isDone: false


    },
    {
      question: "What is the collective name for a group of giraffe’s?",
      answer: "Tower",
      id: 1,
      isDone: false    
    },
    {
      question:
        "What movie is this quotation from? 'People will think you're up to something'",
      answer: "Harry Potter and the Philosopher's Stone",
      id: 2,
     isDone: false   
     },
    {
      question:
        "What is the command to use when you want to list all the files in a directory?",
      answer: "ls",
      id: 3,
      isDone: false
    }
  ];

    const [ cardInformation, setCardInformation ] = useState(questions)
    
    const markQuestionAsDone = (cardID) => {
      let updatedCardInformation =  cardInformation.map( (question) => {
              if(question.id  === cardID){
                 question.isDone = true
               }
              
              return question; 
         })
         console.log(updatedCardInformation)
    
         
    }

    markQuestionAsDone(3); 

  return (
    <div className="App">
      <Card
          question={cardInformation[0].question} 
          answer={cardInformation[0].answer}
          
          /> 
      {/* <button onClick={doneButtonHandler}> Mark as Done </button> */}
    </div>
  );
}

export default App;
