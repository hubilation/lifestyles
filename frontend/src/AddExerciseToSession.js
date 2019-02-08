import React from 'react';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
    width: 100%;
    margin: 0;
    display: grid;
    background-color: ${props => props.theme.greyGreen};
    font-family: ${props => props.theme.headerFont};
    border-left: 2px solid ${props => props.theme.lightGrey};
    grid-template-columns: 30px 1fr;
    grid-template-rows: 1fr;
    align-items: center;
    .icon {
        color: ${props => props.theme.grey};
        font-size: 2rem;
        justify-self: center;
    }
`;

const Header = styled.div`
    font-size: 4rem;
    padding: 10px 0 10px 10px;
    grid-column: 1/-1;
`;

const SearchInput = styled.input`
    font-size: 2rem;
    font-family: ${props => props.theme.bodyFont};
    border-radius: 4px;
    border: 1px solid ${props => props.theme.lightGrey};
    padding: 4px;
    width: 97%;
    ::placeholder {
        color: ${props => props.theme.lightGrey};
    }
`;

const SearchResults = styled.ul`
    margin-top: 5px;
    font-size: 2.5rem;
    width: 100%;
    list-style: none;
    padding-bottom: 1rem;
    display: grid;
    grid-column: 1/-1;
    grid-row: 3/span 1;
    grid-template-columns: 30px 1fr;
    justify-content: left;
`;

const ExerciseResult = styled.li`
    width: 90%;
    padding: 10px 0 10px 10px;
    box-shadow: 0 1px 2px 0 rgba(0,50,0,0.2);
    background-color: ${props=>props.theme.lighterOffWhite};
    border-radius: 4px;
    margin-bottom: 1rem;
    grid-column: 2/3;
`;

const AddExerciseToSession = () => {
    return (
        <Container>
            <Header>
                Add Exercise
            </Header>
            <FaSearch class="icon" />
            <SearchInput type="text" placeholder="Search!" />
            <SearchResults>
                <ExerciseResult>
                    Back Squat
                </ExerciseResult>
                <ExerciseResult>
                    Front Squat
                </ExerciseResult>
                <ExerciseResult>
                    Pistol Squat
                </ExerciseResult>
            </SearchResults>
        </Container>
    );
};

export default AddExerciseToSession;