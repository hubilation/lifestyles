import React from 'react';
import styled from 'styled-components';

import { FaDumbbell, FaRegClock, FaCheck, FaPen, FaRedo, FaSave } from 'react-icons/fa';
import AutoFocusingInput from './AutoFocusingInput';
import { Input, Form } from './styles/FormStyles';


const Entry = styled.div`
    display: flex;
    justify-content: flex-start;
    padding: ${props => props.active ? '8px' : '2px'} 10px;
    font-size: ${props => props.active ? '2.5rem' : 'inherit'};
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lightGrey};
    background-color: ${props => props.editing ? props.theme.veryLightYellow : props.complete ? props.theme.greyGreen : props.active ? props.theme.lighterOffWhite : props.theme.offWhite};
`;

const LogProperty = styled.div`
    display: flex;
    align-items: center;
    width: 40%;
    .icon {
        font-size: 75%;
    }
    .editable {
        margin-left: 5px;
        background-color: ${props => props.theme.veryLightYellow};
        margin-bottom: 0;
        border-radius: 4px;
    }
`;

const LogValue = styled.div`
    font-weight: 600;
    color: ${props => props.theme.grey};
    margin-left: 5px;
    .moniker {
        font-size: 75%; 
        color: ${props => props.theme.midGrey};
        margin-left: 2px;
    }
`;

const LogButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 20%;
    font-size: 75%;

    .reset {
        margin-right: 5px;
        color: ${props => props.complete ? props.theme.lightGreen : props.theme.midGrey};
        :hover {
            color: ${props => props.theme.lightGreen};
            cursor: pointer;
        }
    }

    .complete {
        margin-right: 5px;
        color: ${props => props.complete ? props.theme.lightGreen : props.theme.midGrey};
        :hover {
            color: ${props => props.theme.lighterGreen};
            cursor: pointer;
        }
    }
    .edit {
        font-size: 60%;
        color: ${props => props.theme.midGrey};
        :hover {
            color: ${props => props.theme.lightGrey};
            cursor: pointer;
        }
    }
    .save {
        color: ${props => props.theme.lightGreen};
        :hover {
            color: ${props => props.theme.lighterGreen};
            cursor: pointer;
        }
    }
`;

class LogItem extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            weight: props.weight,
            reps: props.reps,
            duration: props.duration
        }
    }

    handleChange = (e) => {
        const { name, type, value } = e.target;
        const val = (type === 'number' && value) ? parseFloat(value) : value;

        this.setState({ [name]: val });
    }

    submit = (e) => {
        this.props.saveChanges(e, this.state);
    }

    render() {
        const { weight, reps, duration, editing, active, complete, setActive, setComplete, setIncomplete, toggleEditing, saveChanges } = this.props;
        return (
            <Form onSubmit={e=>{
                e.preventDefault();
                this.submit();
            }}>
                <fieldset>
                    <Entry complete={complete} active={active} editing={editing} onClick={setActive}>
                        <LogProperty>
                            <FaDumbbell className="icon" />
                            {editing ?
                                <AutoFocusingInput
                                    type="number"
                                    className="editable"
                                    name="weight"
                                    id="weight"
                                    placeholder={`${weight} lbs`}
                                    value={this.state.weight}
                                    onChange={this.handleChange}
                                /> : <LogValue>
                                    {`${weight}`}
                                    <span className="moniker">lbs</span>
                                </LogValue>}

                        </LogProperty>
                        <LogProperty>
                            <span className="icon">
                                💪
                    </span>
                            {editing ?
                                <Input
                                    type="number"
                                    className="editable"
                                    name="reps"
                                    id="reps"
                                    placeholder={`${reps} reps`}
                                    value={this.state.reps}
                                    onChange={this.handleChange}
                                /> : <LogValue>
                                    {`${reps}`}
                                    <span className="moniker">reps</span>
                                </LogValue>}

                        </LogProperty>
                        {active &&
                            <LogButtons>
                                {!editing && <>
                                    {complete && <FaRedo className="reset" onClick={setIncomplete} />}
                                    {!complete && <FaCheck className="complete" complete={complete} onClick={setComplete} />}
                                </>
                                }
                                {!complete && <>
                                    {!editing ? <FaPen className="edit" onClick={toggleEditing} /> : <FaSave className="save" onClick={this.submit} />}
                                </>}
                            </LogButtons>
                        }

                    </Entry>
                </fieldset>
            </Form >
        );
    }
}

export default LogItem;