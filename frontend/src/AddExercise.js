import React, { Component } from 'react';
import { FaDumbbell, FaRegClock, FaArrowLeft } from 'react-icons/fa';
import { 
    Entry, 
    Input, 
    TextArea, 
    NumericInput, 
    FormLine, 
    Icon, 
    NumberIcon, 
    Button, 
    CancelButton,
    Label,
    CheckboxLabel,
    Form, 
    SubmitLine
} from './styles/FormStyles';
import AutoFocusingInput from './AutoFocusingInput';

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
                            placeholder="Exercise"
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
                            <Button type="submit">
                                Add Exercise
                            </Button>
                            <CancelButton type="button" onClick={this.props.cancel}>
                                Cancel
                            </CancelButton>
                        </SubmitLine>
                    </fieldset>
                </Form>


            </Entry>
        );
    }
}

export default AddExercise;