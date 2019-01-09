import React from 'react';
import styled from 'styled-components';
import Spinner from './styles/Spinner';

const Container = styled.div`
    height: 100%;
    min-height: 100%;
    display: flex;
    align-items: stretch;
    background-color: ${props => props.theme.lightGreen};
    justify-content: center;
`;

const LoadingBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props=>props.theme.white};
    font-family: ${props=>props.theme.headerFont};
    font-size: 2rem;
    text-align: center;
`;

const Loading = () => {
    return (
        <Container>
            <LoadingBlock>
                <Spinner/>
                Loading
            </LoadingBlock>
        </Container>
    );
};

export default Loading;