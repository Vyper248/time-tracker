import { useState, useEffect } from 'react';
import './App.css';

import { differenceInSeconds } from 'date-fns';
import { getTotalTime, sortByDate, getDate, retrieveFromLocal, saveToLocal } from './functions';

import TimeList from './components/TimeList';
import Button from './components/Button';
import ConfirmButtonPopup from './components/ConfirmButtonPopup';
import Time from './components/Time';
import Header from './components/Header';

function App() {
	const [startTime, setStartTime] = useState(0);
	const [times, setTimes] = useState([]);
	const [totalTime, setTotalTime] = useState(0);
	const [todaysTime, setTodaysTime] = useState(0);
	const [timer, setTimer] = useState(0);
	const [intervalVal, setIntervalVal] = useState(null);
	const [goalTime, setGoalTime] = useState(0);
	const [goalDaily, setGoalDaily] = useState(false);

	useEffect(() => {
		let { startTime, times, totalTime, goalTime, goalDaily } = retrieveFromLocal();
		setStartTime(startTime);
		setTimes(times);
		setTotalTime(totalTime);
		setGoalTime(goalTime);
		setGoalDaily(goalDaily);
		startInterval(startTime);
		updateTodaysTime(times);
	}, []);

	//if a time has been edited, then adjust the total time
	useEffect(() => {
		let totalTime = getTotalTime(times, true);
		setTotalTime(totalTime);
		updateTodaysTime(times);
	}, [times]);

	const startInterval = (start) => {
		if (start === 0) return;
		let a = setInterval(() => {
			let stopTime = new Date();
			let diff = differenceInSeconds(stopTime, start);
			setTimer(diff);
		}, 100);
		setIntervalVal(a);
		window.document.title = 'Time Tracker - Active';
	}

	const updateTodaysTime = (times) => {
		let datesObj = sortByDate(times);
		let today = getDate(new Date());
		let todayTimes = datesObj[today];

		if (todayTimes !== undefined) {
			let time = getTotalTime(todayTimes, true);
			setTodaysTime(time);
		}
	}

	const onClickStart = () => {
		if (startTime !== 0) return;

		let start = new Date();
		setStartTime(start);
		saveToLocal(start, times, totalTime, goalTime, goalDaily);

		startInterval(start);
	}

	const clearValues = () => {
		setStartTime(0);
		clearInterval(intervalVal);
		window.document.title = 'Time Tracker';
		setIntervalVal(null);
		setTimer(0);
	}

	const onClickStop = () => {
		if (startTime === 0) return;

		let endTime = new Date();
		let arrObj = {startTime, endTime};
		let newTimes = [...times, arrObj];
		setTimes(newTimes);

		let newTotal = getTotalTime(newTimes, true);
		setTotalTime(newTotal);
		clearValues();
		saveToLocal(0, newTimes, 0, goalTime, goalDaily);
		updateTodaysTime(newTimes);
	}

	const onClickReset = () => {
		setTimes([]);
		setTotalTime(0);
		clearValues();
		setTodaysTime(0);
		saveToLocal(0, [], 0, goalTime, goalDaily);
	}

	const onChangeGoal = (s, daily) => {
		setGoalTime(s);
		setGoalDaily(daily);
		saveToLocal(startTime, times, totalTime, s, daily);
	}

	let remainingTime = goalTime - totalTime - timer;
	if (goalDaily) remainingTime = goalTime - todaysTime - timer;
	if (remainingTime < 0) remainingTime = 0;

	let marginTop = todaysTime === totalTime ? 0 : -20;

	return (
		<div className="App">
		<Header goal={goalTime} onChangeGoal={onChangeGoal} goalDaily={goalDaily}/>
		<div>
			<Time seconds={totalTime+timer} heading='Total Time'/>
			{ todaysTime === totalTime ? null : <Time seconds={todaysTime+timer} heading="Today's Time"/> }
			<Time seconds={timer} heading='Current Time' active={startTime !== 0} style={{marginTop}}/>
		</div>
		{ goalTime > 0 ? 
			<div style={{marginTop}}>
				<Time seconds={goalTime} heading={goalDaily ? 'Daily Goal' : 'Goal'} active={remainingTime === 0}/>
				<Time seconds={remainingTime} heading='Remaining' active={remainingTime === 0}/>
			</div> 
			: null }
		<div>
			<Button label='Start' onClick={onClickStart}/>
			<Button label='Stop' onClick={onClickStop}/>
			<ConfirmButtonPopup label='Reset' onClick={onClickReset} width='100px'/>
		</div>
		<div>
			<TimeList times={times} setTimes={setTimes}/>
		</div>
		</div>
	);
}

export default App;
