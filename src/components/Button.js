import styled from 'styled-components';

const StyledComp = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    margin: 5px;
    width: 100px;
    background-color: #EEE;

    &:hover {
        background-color: #CCC;
        cursor: pointer;
    }
`

const Button = ({value, onClick}) => {
    return (
        <StyledComp onClick={onClick}>
            {value}
        </StyledComp>
    );
}

export default Button;