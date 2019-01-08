import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { CURRENT_USER_QUERY } from './User';
import { Button } from './styles/FormStyles';

const SIGNUP_MUTATION = gql`
    mutation SIGNUP_MUTATION($email: String!, $name: String!, $password: String!){
        signup(email: $email, name: $name, password: $password){
            id
            email
            name
        }
    }
`;

const Card = styled.div`
    background-color: ${props => props.theme.white};
    width: 100%;
    border-radius: 10px;
    padding: 10px 10px;
    box-shadow: ${props => props.theme.bs};
    border-left: 4px solid ${props => props.theme.lightGreen};
    margin: 20px 0;
    button {
        text-align: right;
        display: block;
    }
`;

const CardHeader = styled.h1`
    font-size: 4rem;
    margin-block-start: 0rem;
    margin-block-end: 0rem;
    font-family: ${props => props.theme.headerFont};
`;

const Input = styled.input`
    margin-bottom: 5px;
    border: 0;
    background-color: ${props => props.theme.white};
    width: 100%;
    color: ${props => props.theme.grey};
    font-family: ${props => props.theme.bodyFont};
    font-weight: 600;
    ::placeholder{
        color: ${props => props.theme.lightGrey};
    }
`;

class Signin extends Component {
    state = {
        name: '',
        password: '',
        email: ''
    }
    saveToSate = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Mutation
                mutation={SIGNUP_MUTATION}
                variables={this.state}
                refetchQueries={[
                    { query: CURRENT_USER_QUERY }
                ]}
            >
                {(signup, { error, loading }) => (
                    <Card>
                        <form method="post" onSubmit={async (e)=> {
                            e.preventDefault();
                            await signup();
                        }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <CardHeader>
                                    Sign up for an account
                                </CardHeader>
                                <Input
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    value={this.state.email}
                                    onChange={this.saveToSate}
                                />
                                <Input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="name"
                                    required
                                    value={this.state.name}
                                    onChange={this.saveToSate}
                                />
                                <Input
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={this.state.password}
                                    onChange={this.saveToSate}
                                />
                                <Button type="submit">Sign Up!</Button>
                            </fieldset>
                        </form>
                    </Card>
                )}
            </Mutation>
        );
    }
}

export default Signin;