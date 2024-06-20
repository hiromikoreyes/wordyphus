import React, { useEffect, useState } from "react";
import useCountdown from "../hooks/useCountdown";
import { TextField, Box, Typography, Button } from "@mui/material";
import sisyphusGif from "../assets/200w.gif";
import wordyphusEnd from "../assets/wordyphus failed.png";
import tickSound from "../assets/tick.mp3";
import beepSound from "../assets/beep.mp3";
import lockSound from "../assets/lock.mp3";
import dictionary from "./dictionary.js";

export default function GameScreen({ setPage }) {
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState(`"One must imagine WORDYPHUS happy."`);
  const [gameState, setGameState] = useState("gameIsLoading");
  const StartTimer = useCountdown();
  const GameTimer = useCountdown();

  function playTickSound() {
    new Audio(tickSound).play();
  }

  function playBeepSound() {
    new Audio(beepSound).play();
  }
  function playLockSound() {
    new Audio(lockSound).play();
  }

  useEffect(() => {
    StartTimer.start(11);
  }, []);

  //audio effect
  useEffect(() => {
    if (StartTimer.secondsLeft > 1) {
      playTickSound();
    } else if(StartTimer.secondsLeft === 1) {
      startGame();
      playBeepSound();
    }
  }, [StartTimer.secondsLeft]);

  useEffect(() => {
    console.log(GameTimer.secondsLeft);
    if (!gameState) return;

    if (GameTimer.secondsLeft === 0) {
      endGame();
    }
  }, [GameTimer.secondsLeft]);

  //Actual game logic

  const wordComponentList = ["PO", "LA", "LA", "ACT", "ATE", "EAR", "END", "GET", "EE", "DE", "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", 
    "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", "ES", "MPT", "AS", "RE", "TH", 
    "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI", "AB", "AD", "BE", 
    "DE", "EF", "EN", "IN", "IT", "OT", "TO",  "ING", "ION", "ABLE",  "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", "LAD", "RA",
     "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", "ES", 
     "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI", 
     "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "ACT", "ATE", "EAR", "END", "GET", "ING",
      "ION", "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", 
      "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", 
      "ES", "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "LIN", "DEA", "DIC", "TI",
       "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "ACT", "ATE", "EAR", "END", "GET", "ING", 
        "ION", "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", 
       "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED",
        "ES", "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI",
         "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "AT", "AT", "EARD", "END", "GET", "ING", "ION",
          "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION","PO", "LA", "ACT", "ATE", "EAR", "END", "GET", "EE", "DE", "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", 
    "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", "ES", "MPT", "AS", "RE", "TH", 
    "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI", "AB", "AD", "BE", 
    "DE", "EF", "EN", "IN", "IT", "OT", "TO",  "ING", "ION", "ABLE",  "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", "LAD", "RA",
     "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", "ES", 
     "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI", 
     "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "ACT", "ATE", "EAR", "END", "GET", "ING",
      "ION", "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", 
      "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED", 
      "ES", "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "LIN", "DEA", "DIC", "TI",
       "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "ACT", "ATE", "EAR", "END", "GET", "ING", 
        "ION", "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", "PO", "LA", "EE", "DE", 
       "LAD", "RA", "RO", "WAT", "MO", "NE", "NT", "UR", "OR", "AND", "SA", "EP", "EL", "TAL", "MUZ", "FU", "ED",
        "ES", "MPT", "AS", "RE", "TH", "TYR", "EB", "FL", "MON", "MOA", "CAN", "VIO", "LIN", "DEA", "DIC", "TI",
         "AB", "AD", "BE", "DE", "EF", "EN", "IN", "IT", "ON", "TO", "AT", "AT", "EARD", "END", "GET", "ING", "ION",
          "ABLE", "ANCE", "ATED", "ATIC", "IBLE", "IEST", "MENT", "NESS", "TION", ]
  const [currComponent, setCurrComponent] = useState("LA");
  const [currGuess, setCurrGuess] = useState("");
  const [alreadyGuessed, setAlreadyGuessed] = useState({})

  function startGame() {
    setGameState("gameIsRunning");
    GameTimer.start(60);
  }

  function endGame() {
    setGameState("gameHasEnded");
  }

  function correctAnswer() {
    setScore(() => {
      return score + 1;
    });
    GameTimer.add(1);
    changeCurrentComponent()
    addWordToUsedWords(currGuess)
    playTickSound();
  }

  function wrongAnswer() {
    playLockSound();
    //do some visual stuff
  }

  function changeCurrentComponent() {
    const newWord = wordComponentList[score]
    setCurrComponent(newWord)
  }

  function addWordToUsedWords(word){
    const guesses = structuredClone(alreadyGuessed)
    Object.assign(guesses, {word: 1})
    setAlreadyGuessed(guesses)
  }

  function submitWord(e) {
    e.preventDefault();
    if (dictionary[currGuess] === 1 && currGuess.includes(currComponent) && !alreadyGuessed[currGuess]) {
      correctAnswer();
      setCurrGuess("");
      changeCurrentComponent();
    } else {
      wrongAnswer();
    }
  }

  const style = {
    position: "absolute",
    top: "25%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    backgroundColor: "#303444",
    boxShadow: 24,
    p: 4,
  };

  return (
    <>
      {(gameState === "gameIsLoading") && (
        <Box sx={style} className="rounded-lg">
          <div className="h-24 m-0 p-0 w-full text-white text-6xl">
            {StartTimer.secondsLeft-1}
          </div>

          <hr className="my-4"></hr>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Gameplay:
          </Typography>
          <Typography
            id="modal-modal-description"
            className="text-start"
            sx={{ mt: 2 }}
          >
            1. You will be given a cluster of letters to create a word (THINK
            BOMB PARTY)
            <br />
            2. You will also be given 60 seconds on your timer
            <br />
            3. Each guess earns you a point, as well as 1 extra second on your
            timer
            <br />
            4. You cannot reuse words!
          </Typography>
        </Box>
      )}

     {(gameState === "gameHasEnded") && (
        <Box sx={style} className="rounded-lg flex flex-col items-center">
            <div>
            THANKS FOR <strike>PLAYING</strike> (beta testing 😉): <br></br>
            <hr className="my-4"></hr>

            </div>
            <img className="w-48 h-48"src={wordyphusEnd}></img>

        <div>
          <hr className="my-4"></hr>

        <a> MY SCORE WAS: `{score}` </a>

        <hr className="my-4"></hr>

        </div>


          <Button className="text-white" onClick={() => {setPage("TitleScreen")}}>
            Play Again
          </Button>

        </Box>
      )}

      {(gameState === "gameIsRunning") && (
        <div
          className="rounded-xl flex flex-col  items-center "
          style={{
            height: "54rem",
            width: "48rem",
            backgroundColor: "#2e3546",
            margin: "-1.5rem 0 0 0",
          }}
        >
          <div className="text-2xl pt-12">{GameTimer.secondsLeft}</div>
          <div item className="p-12 text-xl">
            Score: {score}
          </div>

          <div className="flex flex-col justify-center">
            <img src={sisyphusGif} />
            {message}
          </div>
          <div item className="p-12 text-2xl">
            Spell a word with: <a> {currComponent} </a>
          </div>
          <form onSubmit={(e) => submitWord(e)}>
            <TextField
              type=""
              inputProps={{ min: 0, style: { textAlign: "center" } }} // the change is here
              value={currGuess}
              onChange={(e) => {
                const currGuessString = e.target.value.toUpperCase();
                setCurrGuess(currGuessString);
              }}
              placeholder="ENTER GUESS HERE"
              className="bg-white"
            />
          </form>
        </div>
      )}
    </>
  );
}
