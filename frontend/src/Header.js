import React from 'react';
import styled from 'styled-components';


import Signout from './Signout';

const NavBar = styled.div`
    width: 100%;
    /* background-color: ${props=>props.theme.white}; */
`;

const Header = ({me}) => {
    return (
        <NavBar>
            {/* {me && <><span>{me.name}</span><Signout/></>} */}
        </NavBar>
    );
};

export default Header;