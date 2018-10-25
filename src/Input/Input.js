import React from 'react';

import '../App.css';

const input = (props) => {

    return (
        <form hidden={props.show} name="myForm" onSubmit={props.clickedSubmit}>
            <p>Guess The Number</p>
            <input className="inputField" type='text' id="input" />
            <input className="inputButton" type="submit" />
            <button className = "highScoreButton"
            onClick = {props.highScoreButton}>HighScore?</button>
        </form>
    )
}

export default input;