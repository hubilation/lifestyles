import React, { Component } from 'react';
import styled from 'styled-components';

const Input = styled.input`
    border: 0;
    background-color: ${props => props.theme.white};
    width: 50%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
    margin-bottom: 0;
    margin-right: 5px;
    flex-grow: 1;
`;


class AutoFocusingInput extends Component {
    constructor(props) {
        super(props);

        this.input = React.createRef();
    }
    componentDidMount(){
        this.input.current.focus();
    }
    render() {
        return (
                <Input
                    ref={this.input}
                    {...this.props}
                />
        );
    }
}

export default AutoFocusingInput;