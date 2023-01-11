import { useState } from 'react';
import styled from 'styled-components';
import { format, differenceInSeconds } from 'date-fns';
import { MdSettings } from 'react-icons/md';

import { formatSeconds, retrieveFromLocal, saveToLocal } from '../functions';

const StyledComp = styled.div`
    display: flex;
    width: 430px;
    margin: auto;

    & > div {
        border: 1px solid gray;
        border-left: none;
        margin: 5px auto;
        height: 40px;
        padding-left: 5px;
        padding-right: 5px;

        & > div {
            padding-top: 5px;
            padding-bottom: 5px;
            margin: 0px;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    & > div.times {
        border-left: 1px solid gray;
        display: grid;
        grid-template-columns: 1fr 30px 1fr;
        border-radius: 5px 0px 0px 5px;
        width: 300px;
        text-align: center;
        margin-right: 0px;

        & input {
            border: 1px solid gray;
            border-radius: 5px;
            height: 29px;
            width: 110px;
        }
    }

    & > div.totalTime {
        width: 120px;
    }

    & > div.edit {
        border-left: none;
        border-radius: 0px 5px 5px 0px;
        margin-left: 0px;
        width: 70px;

        & > div > svg {
            font-size: 1.3em;
        }

        &:hover {
            background-color: lightgray;
            cursor: pointer;
        }
    }
`

const ErrorComp = styled.div`
    color: red;
    margin-top: -5px;
    margin-bottom: 5px;
`;

const TimesDisplay = ({obj, times, setTimes}) => {
    const [edit, setEdit] = useState(false);
    const [firstTime, setFirstTime] = useState(obj.startTime.toLocaleTimeString());
    const [secondTime, setSecondTime] = useState(obj.endTime.toLocaleTimeString());
    const [error, setError] = useState('');

    let timeFormat = 'HH:mm:ss';
    let seconds = differenceInSeconds(obj.endTime, obj.startTime);
    let totalTime = formatSeconds(seconds);

    const getNewDate = (time, originalDate) => {
        let [hours, minutes, seconds] = time.split(':');
        if (!seconds) seconds = 0;
        if (!minutes) minutes = 0;
        if (!hours) hours = 0;

        const newDate = new Date(originalDate);
        newDate.setHours(hours);
        newDate.setMinutes(minutes);
        newDate.setSeconds(seconds);

        return newDate;
    }

    const updateLocalStorage = (newTimes) => {
        let { startTime, totalTime, goalTime, goalDaily } = retrieveFromLocal();
        saveToLocal(startTime, newTimes, totalTime, goalTime, goalDaily);
    }

    const onToggleEdit = () => {
        if (edit) {
            const firstDate = getNewDate(firstTime, obj.startTime);
            const secondDate = getNewDate(secondTime, obj.endTime);

            //make sure second time is after first time
            let difference = differenceInSeconds(secondDate, firstDate);
            if (difference < 1) {
                setError('Error: Second time should be later than the first time.');
                return;
            }

            let index = times.indexOf(obj);
            let newTimes = [...times];
            newTimes.splice(index, 1, {startTime: firstDate, endTime: secondDate});
            setTimes(newTimes);
            updateLocalStorage(newTimes);
            setEdit(false);
            setError('');
        } else {
            setEdit(true);
        }
    }

    const onChangeFirstTime = (e) => {
        const newTime = e.target.value;
        setFirstTime(newTime);
    }

    const onChangeSecondTime = (e) => {
        const newTime = e.target.value;
        setSecondTime(newTime);
    }

    return (
        <>
            <StyledComp>
                <div className='times'>
                    <div>
                        { edit 
                            ? <div><input type='time' value={firstTime} onChange={onChangeFirstTime} step='1'/></div>
                            : <div>{format(obj.startTime, timeFormat)}</div>
                        }
                    </div>
                    <div>To</div>
                    <div>
                        { edit 
                            ? <div><input type='time' value={secondTime} onChange={onChangeSecondTime} step='1'/></div>
                            : <div>{format(obj.endTime, timeFormat)}</div>
                        }
                    </div>
                </div>
                <div className='totalTime'>
                    <div>{totalTime}</div>
                </div>
                <div className='edit' onClick={onToggleEdit}>
                    <div>{edit ? 'Save' : <MdSettings/>}</div>
                </div>
            </StyledComp>
            { error.length > 0 ? <ErrorComp>{ error }</ErrorComp> : null }
        </>
    );
}

export default TimesDisplay;