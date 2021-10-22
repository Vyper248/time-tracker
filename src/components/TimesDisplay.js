import styled from 'styled-components';
import { format, differenceInSeconds } from 'date-fns';

import { formatSeconds } from '../functions';

const StyledComp = styled.div`
    display: flex;
    width: 330px;
    margin: auto;

    & > div:first-child {
        display: grid;
        grid-template-columns: 1fr 50px 1fr;
        border: 1px solid gray;
        border-radius: 5px 0px 0px 5px;
        width: 220px;
        margin: 5px auto;
        text-align: center;
        margin-right: 0px;
    }

    & > div:last-child {
        border: 1px solid gray;
        border-left: none;
        border-radius: 0px 5px 5px 0px;
        margin: 5px auto;
        margin-left: 0px;
    }

    & > div > div {
        margin: 5px;
        padding: 5px;
    }

`

const TimesDisplay = ({obj}) => {
    let timeFormat = 'HH:mm:ss';
    let seconds = differenceInSeconds(obj.endTime, obj.startTime);
    let totalTime = formatSeconds(seconds);

    return (
        <StyledComp>
            <div>
                <div>{format(obj.startTime, timeFormat)}</div>
                <div>To</div>
                <div>{format(obj.endTime, timeFormat)}</div>
            </div>
            <div>
                <div>{totalTime}</div>
            </div>
        </StyledComp>
    );
}

export default TimesDisplay;