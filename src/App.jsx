import './App.css'
import { useState } from 'react'
import { useEffect } from 'react'
import { nanoid } from 'nanoid'
import Intro from "./components/Intro"
import Quiz from "./components/Quiz"

// create intro component
// create quiz components and add props
// add onClick to start btn
// create startNewGame function that changes state from false to true
// render quiz conditionally using &&
// render intro conditionally using ternary operator
// call api using useEffect (use dependency) and render quiz content 
// render 2 or 4 options 
// options in random order



export default function App() {

  const [newGame, setNewGame] = useState(false)
  const [triviaData, setTriviaData] = useState([])

  const [quiz, setQuiz] = useState({
      id: nanoid(),
      question: "",
      correctAnswer: "",
      incorrectAnswer: ""
  })

  function startNewGame() {
     setNewGame(true)
  }

  useEffect(function(){
    console.log('effect ran')
    fetch("https://opentdb.com/api.php?amount=5")
      .then(res => res.json())
      .then(data => setTriviaData(data.results))
  }, []) 

  const quizQuestions = triviaData.map((item, i) => {
    return (
        <Quiz
            key = {i}
            question={item.question}
            correctAnswer={item.correct_answer}  
            incorrectAnswers={item.incorrect_answers}      
        />
    ) 
  })        

  return (
    <>
      <Intro
      newGame={newGame}
      startNewGame={startNewGame} 
      />

     {newGame && quizQuestions}

     {newGame && <button className='check-answers-btn'>Check answers</button>}
    </>
  )
 
}
