import React from "react"
import {useState} from "react"

export default function Quiz (props) {

    const [selected, setSelected] = useState(false)

    // const toggleClass = () => {
    //     setSelected(!selected)
    // }

    

    return (
        <>
            <div className="quiz-container">
                <h1 className="question">{props.question}</h1>
                <div className="answers-container">
                    <button className={selected ? "selected-answer" : "answers"}>
                        {props.correctAnswer}
                    </button>
                    <button className={selected ? "selected-answer" : "answers"}>
                        {props.incorrectAnswer}
                    </button>
                   {Object.keys(props.incorrectAnswer).length > 1 && <button className={selected ? "selected-answer" : "answers"}>
                        {props.incorrectAnswer}
                    </button>}   
                    {Object.keys(props.incorrectAnswer).length > 1 && <button className={selected ? "selected-answer" : "answers"}>
                        {props.incorrectAnswer}
                    </button>}  
                </div>
            </div>
        </>
    )
}

