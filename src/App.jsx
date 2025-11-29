import rockImg from "./assets/rock-emoji.png";
import paperImg from "./assets/paper-emoji.png";
import scissorsImg from "./assets/scissors-emoji.png";
import { useState } from "react";

import ScoreBoard from "./components/ScoreBoard";
import PlayButtons from "./components/PlayButtons";
import Toast from "./components/Toast";
import Controls from "./components/Controls";
import "./App.css";


function App() {
  const [score, setScore] = useState(JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    losses: 0,
    ties: 0,
  });

  const [isAutoPlaying, setIsAutoPlaying] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  

  function playGame(playerChoice) {
    const computerChoice = Math.random();
    let computerSelection = "";
    let result = "";

    if (computerChoice < 0.34) {
      computerSelection = "rock";
    } else if (computerChoice <= 0.67) {
      computerSelection = "paper";
    } else {
      computerSelection = "scissors";
    }

    if (playerChoice === computerSelection) {
      setScore((prevScore) => ({
        ...prevScore,
        ties: prevScore.ties + 1,
      }));
      result = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerSelection === "scissors") ||
      (playerChoice === "paper" && computerSelection === "rock") ||
      (playerChoice === "scissors" && computerSelection === "paper")
    ) {
      setScore((prevScore) => ({
        ...prevScore,
        wins: prevScore.wins + 1,
      }));
      result = "You win!";
    } else {
      setScore((prevScore) => ({
        ...prevScore,
        losses: prevScore.losses + 1,
      }));
      result = "You lose!";
    }

    localStorage.setItem("score", JSON.stringify(score));
    const message = `You chose ${playerChoice}, computer chose ${computerSelection}. ${result}`;
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 2000);
  }

  function resetScore() {
    setScore({
      wins: 0,
      losses: 0,
      ties: 0,
    });
  }

  function autoPlay() {
    const choices = ["rock", "paper", "scissors"];

    if (isAutoPlaying) {
      setIsAutoPlaying(false);
      clearInterval(intervalId);
      return;
    }

    setIsAutoPlaying(true);
    const id = setInterval(() => {
      const randomChoice = choices[Math.floor(Math.random() * choices.length)];
      playGame(randomChoice);
    }, 3000);

    setIntervalId(id);
  }

  return (
    <div className="app">
      {showToast && <Toast message={toastMessage} />}
      <h1>Rock Paper Scissors</h1>
      <PlayButtons
        playGame={playGame}
        isDisabled={isAutoPlaying || showToast}
        rockImg={rockImg}
        paperImg={paperImg}
        scissorsImg={scissorsImg}
      />

      <ScoreBoard score={score} />

      <Controls resetScore={resetScore} autoPlay={autoPlay} />
    </div>
  );
}

export default App;
