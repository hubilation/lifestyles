import React, { Component } from 'react';
import styled from 'styled-components';

import { FaDumbbell } from 'react-icons/fa';

const Entry = styled.div`
    background-color: ${props => props.theme.white};
    width: 100%;
    border-radius: 10px;
    padding: 10px 20px;
    box-shadow: ${props => props.theme.bs};
    border-left: 4px solid ${props => props.theme.lightGreen};
    margin: 20px 0;
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

const FormLine = styled.div`
    display:flex;
    align-items: center;
    margin-top: 5px;
`;

const Log = styled.div`
    display: flex;
    flex-direction: column;
`;
const LogItem = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Icon = styled.div`
    margin-top: 10px;
    margin-right: 5px;
`;

const NumberIcon = styled(Icon)`
    font-weight: 600;
    color: ${props => props.theme.black};
    margin-top: 5px;
`;

class Exercise extends Component {
    state = {
        logOpen: false,
        logGenerated: false
    }
    toggleOpen = () => {
        this.setState({ logOpen: !this.state.logOpen });
    }
    generateLog = () => {
        this.setState({logGenerated: true});
        const {sets, reps, weight} = this.props;
    }


    render() {
        const {
            name,
            muscleGroup,
            weight,
            sets,
            reps,
            description
        } = this.props;


        return (
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
                    <NumberIcon>
                        💪
                    </NumberIcon>
                    <NumericValue>
                        {`${reps} reps`}
                    </NumericValue>

                </FormLine>
                {this.state.logOpen && <Log>
                    <LogItem>
                        <span>Set 1</span>
                    </LogItem>
                </Log>}

            </Entry>
        );
    }
}

export default Exercise;
