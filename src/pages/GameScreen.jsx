import React, { useEffect, useState } from "react";
import useCountdown from "../hooks/useCountdown";
import { TextField, Box, Typography,  } from "@mui/material";
import tickSound from "../assets/tick.mp3"
import beepSound from "../assets/beep.mp3"
import lockSound from "../assets/lock.mp3"
import sisyphusGif from "../assets/200w.gif"

export default function GameScreen({setPage}){

    const [score, setScore] = useState(0)
    const [message, setMessage] = useState(`"One must imagine WORDYPHUS happy."`)
    const [gameIsStarted, setGameIsStarted] = useState(false)
    const StartTimer = useCountdown()
    const GameTimer = useCountdown()

    function playTickSound(){
        new Audio(tickSound).play()
    }

    function playBeepSound(){
        new Audio(beepSound).play()
    }
    function playLockSound(){
        new Audio(lockSound).play()
    }

    useEffect(() => {
        StartTimer.start(1)
    }, [])

    //audio effect
    useEffect(() => {

        if(StartTimer.secondsLeft > 0){
            playTickSound()
        } else {
            startGame()

        }

    }, [StartTimer.secondsLeft])

    useEffect(() => {
        console.log(GameTimer.secondsLeft)
        if(!gameIsStarted) return;

        if(GameTimer.secondsLeft === 60){
            playBeepSound()
        }

        if(GameTimer.secondsLeft === 0){
            endGame()
        }

    }, [GameTimer.secondsLeft])



    //Actual game logic
    const [currComponent, setCurrComponent] = useState("LA")
    const [currGuess, setCurrGuess] = useState("")


    function startGame(){
        setGameIsStarted(true)
        console.log(gameIsStarted)
        GameTimer.start(61)
    }

    function endGame(){
        setGameIsStarted(false)
        console.log(gameIsStarted)
        GameTimer.start(61)
    }


    function correctAnswer(){
        setScore(() => {
            return score + 1
        })
        playTickSound()
    }

    function wrongAnswer(){
        playLockSound()
    }

    function changeCurrentComponent(){
        
    }

    function submitWord(e){
        e.preventDefault()

    }

    const style = {
        position: 'absolute',
        top: '25%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 800,
        backgroundColor: "#303444",
        boxShadow: 24,
        p: 4,
      };
      

    return (<>


{ (StartTimer.secondsLeft !== 0) && <Box sx={style} className="rounded-lg" >
            <div className="h-24 m-0 p-0 w-full text-white text-6xl"> 
                {StartTimer.secondsLeft}
            </div>

          <hr className="my-4"></hr>
          <Typography  id="modal-modal-title" variant="h6" component="h2">
            Gameplay:
          </Typography>
          <Typography id="modal-modal-description" className="text-start" sx={{ mt: 2 }}>
            1. You will be given a cluster of letters to create a word (THINK BOMB PARTY)<br/>
            2. You will also be given 60 seconds on your timer<br/>
            3. Each guess earns you a point, as well as 2 extra seconds on your timer<br/>
            4. You cannot reuse words!
          </Typography>
        </Box>}
     
        {(GameTimer.secondsLeft >= 0 && GameTimer.secondsLeft <= 60) && (<div className="rounded-xl flex flex-col  items-center " style={{height: "54rem", width: "48rem", backgroundColor: "#2e3546", margin: "-1.5rem 0 0 0"}}>
                <div className="text-2xl pt-12">
                    {GameTimer.secondsLeft}
                </div>
                <div item className="p-12 text-xl">
                    Current Score: {score}
                </div>

                <div className="flex flex-col justify-center">
                    <img src={sisyphusGif}/>
                    {message}
                </div>
                <div item className="p-12 text-2xl">
                    Spell a word with: <a> {currComponent} </a>
                </div>
                <form onSubmit={(e) => submitWord(e)}>
                <TextField  
                    type=""
                    inputProps={{min: 0, style: { textAlign: 'center' }}} // the change is here
                    value={currGuess}
                    onChange={(e) => {
                        const currGuessString = e.target.value.toUpperCase()
                        setCurrGuess(currGuessString)
                    }}
                    placeholder="ENTER GUESS HERE"
                    className="bg-white"
                />
                </form>
        </div>)}
    </>)
}