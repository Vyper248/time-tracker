import styled from 'styled-components';

const StyledComp = styled.div`
    border: 1px solid gray;
    border-radius: 5px;
    display: inline-block;
    padding: 5px;
    margin: ${props => props.margin};
    width: ${props => props.width};
    background-color: #EEE;
    text-align: center;

    &:hover {
        background-color: #CCC;
        cursor: pointer;
    }
`

const Button = ({value, onClick, width='100px', margin='5px'}) => {
    return (
        <StyledComp onClick={onClick} width={width} margin={margin}>
            {value}
        </StyledComp>
    );
}

export default Button;