import React from "react"
import {useState} from "react"

export default function Quiz ({question, correctAnswer, incorrectAnswers}) {

    const [selected, setSelected] = useState(false)
    const styles = {
        backgroundColor: selected ? "#D6DBF5" : ""
    }
    
    const [answers, setAnswers] = useState([correctAnswer, ...incorrectAnswers])
    console.log("answers", answers);

    const toggleClass = () => {
        setSelected(prevSelected => !prevSelected)
    }

    let shuffledAnswers = answers
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
   
    return (

        <>
            <div className="quiz-container" >
                <h1 className="question">{question}</h1>
                <div className="answers-container">
                    {shuffledAnswers.map((answer, i)=> {
                        return <button key={i} className="answers" style={styles} onClick={toggleClass}>
                        {answer}
                    </button>
                    })}
                    {/* <button className="answers" style={styles} onClick={toggleClass}>
                        {correctAnswer}
                    </button>
                    <button className="answers" style={styles} onClick={toggleClass}>
                        {incorrectAnswers}
                    </button>
                   {Object.keys(incorrectAnswers).length > 1 && <button className="answers" style={styles} onClick={toggleClass}>
                        {incorrectAnswers}
                    </button>}   
                    {Object.keys(incorrectAnswers).length > 1 && <button className="answers" style={styles} onClick={toggleClass}>
                        {incorrectAnswers}
                    </button>}   */}
                </div>
            </div>
        </>
    )
}

