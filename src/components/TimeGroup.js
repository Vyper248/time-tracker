import { useState } from 'react';
import styled from 'styled-components';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { getTotalTime } from '../functions';

import TimesDisplay from './TimesDisplay';

const StyledComp = styled.div`
    & > div:first-child {
        display: grid;
        margin: auto;
        grid-template-columns: 30px auto 30px;
        width: 315px;

        & > h3 {
            margin-bottom: 10px;
        }

        & > svg {
            float: right;
            font-size: 1.7em;
            position: relative;
            top: 15px;
            color: #666;

            :hover {
                cursor: pointer;
                color: #333;
            }
        }
    }
`

const TimeGroup = ({date, timeObjs, ...rest}) => {
    const [open, setOpen] = useState(false);

    let totalTime = getTotalTime(timeObjs);

    const openTimes = () => setOpen(true);
    const closeTimes = () => setOpen(false);

    return (
        <StyledComp>
            <div>
                <span></span>
                <h3>{date}</h3>
                { open ? <MdExpandLess onClick={closeTimes}/> : <MdExpandMore onClick={openTimes}/> }
            </div>
            { open ? timeObjs.map(obj => <TimesDisplay key={obj.startTime} obj={obj} {...rest}/>) : null }
            <div>Daily Total: {totalTime}</div>
        </StyledComp>
    );
}

export default TimeGroup;