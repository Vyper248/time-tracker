import styled from 'styled-components';
import { intervalToDuration } from 'date-fns';

const StyledComp = styled.div`
    border: 3px solid gray;
    border-radius: 50%;
    width: 150px;
    height: 150px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 5px;
    transition: 0.5s;
    ${props => props.active ? 'border-color: green;' : ''}

    & > div:first-child {
        font-weight: bold;
    }
`

const Time = ({seconds, heading, active=false}) => {
    //add 0 to numbers less than 10
    const a0 = (t) => t < 10 ? '0'+t : t;
    
    const formatSeconds = (s) => {
        let totalTimeObj = intervalToDuration({start: 0, end: s*1000});
        return `${a0(totalTimeObj.hours)}:${a0(totalTimeObj.minutes)}:${a0(totalTimeObj.seconds)}`;
    }

    return (
        <StyledComp active={active}>
            <div>{ heading }</div>
            <div>{ formatSeconds(seconds) }</div>
        </StyledComp>
    );
}

export default Time;