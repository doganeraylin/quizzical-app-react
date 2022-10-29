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
                <div className="options-container">
                    <button className={selected ? "selected-option" : "options"}>
                        {props.correctOption}
                    </button>
                
                   {Object.keys(props.incorrectOption).length > 1 && <button className={selected ? "selected-option" : "options"}>
                        {props.incorrectOption}
                    </button>}   
                </div>
            </div>
        </>
    )
}

