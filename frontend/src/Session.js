import React, { Component } from 'react';
import styled from 'styled-components';

import Exercise from './SessionExercise';

import AddExerciseToSession from './AddExerciseToSession';

const Container = styled.div`
    width: 100%;
    max-width: 500px;
`;


const SessionHeader = styled.div`
    width: 100%;
    padding: 10px 0 10px 10px;
    background-color: ${props => props.theme.white};
    font-family: ${props => props.theme.headerFont};
    border-bottom: 1px solid ${props => props.theme.offWhite};
`;

const SessionName = styled.div`
    font-size: 5rem;
`;

const SessionDate = styled.div`
    font-size: 2.5rem;
    color: ${props => props.theme.midGrey};
`;

const AddExerciseCta = styled.div`
    font-size: 3rem;
    font-family: ${props => props.theme.headerFont};
    text-align: center;
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
        margin-right: .5rem;
    }
    :hover {
        color: ${props=>props.theme.lightGreen};
        cursor: pointer;
    }
`;



class Session extends Component {
    render() {
        return (
            <Container>
                <SessionHeader>
                    <SessionName>
                        Monday Push
                    </SessionName>
                    <SessionDate>
                        January 11th, 2019
                    </SessionDate>
                </SessionHeader>

               
                {/* <AddExerciseCta>
                   <FaPlus class="icon"/> Add Exercise
                </AddExerciseCta> */}
                {/* <AddExerciseToSession/> */}
            </Container>
        );
    }
}

export default Session;