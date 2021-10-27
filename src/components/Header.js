import { useState } from 'react';
import styled from 'styled-components';
import { MdSettings } from 'react-icons/md';

import GoalPopup from './GoalPopup';

const StyledComp = styled.div`
    display: grid;
    grid-template-columns: 25px auto 25px;
    width: 315px;
    margin: auto;

    & > div {
        position: relative;
    }

    & > div > svg {
        float: right;
        font-size: 1.5em;
        position: relative;
        top: 22px;
        color: #666;

        :hover {
            cursor: pointer;
            color: #333;
        }
    }
`

const Header = ({...goalProps}) => {
    const [settingsOpen, setSettingsOpen] = useState(false);

    const onClickSettings = () => {
        setSettingsOpen(true);
    }

    const onCloseSettings = () => {
        setSettingsOpen(false);
    }

    return (
        <StyledComp>
            <span></span>
            <h2>Time Tracker</h2>
            <div>
                <MdSettings onClick={onClickSettings}/>
                { settingsOpen ? <GoalPopup {...goalProps} onClose={onCloseSettings}/> : null }
            </div>
        </StyledComp>
    );
}

export default Header;