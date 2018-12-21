import React from 'react';
import styled from 'styled-components';

import Exercise from './Exercise';
import AddExercise from './AddExercise';


const AddExerciseButton = styled.button`
    border: 0;
    background: none;
    font-family: ${props=>props.theme.headerFont};
    color: ${props=>props.theme.lightGreen};
    font-size: 2rem;
    :hover {
        cursor: pointer;
        color: ${props=>props.theme.lighterGreen};
    }
    margin: 0 auto;
    text-align: center;
    display: block;
    font-weight: 600;
`;

class Playground extends React.Component {
    state = {
        exercises: [
            {
                name: "Back Squat",
                muscleGroup: "Legs",
                weight: 185,
                sets: 3,
                reps: 8,
                description: "Lift heavy brah"
            }
        ],
        addingExercise: true
    }

    saveExercise = (exercise) => {
        this.setState(previousState=>({
            exercises: [...previousState.exercises, exercise]
        }));
        console.log(exercise);
        this.toggleAddingExercise();
    }

    toggleAddingExercise = () => {
        this.setState({addingExercise: !this.state.addingExercise});
    }

    render() {
        return (
            <div>
                {this.state.exercises.map(exercise=>(
                    <Exercise key={exercise.name} {...exercise} />
                ))}
                <AddExerciseButton onClick={this.toggleAddingExercise}>{this.state.addingExercise ? 'Cancel' : 'Add Exercise'}</AddExerciseButton>
                {this.state.addingExercise && <AddExercise save={this.saveExercise} cancel={this.toggleAddingExercise}/>}
            </div>
        );
    }
}

export default Playground;