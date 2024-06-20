import { useState } from "react";
import "../App.css";
import sisyphusImage from "../assets/sisyphus.png";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


export default function TitleScreen({setPage}) {
  const [sispyhusSpeed, setSisyphusSpeed] = useState("sisyphus-animation-slow");
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
  
  return (
    <>

      <Modal
        open={open}
        onClose={handleClose}
      >
        <Box sx={style} className="rounded-lg">
          <Button
          onClick={handleClose}>
            {"< return"}
          </Button>
          <hr className="my-4"></hr>
          <Typography  id="modal-modal-title" variant="h6" component="h2">
            Gameplay:
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            1. You will be given a cluster of letters to create a word (THINK BOMB PARTY)<br/>
            2. You will also be given 60 seconds on your timer<br/>
            3. Each guess earns you a point, as well as 2 extra seconds on your timer
            4. You cannot reuse words!
          </Typography>
          <hr className="my-4"></hr>

        <div className="">

        <div className="m-2 mt-8">
        hiromikoreyes
        </div>

        <div className="text-2xl" style={{width: "40px", height: "40px", border:"50%"}}>
          <a className="text-xl underline"  href="https://github.com/hiromikoreyes">
            <div className="h-12 w-12 m-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path fill="#ffffff" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
            </svg>
          </div>
        </a>
        </div>
        </div>

          
        </Box>
      </Modal>

    <div>
      <img
        className={sispyhusSpeed}
        src={sisyphusImage}
        alt="one must imagine sisyphus happy"
      />

      <div
        className="shadow-lg rounded-lg h-fit p-72"
        style={{ background: "#2e3546" }}
      >
        <h1 className="text-5xl m-8 font-bold">Wordyphus</h1>

        <h2 className="text-1xl mb-8">
          Guess as many words as you can before Wordyphus weakens and the
          boulder rolls down. <br></br>
        </h2>

        <div className="pl-24 pr-24 flex">
          <button
            className="w-36 mr-2 h-12 text-1xl font-bold border-white"
            onClick={() => {
              if (sispyhusSpeed === "sisyphus-animation-slow") {
                setSisyphusSpeed("sisyphus-animation-fast");
              } else {
                setSisyphusSpeed("sisyphus-animation-slow");
              }
            }}
          >
            {sispyhusSpeed === "sisyphus-animation-slow" && "Fast Mode"}
            {sispyhusSpeed === "sisyphus-animation-fast" && "Slow Mode"}
          </button>
          <button
            className="w-36 h-12 text-1xl font-bold border-white"
            style={{}}
            onClick={() => {setPage("GameScreen")}}
          >
            Play
          </button>
          <button
            className="w-36 ml-2 h-12 text-1xl font-bold border-white"
            style={{}}
            onClick={() => handleOpen()}  
          >
            More Info
          </button>
        </div>
      </div>
    </div>

    </>
  );
}
