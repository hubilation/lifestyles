import React from 'react';
import styled from 'styled-components';

import ExerciseSet from './ExerciseSet';

const ExerciseContainer = styled.div`
    width: 100%;
    background-color: ${props => props.theme.white};
    font-family: ${props => props.theme.headerFont};
    border-left: 2px solid ${props => props.active ? props.theme.lightGreen : props.theme.offGrey};
    border-bottom: 1px solid ${props => props.theme.offWhite};
    font-size: ${props => props.active ? '5rem' : '3rem'}; 
`;

const ExerciseHeader = styled.div`
    padding: 10px 0 10px 10px;
    font-size: 100%;
`;

const Sets = styled.ul`
    font-size: 2rem;
    background-color: ${props => props.theme.lighterOffWhite};
    display: grid;
    grid-auto-rows: 1fr;
`;

const SessionExercise = ({exercise, sets}) => {
    return (
        <ExerciseContainer>
            <ExerciseHeader>
                {exercise.name}
            </ExerciseHeader>
            <Sets>
                {sets.map(set=>
                    <ExerciseSet />
                )}
            </Sets>
        </ExerciseContainer>
    );
};

export default SessionExercise;