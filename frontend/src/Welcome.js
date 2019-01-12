import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Cta = styled.div`
    border: 0;
    background: none;
    font-family: ${props => props.theme.headerFont};
    font-size: 2rem;
    margin: 0 auto;
    text-align: center;
    display: block;

    a {
        color: ${props => props.theme.lightGreen};
        :hover {
            cursor: pointer;
            color: ${props => props.theme.lighterGreen};
        }
    }
`;

const Welcome = ({me}) => {
    return (
        <Cta>
            Welcome! <Link to="/me">Log In!</Link>
        </Cta>
    );
};

export default Welcome;