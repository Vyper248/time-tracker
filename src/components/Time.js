import styled from 'styled-components';

import { formatSeconds } from '../functions';

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
    return (
        <StyledComp active={active}>
            <div>{ heading }</div>
            <div>{ formatSeconds(seconds) }</div>
        </StyledComp>
    );
}

export default Time;