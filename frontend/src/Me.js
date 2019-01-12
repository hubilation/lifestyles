import React from 'react';
import styled from 'styled-components';

import {FiArrowRightCircle} from 'react-icons/fi';

const Container = styled.div`

`;

const WorkOutHero = styled.div`
    font-family: ${props=>props.theme.headerFont};
    font-size: 4rem;
    max-width: 400px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    .icon {
        color: ${props=>props.theme.lightGreen};
    }
`;

const Me = () => {
    return (
        <WorkOutHero>
            <FiArrowRightCircle class="icon"/> Work Out!
        </WorkOutHero>
    );
};

export default Me;