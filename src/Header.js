import React from 'react';
import styled from 'styled-components';

const NavBar = styled.div`
    width: 100%;
    height: 75px;
    background-color: ${props=>props.theme.white};
`;

const Header = () => {
    return (
        <NavBar>
            <h1>Lifestyles</h1>
        </NavBar>
    );
};

export default Header;