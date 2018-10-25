import React, { Component } from "react";
import "./App.css";
import Button from "./Button/Button";
import Input from "./Input/Input";

class App extends Component {
  state = {
    number: null,
    guess: null,
    message: null,
    showInput: true,
    showHighScore: true,
    counter: 1,
    highScoreMessage: "",
    highscores: {
      standard: [],
      expert: []
    },
    level: ""
  };

  standardButtonHandler = () => {
    // For standard game
    let standard = Math.floor(Math.random() * 10) + 1; // Creating random numbers from 1 to 10
    document.getElementById("input").value = ""; // Setting input field black when they get it wrong

    this.setState(
      {
        number: standard,
        message: "",
        showInput: false, // Displays submit form
        counter: 1,
        level: "standard",
        showHighScore: true
      },
      () => console.log(this.state.number)
    );
  };

  expertButtonHandler = () => {
    // For expert game
    let expert = Math.floor(Math.random() * 100) + 1; // Creating random numbers from 1 to 100
    document.getElementById("input").value = ""; // Setting input field black when they get it wrong

    this.setState(
      {
        number: expert,
        message: "",
        showInput: false, // Displays submit form
        counter: 1,
        level: "expert",
        showHighScore: true
      },
      () => console.log(this.state.number)
    );
  };

  valueSubmit = e => {
    e.preventDefault();
    let userGuess = document.getElementById("input").value; // Getting user input on submit

    this.setState(
      {
        guess: userGuess
      },
      () => this.validation()
    );
  };

  validation = () => {
    const { number, guess } = this.state; // Destructuring state
    // Based on level of game, highScores gets assigned standard or expert array from state
    const highScores =
      this.state.level === "standard"
        ? this.state.highscores.standard
        : this.state.highscores.expert;

    if (number === Number(guess)) {
      highScores.push(this.state.counter);
      let min = Math.min(...highScores); // Finding the lowest highscore

      this.setState(
        {
          message: `You're Right! It took ${this.state.counter} attempts`
        },
        () => {
          this.setState({
            highScoreMessage:
              this.state.level === "standard"
                ? `Standard Highscore: ${min}`
                : `Expert Highscore: ${min}`
          });
        }
      );
    } else if (number > Number(guess)) {
      // If the random number is greater than the guess
      this.setState({
        counter: this.state.counter + 1,
        message: "Guess Higher"
      });
      document.getElementById("input").value = ""; // Setting input field black when they get it wrong
    } else if (number < Number(guess)) {
      // If the random number is less than the guess
      this.setState({
        counter: this.state.counter + 1,
        message: "Guess Lower"
      });
      document.getElementById("input").value = ""; // Setting input field black when they get it wrong
    }
  };

  highScoreButton = () => {
    // HighScore button
    this.setState({
      showHighScore: !this.state.showHighScore
    });
  };

  resetPage = () => {
    // Resets page to normal when function is called
    this.setState({
      number: null,
      guess: null,
      message: null,
      showInput: true,
      showHighScore: true,
      counter: 1,
      highScoreMessage: "",
      highscores: {
        standard: [],
        expert: []
      },
      level: ""
    });
  };

  render() {
    return (
        <div className="container">
          <header>
            <h1 className="App-title">Start Game</h1>
          </header>

          <p className="paraGraph">Guessing Game: Standard or Expert?</p>
          <p className="paraGraph">
            Click Either To Start and Click Again To Play Again!
          </p>

          <Button
            clickedStand={this.standardButtonHandler}
            clickedExp={this.expertButtonHandler}
          />

          <Input
            show={this.state.showInput}
            highScoreButton={this.highScoreButton}
            clickedSubmit={this.valueSubmit}
          />

          <p>{this.state.message}</p>
          <p hidden={this.state.showHighScore}>{this.state.highScoreMessage}</p>

          <button onClick={this.resetPage}>Reset</button>
        </div>
    );
  }
}

export default App;
