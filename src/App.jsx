import { useState } from 'react'
import './App.css'
import sisyphusImage from './assets/sisyphus.png'

function App() {
  const [sispyhusSpeed, setSisyphusSpeed] = useState("sisyphus-animation-slow")

  return (
    <>
      <img class={sispyhusSpeed} src={sisyphusImage} alt="one must imagine sisyphus happy"/>

      <div className='shadow-lg rounded-lg h-fit p-72' style={{background: "#2e3546"}}>
        <h1 className="text-5xl m-8 font-bold">
          Wordyphus
        </h1>

        <h2 className="text-1xl mb-8">
        Guess as many words as you can before Wordyphus weakens and the boulder rolls down. <br></br>
        </h2>

      <div className='pl-24 pr-24 flex'>
      <button className='w-36 mr-2 h-12 text-1xl font-bold border-white'
        onClick={()=>{
          if(sispyhusSpeed === "sisyphus-animation-slow" ){
            setSisyphusSpeed("sisyphus-animation-fast")
          } else {
            setSisyphusSpeed("sisyphus-animation-slow")
          }
        }}>
        {(sispyhusSpeed === "sisyphus-animation-slow") && "Fast Mode"}
        {(sispyhusSpeed === "sisyphus-animation-fast") && "Slow Mode"}
      </button>
      <button className='w-36 h-12 text-1xl font-bold border-white' style={{}}>
        Play
      </button>
      <button className='w-36 ml-2 h-12 text-1xl font-bold border-white' style={{}}>
        Info
      </button>
      </div>

      </div>

    </>

  )
}

export default App
