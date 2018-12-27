import React, { Component } from 'react';
import styled from 'styled-components';

import { FaDumbbell, FaRegClock, FaCheck, FaPen } from 'react-icons/fa';
import { Icon, NumberIcon, FormLine } from './styles/FormStyles';

import LogItem from './LogItem';

const Card = styled.div`
    background-color: ${props => props.theme.white};
    width: 100%;
    border-radius: 10px;
    padding: 10px 10px;
    box-shadow: ${props => props.theme.bs};
    border-left: 4px solid ${props => props.theme.lightGreen};
    margin: 20px 0;
`;

const Entry = styled.div`
    padding: 0px 10px;
`;

const EntryHeader = styled.h1`
    font-size: 5rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: ${props => props.theme.headerFont};
`;

const EntrySubHeader = styled.h2`
    font-size: 1.5rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-weight: 600;
    color: ${props => props.theme.grey};
    margin-top: 5px;
`;

const NumericValue = styled(EntrySubHeader)`
    width: 25%;
`;


const Log = styled.div`
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    background-color: ${props => props.theme.offWhite};
    box-shadow: 0 2px 4px rgba(0,50,0,0.4);
    border-radius: 4px;
`;


class Exercise extends Component {
    state = {
        logOpen: true,
        logGenerated: false,
        sets:[
            {
                weight: 185,
                reps: 8,
                active: true,
                complete: false
            },
            {
                weight: 185,
                reps: 8,
                complete: false
            },
            {
                weight: 185,
                reps: 8,
                complete: false
            },
        ]  
    }
    toggleOpen = () => {
        this.setState({ logOpen: !this.state.logOpen });
    }
    generateLog = () => {
        this.setState({ logGenerated: true });
        const { sets, reps, weight } = this.props;
    }

    toggleActiveSet = (i) => {
        this.setState({
            sets: this.state.sets.map((set,index)=>
                {
                    return {...set, active: index == i};
                }
            )
        })
    }

    toggleCompleteSet = (e, i) => {
        e.stopPropagation();
        this.setState({
            sets: this.state.sets.map((set,index)=>
                {
                    if(index == i){
                        return {...set, complete: true, active: false};
                    }
                    if(index == i + 1){
                        return {...set, active: true};
                    }
                    return set;
                }
            )
        });
    }

    resetSet = (e, i) => {
        e.stopPropagation();
        this.setState({
            sets: this.state.sets.map((set, index)=>{
                return index == i ? {...set, complete: false} : set;
            })
        });
    }

    toggleEditing = (e, i) => {
        e.stopPropagation();
        this.setState({
            sets: this.state.sets.map((set, index)=>{
                return index == i ? {...set, editing: set.editing ? false : true} : set;
            })
        });
    }

    saveSetEdit = (e, i, newSet) => {
        e.stopPropagation();
        console.log(e, i, newSet);
        this.setState({
            sets: this.state.sets.map((set, index)=>{
                return index == i ? {...set, editing: false, ...newSet} : set;
            })
        })

    }

    render() {
        const {
            name,
            muscleGroup,
            weight,
            sets,
            reps,
            duration,
            description
        } = this.props;

        return (
            <Card>

                <Entry onClick={this.toggleOpen}>
                    <EntryHeader>{name}</EntryHeader>
                    <EntrySubHeader>{muscleGroup}</EntrySubHeader>
                    <FormLine>
                        <Icon>
                            <FaDumbbell />
                        </Icon>
                        <NumericValue>
                            {`${weight} lbs`}
                        </NumericValue>
                        <NumberIcon>
                            #
                    </NumberIcon>
                        <NumericValue>
                            {`${sets} sets`}
                        </NumericValue>

                        {reps && <>
                            <NumberIcon>
                                💪
                        </NumberIcon>
                            <NumericValue>
                                {`${reps} reps`}
                            </NumericValue>
                        </>}

                        {duration && <>
                            <Icon>
                                <FaRegClock />
                            </Icon>
                            <NumericValue>
                                {`${duration}s`}
                            </NumericValue>
                        </>}


                    </FormLine>


                </Entry>
                {this.state.logOpen && 
                    <Log>
                        {this.state.sets.map((set, i)=>(
                            <LogItem 
                                weight={set.weight} 
                                reps={set.reps} 
                                duration={set.duration}
                                complete={set.complete}
                                active={set.active}
                                editing={set.editing}
                                key={i}
                                setActive={()=>this.toggleActiveSet(i)}
                                setComplete={(e)=>this.toggleCompleteSet(e, i)}
                                setIncomplete={(e)=>this.resetSet(e, i)}
                                toggleEditing={(e)=>this.toggleEditing(e, i)}
                                saveChanges={(e, set)=>this.saveSetEdit(e, i, set)}
                            />
                        ))}
                    </Log>
                    }
            </Card>
        );
    }
}

export default Exercise;
