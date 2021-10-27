import { useState, useEffect } from 'react';
import './App.css';

import { differenceInSeconds } from 'date-fns';
import { getTotalTime, sortByDate, getDate } from './functions';

import TimeList from './components/TimeList';
import Button from './components/Button';
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

	useEffect(() => {
		retrieveFromLocal();
	}, []);

	const saveToLocal = (startTime, times, totalTime, goalTime) => {
		let object = {startTime, times, totalTime, goalTime};
		localStorage.setItem('time-tracker-state', JSON.stringify(object));
	}

	const retrieveFromLocal = () => {
		let object = localStorage.getItem('time-tracker-state');
		if (object !== null) object = JSON.parse(object);
		else object = {startTime: 0, times: [], totalTime: 0};

		//convert time strings back into time objects
		let newTimes = object.times.map(timeObj => {
			return {
				startTime: new Date(timeObj.startTime), 
				endTime: new Date(timeObj.endTime)
			};
		});

		//convert time string to time object if not 0
		let newStartTime = object.startTime === 0 ? 0 : new Date(object.startTime);

		//calculate total. Could just as easily restore total value from storage, 
		//but this allows me to change the local storage values and still get a correct total
		let newTotal = getTotalTime(newTimes, true);

		//restore state
		setTimes(newTimes);
		setStartTime(newStartTime);
		setTotalTime(newTotal);
		startInterval(newStartTime);
		getTodaysTime(newTimes);
		setGoalTime(object.goalTime);
	}

	const startInterval = (start) => {
		if (start === 0) return;
		let a = setInterval(() => {
			let stopTime = new Date();
			let diff = differenceInSeconds(stopTime, start);
			setTimer(diff);
		}, 100);
		setIntervalVal(a);
	}

	const getTodaysTime = (times) => {
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
		saveToLocal(start, times, totalTime, goalTime);

		startInterval(start);
	}

	const clearValues = () => {
		setStartTime(0);
		clearInterval(intervalVal);
		setIntervalVal(null);
		setTimer(0);
		setTodaysTime(0);
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
		saveToLocal(0, newTimes, newTotal, goalTime);
		getTodaysTime(newTimes);
	}

	const onClickReset = () => {
		setTimes([]);
		setTotalTime(0);
		clearValues();
		saveToLocal(0, [], 0, goalTime);
	}

	const onChangeGoal = (s) => {
		setGoalTime(s);
		saveToLocal(startTime, times, totalTime, s);
	}

	let remainingTime = goalTime - totalTime - timer;
	if (remainingTime < 0) remainingTime = 0;

	let marginTop = todaysTime === totalTime ? 0 : -20;

	return (
		<div className="App">
		<Header goal={goalTime} onChangeGoal={onChangeGoal}/>
		<div>
			<Time seconds={totalTime+timer} heading='Total Time'/>
			{ todaysTime === totalTime ? null : <Time seconds={todaysTime+timer} heading="Today's Time"/> }
			<Time seconds={timer} heading='Current Time' active={startTime !== 0} style={{marginTop}}/>
		</div>
		{ goalTime > 0 ? 
			<div style={{marginTop}}>
				<Time seconds={goalTime} heading='Goal' active={remainingTime === 0}/>
				<Time seconds={remainingTime} heading='Remaining' active={remainingTime === 0}/>
			</div> 
			: null }
		<div>
			<Button value='Start' onClick={onClickStart}/>
			<Button value='Stop' onClick={onClickStop}/>
			<Button value='Reset' onClick={onClickReset}/>
		</div>
		<div>
			<TimeList times={times}/>
		</div>
		</div>
	);
}

export default App;
