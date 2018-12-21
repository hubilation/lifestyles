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
    min-height: 2.5rem;
    margin-top: 2px;
`;

const SubmitLine = styled(FormLine)`
    justify-content: space-between;
`;

const Icon = styled.div`
    position: relative;
    top: 2px;
    margin-right: 5px;
    min-width: 21px;
    text-align: center;
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

const Label = styled.label`
        display: flex;
        width: 50%;
        align-items: center; 
        
`;

const CheckboxLabel = styled(Label)`
    input {
        min-width: 21px;
    }
    .checkbox-label {
            font-weight: 600;
            margin-left: 5px;
    }
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
        isSplit: false
    }
    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = (type === 'number' && value) ? parseFloat(value) : value;

        this.setState({ [name]: val });
    }
    toggleCheckbox = (e) => {
        const {name} = e.target;
        this.setState({[name]: !this.state[name]});
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
                        <AutoFocusingInput
                            isTitle
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
                            <CheckboxLabel>
                                <input type="checkbox"
                                    id="isSplit"
                                    name="isSplit"
                                    value={this.state.isSplit}
                                    onChange={this.toggleCheckbox}
                                    checked={this.state.isSplit}
                                />
                                <span className="checkbox-label">Split</span> 
                            </CheckboxLabel>
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
                                <Label>
                                    <NumberIcon>
                                        💪
                                    </NumberIcon>
                                    <NumericInput
                                        type="number"
                                        id="reps"
                                        name="reps"
                                        placeholder="Reps"
                                        value={this.state.reps}
                                        onChange={this.handleChange}
                                    />
                                </Label>
                                <Label>
                                    <Icon>
                                        <FaRegClock />
                                    </Icon>
                                    <NumericInput
                                        type="number"
                                        id="duration"
                                        name="duration"
                                        placeholder="Duration"
                                        value={this.state.duration}
                                        onChange={this.handleChange}
                                    />

                                </Label>

                        </FormLine>
                        <FormLine>
                            <TextArea
                                placeholder="Form"
                                id="description"
                                name="description"
                                value={this.state.description}
                                onChange={this.handleChange}
                            >
                            </TextArea>
                        </FormLine>
                        <SubmitLine>
                            
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