import React from 'react';
import styled from 'styled-components';

import { FaSearch } from 'react-icons/fa';

const Container = styled.div`
    width: 100%;
    margin: 0;
    background-color: ${props => props.theme.white};
    font-family: ${props => props.theme.headerFont};
    border-left: 4px solid ${props => props.theme.lightOrange};
`;

const Header = styled.div`
    font-size: 4rem;
    padding: 10px 0 10px 10px;
`;

const SearchForOne = styled.div`
    width: 100%;
    font-size: 2rem;
    font-family: ${props => props.theme.bodyFont};
    padding: 10px 0 10px 10px;

`;

const SearchBar = styled.div`
    display: flex;
    align-items: center;
    width: 100%;

    .icon {
        color: ${props => props.theme.grey};
    }

    input {
        margin-left: 5px;
        border-radius: 4px;
        border: 1px solid ${props => props.theme.lightGrey};
        padding: 4px;
        width: 90%;
        ::placeholder {
            color: ${props => props.theme.lightGrey};
        }
        box-shadow: 1px 2px rgba(0,50,0,0.2);
    }
`;

const SearchResults = styled.ul`
    font-size: 2.5rem;
    width: 100%;
    padding-left: 3rem;
    padding-top: 1rem;
    list-style: none;
    padding-bottom: 1rem;
`;

const ExerciseResult = styled.li`
    width: 90%;
    padding: 10px 0 10px 10px;
    box-shadow: 0 1px 2px 0 rgba(0,50,0,0.2);
    background-color: ${props=>props.theme.lighterOffWhite};
    border-radius: 4px;
    margin-bottom: 1rem;
`;

const AddExerciseToSession = () => {
    return (
        <Container>
            <Header>
                Add Exercise
            </Header>
            <SearchForOne>
                <SearchBar>
                    <FaSearch class="icon" />
                    <input type="text" placeholder="Search!"></input>
                </SearchBar>

            </SearchForOne>
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