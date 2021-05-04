import "./App.css";
import Card from "./components/Card";

function App() {
  const questions = [
    {
      question: "According to Schon, how many types of reflection are there?",
      answer: "2",
      id: 0
    },
    {
      question: "What is the collective name for a group of giraffe’s?",
      answer: "Tower",
      id: 1
    },
    {
      question:
        "What movie is this quotation from? 'People will think you're up to something'",
      answer: "Harry Potter and the Philosopher's Stone",
      id: 2
    },
    {
      question:
        "What is the command to use when you want to list all the files in a directory?",
      answer: "ls",
      id: 3
    },
  ];

  return (
    <div className="App">
      {questions.map(({ question, answer, id}) => {
        return <Card key={id} question={question} answer={answer} />;
      })}
    </div>
  );
}

export default App;
