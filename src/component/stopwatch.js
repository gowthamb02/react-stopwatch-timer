import { useState, useRef } from "react";
import './stopwatch.css'
function Stopwatch() {

  const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
  const [isStart, setIsStart] = useState(false);
  const intervalRef = useRef(null);
  const { ms, s, m } = time;

  const start = () => {
    if (intervalRef.current) return;
    run();
    setIsStart(true);
    intervalRef.current = setInterval(run, 10);
  }
  const stop = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsStart(false);
  }
  const reset = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null;
    setTime({ ms: 0, s: 0, m: 0 });
    setIsStart(false);
  }
  const run = () => {
    setTime((prev) => {
      let { ms, s, m } = prev;
      ms++
      if (ms === 99) {
        s++;
        ms = 0;
      }
      if (s === 60) {
        m++;
        s = 0;
      }

      return { ms, s, m }
    })
  }


  return (<div className="container">
    <div className="title">Stop Watch</div>
    <div className="time">
      <span>{m >= 10 ? m : "0" + m}</span>
      :
      <span>{s >= 10 ? s : "0" + s}</span>
      :
      <span>{ms >= 10 ? ms : "0" + ms}</span>
    </div>

    <div className="btn">
      {(!isStart) ? (<button className="start-btn" onClick={start}>START</button>) : (<button className="stop-btn" onClick={stop}>STOP</button>)}
      <button className="reset-btn" onClick={reset}>RESET</button>
    </div>

  </div>
  )
}

export default Stopwatch;














