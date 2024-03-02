import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [isRunning, setIsRunning] = useState(false);
  const [time, setTime] = useState(0);

  const handleStartStop = () => {
    setIsRunning((prev) => !prev);
  }

  useEffect(() => {
    let id;
    if(isRunning){
        id = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(id)
  }, [isRunning]);

  const formatTime = (time) => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  }
  
  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
  }

  return (
    <div className="App">
      <div>
        <h1>Stopwach</h1>
      </div>
      <div>
        <p>Time: {formatTime(time)}</p>
        <button className='startButton' onClick={handleStartStop}>{isRunning ? "Stop" : "Start"}</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
