import React from 'react';
import styled from 'styled-components';

import { FaCheck, FaPen } from 'react-icons/fa';
import { GiBiceps, GiWeight, GiSandsOfTime } from 'react-icons/gi';


const Set = styled.li`
    :first-child {
        box-shadow: inset 0px 2px 4px 0px rgba(161,161,161,0.5);
    }
    :last-child {
        box-shadow: inset 0px -2px 4px 0px rgba(161,161,161,0.5);
    }
    padding: 5px 10px;
    display: grid;
    grid-template-columns: 1fr 1fr 40px 10px;
    font-family: ${props => props.theme.bodyFont};
    font-size: 2.5rem;
    background-color: ${props => props.active ? props.theme.lighterOffWhite : props.theme.offWhite};
    border-left: ${props => !props.active ? 'none' : '4px solid ' + props.theme.lightGreen};
    .entry {
        font-weight: 600;
        color: ${props => props.theme.grey};
        display: flex;
        align-items: center;
        .moniker {
            font-size: 75%; 
            color: ${props => props.theme.midGrey};
        }
        .icon {
            font-size: 70%;
            margin-right: 3px;
        }
    }
    .buttons {
        color: ${props => props.theme.midGrey};
        font-size: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .check {
            cursor: pointer;
            :hover {
                color: ${props => props.theme.lighterGreen};
            }
        }
        .pen {
            cursor: pointer;
            font-size: 60%;
            :hover {
                color: ${props => props.theme.lightGrey};
            }
        }
    }
`;

const ExerciseSet = ({ weight, reps, duration, active, complete }) => {
    return (
        <Set active={active}>
            <div className="entry">
                <GiWeight className="icon" />
                <span className="value">{weight}</span>
                <span className="moniker">lbs</span>
            </div>
            {reps &&
                <div className="entry">
                    <GiBiceps className="icon" />
                    <span className="value">{reps}</span>
                    <span className="moniker">reps</span>
                </div>
            }
            {duration &&
                <div className="entry">
                    <GiSandsOfTime className="icon" />
                    <span className="value">{duration}</span>
                    <span className="moniker">sec</span>
                </div>
            }
            <div className="buttons">
                <FaCheck className="check" />
                <FaPen className="pen" />
            </div>
        </Set>
    );
};

export default ExerciseSet;