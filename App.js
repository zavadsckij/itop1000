import './App.css';
import {useState, useEffect} from 'react'



function App() {
 let [timerMode, setTimerMode] = useState(false)
  let [seconds, setSeconds] = useState(0)
  let [timeout, setTimeout] = useState(0)
  let handleClick = () =>{
    let interval = null
    if (timeout === 0){
      interval = setInterval(()=>{
        setTimeout(prev => prev+10)
      }, 10)
    }else if(timeout <= 300){
      setTimerMode(false)
      clearInterval(interval)
    }else{
      setTimeout(0)
      clearInterval(interval)
    }
  }

  useEffect(()=>{
    let interval = null;
    if(timerMode){
       interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    }else{
      clearInterval(interval)
    }
    
    return () => clearInterval(interval)
  }, [timerMode])

  return (
    <div className="App">
    <div>
      <span>{('0' + Math.floor((seconds/3600) % 3600)).slice(-2)}</span>{` : `}
      <span>{('0' +  Math.floor((seconds/60) % 60)).slice(-2)}</span>{` : `}
      <span>{('0' + ((seconds) % 60)).slice(-2)}</span>
    </div>
    <div>
     {!timerMode && ( <button onClick = {()=>{setTimerMode(true)}}>start</button>)}
      {timerMode && (<>
         <button onClick = {()=>{setTimerMode(false); setSeconds(0)}}>stop</button>
        <button onClick = {()=>{handleClick()}}>wait</button>
        <button onClick = {()=>{setSeconds(0) ; setTimerMode(true)}}>reset</button>
        </>
      )}
    </div>
      
     
    </div>
  );
}

export default App;
