import React, { useEffect, useState } from "react";
import useCountdown from "../hooks/useCountdown";
import { Modal, Box, Typography, Button } from "@mui/material";
import tickSound from "../assets/tick.mp3"
import beepSound from "../assets/beep.mp3"

export default function GameScreen({setPage}){

    const [score, setScore] = useState(0)
    const [gameIsStarted, setGameIsStarted] = useState(false)
    const StartTimer = useCountdown()
    const GameTimer = useCountdown()

    function playTickSound(){
        new Audio(tickSound).play()
    }

    function playBeepSound(){
        new Audio(beepSound).play()
    }

    useEffect(() => {
        StartTimer.start(3)
    }, [])

    //audio effect
    useEffect(() => {

        if(StartTimer.secondsLeft > 0){
            playTickSound()
        } else {
            setGameIsStarted(true)
            console.log(gameIsStarted)
            GameTimer.start(60)
        }

    }, [StartTimer.secondsLeft])

    useEffect(() => {
        console.log(GameTimer.secondsLeft)
        if(!gameIsStarted) return;

        if(GameTimer.secondsLeft === 60){
            playBeepSound()
        }

    }, [GameTimer.secondsLeft])




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
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            1. You will be given a cluster of letters to create a word (THINK BOMB PARTY)<br/>
            2. You will also be given 60 seconds on your timer<br/>
            3. Each guess earns you a point as well as 2 extra seconds on your timer
          </Typography>
        </Box>}
     
        <div className="rounded-xl flex justify-center" style={{height: "54rem", width: "48rem", backgroundColor: "#b5b5b5", margin: "-1.5rem 0 0 0"}}>
        </div>
    </>)
}