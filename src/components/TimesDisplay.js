import styled from 'styled-components';
import { format } from 'date-fns';

const StyledComp = styled.div`
    display: grid;
    grid-template-columns: 1fr 50px 1fr;
    border: 1px solid gray;
    border-radius: 5px;
    width: 220px;
    margin: 5px auto;
    text-align: center;

    & > div {
        margin: 5px;
        padding: 5px;
    }
`

const TimesDisplay = ({obj}) => {
    let timeFormat = 'HH:mm:ss'

    return (
        <StyledComp>
            <div>{format(obj.startTime, timeFormat)}</div>
            <div>To</div>
			<div>{format(obj.endTime, timeFormat)}</div>
        </StyledComp>
    );
}

export default TimesDisplay;