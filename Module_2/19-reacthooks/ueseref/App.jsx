import { useEffect, useRef, useState } from "react";

import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const vdoRef = useRef(null);

  function handleClick() {
    //jab button p click karega to vdo pause hoga..
    console.log("1 isPlaying",isPlaying);
    
    setIsPlaying(!isPlaying);
    // setIsPlaying()

    if (!isPlaying) {
      vdoRef.current.play();
    } else{
      vdoRef.current.pause();
    }
    console.log("2 isPlaying",isPlaying);

  }
  
  // function handleClick2(){

  //   if(isPlaying){
  //     vdoRef.current.pause();
  //   }
  // }




  return (
    <>
      <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>

      {/* <button onClick={handleClick1} >Play</button>
      <button onClick={handleClick2} >Pause</button> */}

    {/* {isPlaying ?<button onClick={handleClick} >Pause</button> : <button onClick={handleClick}>Play</button> } */}
      <video
        width="500"
        height="500"
        ref={vdoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

export default App;
