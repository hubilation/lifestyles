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

const TitleInput = styled(Input)`
    font-size: 5rem;
    font-family: ${props => props.theme.headerFont};
    font-weight: 600;
    width: 100%;
    ::placeholder{
        font-weight: 400;
    }
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
        const {isTitle, ...other} = this.props
        return (
            <>
                {isTitle ? <TitleInput ref={this.input} {...other}/> : <Input ref={this.input} {...other}/>}
            </> 
        );
    }
}

export default AutoFocusingInput;