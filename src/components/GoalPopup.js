import { useState } from 'react';
import styled from 'styled-components';

import { formatSeconds } from '../functions';
import Button from './Button';

const StyledComp = styled.div`
    position: absolute;
    border: 1px solid #666;
    width: 200px;
    margin: auto;
    top: calc(100% - 10px);
    left: -87px;
    background-color: white;
    border-radius: 10px;
    padding: 5px;

    & > div:first-child {
        position: absolute;
        border-left: 1px solid #666;
        border-top: 1px solid #666;
        width: 12px;
        height: 12px;
        transform: rotate(45deg) translate(-50%, -50%);
        top: 2px;
        left: calc(50% - 6px);
        background-color: white;
    }

    & input {
        width: 100%;
    }

    & td {
        padding: 5px;
    }

    & td:first-of-type {
        text-align: right;
    }

    @media screen and (max-width:520px) {
        left: -160px;

        & > div:first-child {
            left: calc(100% - 32px);
        }
    }
`

const GoalPopup = ({goal, onChangeGoal, onClose}) => {
    let goalTime = formatSeconds(goal);
    let parts = goalTime.split(':').map(time => parseInt(time));
    const [hours, setHours] = useState(parts[0]);
    const [minutes, setMinutes] = useState(parts[1]);

    const onChangeHours = (e) => {
        setHours(e.target.value);
    }

    const onChangeMinutes = (e) => {
        setMinutes(e.target.value);
    }

    const setNewGoal = () => {
        let seconds = 0;
        seconds += hours * 60 * 60;
        seconds += minutes * 60;
        onChangeGoal(seconds);
        onClose();
    }

    return (
        <StyledComp>
            <div></div>
            <h4 style={{margin: 5}}>Set Goal</h4>
            <table>
                <tbody>
                    <tr>
                        <td>Hours</td>
                        <td><input type='number' value={hours} onChange={onChangeHours}/></td>
                    </tr>
                    <tr>
                        <td>Minutes</td>
                        <td><input type='number' value={minutes} onChange={onChangeMinutes}/></td>
                    </tr>
                    <tr>
                        <td><Button value='Save' onClick={setNewGoal} margin='0px' width='80px'/></td>
                        <td><Button value='Cancel' onClick={onClose} margin='0px' width='80px'/></td>
                    </tr>
                </tbody>
            </table>
        </StyledComp>
    );
}

export default GoalPopup;