import { useState } from 'react';
import './App.css';

import { differenceInSeconds, format, intervalToDuration } from 'date-fns';

import TimesDisplay from './components/TimesDisplay';
import Button from './components/Button';
import Time from './components/Time';

function App() {
  const [startTime, setStartTime] = useState(0);
  const [times, setTimes] = useState([]);
  const [totalTime, setTotalTime] = useState(0);
  const [timer, setTimer] = useState(0);
  const [intervalVal, setIntervalVal] = useState(null);

  const onClickStart = () => {
	if (startTime !== 0) return;

    let start = new Date();
    setStartTime(start);

    let a = setInterval(() => {
      let stopTime = new Date();
      let diff = differenceInSeconds(stopTime, start);
      setTimer(diff);
    }, 1000);
    setIntervalVal(a);
  }

  const onClickStop = () => {
    if (startTime === 0) return;

    let endTime = new Date();
    let arrObj = {startTime, endTime};
    setTimes([...times, arrObj]);

    let diff = differenceInSeconds(endTime, startTime);
    setTotalTime(totalTime + diff);
    setStartTime(0);
    clearInterval(intervalVal);
    setIntervalVal(null);
	setTimer(0);
  }

  const onClickReset = () => {

  }

  //add 0 to numbers less than 10
  const a0 = (t) => t < 10 ? '0'+t : t;
  
  const formatSeconds = (s) => {
	let totalTimeObj = intervalToDuration({start: 0, end: s*1000});
	return `${a0(totalTimeObj.hours)}:${a0(totalTimeObj.minutes)}:${a0(totalTimeObj.seconds)}`;
  }

  return (
    <div className="App">
		<h2>Time Tracker</h2>
		<div>
			<Time seconds={totalTime} heading='Total Time'/>
			<Time seconds={timer} heading='Current Time' active={startTime !== 0}/>
		</div>
		<div>
			<Button value='Start' onClick={onClickStart}/>
			<Button value='Stop' onClick={onClickStop}/>
		</div>
		<div>
			{ times.map(obj => <TimesDisplay key={obj.startTime} obj={obj}/>) }
		</div>
    </div>
  );
}

export default App;
