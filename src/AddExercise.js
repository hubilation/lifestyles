import React, { Component } from 'react';
import styled from 'styled-components';
import { FaDumbbell, FaRegClock, FaArrowLeft } from 'react-icons/fa';

import AutoFocusingInput from './AutoFocusingInput';

const Entry = styled.div`
    background-color: ${props => props.theme.white};
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: ${props => props.theme.bs};
    border-left: 4px solid ${props => props.theme.lightGreen};
    margin: 20px 0;
`;

const Input = styled.input`
    margin-bottom: 5px;
    border: 0;
    background-color: ${props => props.theme.white};
    width: 50%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
`;

const TextArea = styled.textarea`
    margin-top: 5px;
    border: 0;
    background-color: ${props => props.theme.white};
    width: 70%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
    resize: none;
`;

const TitleInput = styled(Input)`
    font-size: 5rem;
    font-family: ${props => props.theme.headerFont};
    font-weight: 600;
    width: 100%;
    ::placeholder{
        font-weight: 400;
    }
`;

const NumericInput = styled(Input)`
    margin-bottom: 0;
`;

const FormLine = styled.div`
    display:flex;
    align-items: center;
`;

const SubmitLine = styled(FormLine)`
    justify-content: space-between;
`;

const Icon = styled.div`
    position: relative;
    top: 2px;
    margin-right: 5px;
`;

const NumberIcon = styled(Icon)`
    font-weight: 600;
    color: ${props => props.theme.black};
    position: inherit;
    top: 5px;
`;

const Button = styled.button`
    font-family: ${props => props.theme.headerFont};
    background-color: ${props => props.theme.lightGreen};
    font-size: 2rem;
    padding: 5px 10px;
    border-radius: 4px;
    color: ${props => props.theme.grey};
    box-shadow: 0 1px 4px 0 rgba(0,50,0,0.4);
    cursor: pointer;
    :hover {
        background-color: ${props => props.theme.lighterGreen};
    }
    :disabled{
        background-color: ${props => props.theme.greyGreen};
        color: ${props => props.theme.lightGrey};
    }
    :active {
        background-color: ${props => props.theme.lighterGreen};
        transform: scale(0.99);
        position: relative;
        top: 1px;
        box-shadow: 0 0px 4px 0 rgba(0,50,0,0.4);
    }
`;

const CheckButton = styled.div`
    font-family: ${props => props.theme.bodyFont};
    background-color: ${props => props.theme.lightGrey};
    padding: 2px 8px;
    margin-right: 5px;
    /* margin-bottom: 3px; */
    border-radius: 4px;
    color: ${props => props.theme.grey};
    font-weight: 600;
    display: flex;
    align-items: center;
    cursor: pointer;
    :hover {
        background-color: ${props => props.theme.greyGreen}
    }
`;

const BackButton = styled(CheckButton)`
    padding: 2px 0;
`;

const Label = styled.label`
        display: flex;
        width: 50%;
        padding: 0px 8px;
        align-items: center; 
`;

const WideLabel = styled(Label)`
    width: 100%;
`;

const Form = styled.form`
`;

class AddExercise extends Component {
    state = {
        name: '',
        muscleGroup: '',
        weight: '',
        sets: '',
        reps: '',
        duration: '',
        description: '',
        isReps: false,
        isDuration: false
    }
    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = (type === 'number' && value) ? parseFloat(value) : value;

        this.setState({ [name]: val });
    }

    toggleType = (bool, other) => {
        this.setState({ [bool]: !this.state[bool] });
        if (this.state[other]) {
            this.setState({ [other]: !this.state[other] });
        }
    }
    render() {
        return (
            <Entry>
                <Form onSubmit={e => {
                    e.preventDefault();
                    this.props.save({ ...this.state });
                }}>
                    <fieldset>
                        <TitleInput
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name of Exercise"
                            required
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <FormLine>
                            <Input
                                type="text"
                                id="muscleGroup"
                                name="muscleGroup"
                                placeholder="Muscle Group"
                                value={this.state.muscleGroup}
                                onChange={this.handleChange}
                            />
                        </FormLine>
                        <FormLine>
                            <Label>
                                <Icon>
                                    <FaDumbbell />
                                </Icon>
                                <NumericInput
                                    type="number"
                                    id="weight"
                                    name="weight"
                                    placeholder="Weight"
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                />
                            </Label>
                            <Label>
                                <NumberIcon>
                                    #
                                </NumberIcon>
                                <NumericInput
                                    type="number"
                                    id="sets"
                                    name="sets"
                                    placeholder="Sets"
                                    value={this.state.sets}
                                    onChange={this.handleChange}
                                />
                            </Label>
                        </FormLine>
                        <FormLine>
                            {this.state.isReps &&
                                <WideLabel>
                                    <BackButton onClick={() => this.setState({ isReps: false, isDuration: false, reps: '', duration: '' })}>
                                        <FaArrowLeft />
                                    </BackButton>
                                    <NumberIcon>
                                        💪
                                    </NumberIcon>
                                    <AutoFocusingInput
                                        type="number"
                                        id="reps"
                                        name="reps"
                                        placeholder="Reps"
                                        value={this.state.reps}
                                        onChange={this.handleChange}
                                    />
                                    
                                </WideLabel>
                            }
                            {this.state.isDuration &&
                                <WideLabel>
                                    <BackButton onClick={() => this.setState({ isReps: false, isDuration: false, reps: '', duration: '' })}>
                                        <FaArrowLeft />
                                    </BackButton>
                                    <Icon>
                                        <FaRegClock />
                                    </Icon>
                                    <AutoFocusingInput
                                        type="number"
                                        id="duration"
                                        name="duration"
                                        placeholder="Duration"
                                        value={this.state.duration}
                                        onChange={this.handleChange}
                                    />
                                    
                                </WideLabel>
                            }
                            {!this.state.isReps && !this.state.isDuration &&
                                <>
                                    <CheckButton onClick={() => this.toggleType('isReps', 'isDuration')}>
                                        <NumberIcon>
                                            💪
                                    </NumberIcon>
                                        <span>Reps</span>
                                    </CheckButton>
                                    <CheckButton onClick={() => this.toggleType('isDuration', 'isReps')}>
                                        <Icon>
                                            <FaRegClock />
                                        </Icon>
                                        <span>Duration</span>
                                    </CheckButton>
                                </>
                            }
                        </FormLine>
                        <SubmitLine>
                            <TextArea
                                placeholder="Form"
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            >
                            </TextArea>
                            <Button>
                                Add Exercise
                            </Button>

                        </SubmitLine>
                    </fieldset>
                </Form>


            </Entry>
        );
    }
}

export default AddExercise;