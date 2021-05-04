
import './App.css';

function App() {
 
  const questions  = [{

    question: "According to Schon, how many types of reflection are there?",
    answer: "2"
    },
    {
      question: "What is the collective name for a group of giraffe’s?",
      answer: "Tower"
    }, 
    {
      question: "What movie is this quotation from? 'People will think you're up to something'",
      answer: "Harry Potter and the Philosopher's Stone"
    },
    {
      question: "What is the command to use when you want to list all the files in a directory?",
      answer: "ls"
    }
  ]


  return (
    <div className="App">
       { questions.map( question => <p>{ question.question }</p>) }
    </div>
  );
}

export default App;
