import React from "react"

export default function Intro (props) {

    const styles = {
        display: props.newGame ? "none" : ""
    }
    return (
        <div className="intro-container"
        style={styles}>
            <h1 className="intro-title">Quizzical</h1>
            <button className="start-btn" onClick={props.startNewGame}>Start quiz</button>
        </div>
    )
}