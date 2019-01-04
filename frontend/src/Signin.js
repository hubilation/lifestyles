import React, { Component } from 'react';
import styled from 'styled-components';
import gql from 'graphql-tag';
import { Mutation } from 'react-apollo';

import { CURRENT_USER_QUERY } from './User';
import { Button } from './styles/FormStyles';

const SIGNIN_MUTATION = gql`
    mutation SIGNIN_MUTATION($email: String!, $password: String!){
        signin(email: $email, password: $password){
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
        password: '',
        email: ''
    }
    saveToSate = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    render() {
        return (
            <Mutation
                mutation={SIGNIN_MUTATION}
                variables={this.state}
                refetchQueries={[
                    { query: CURRENT_USER_QUERY }
                ]}
            >
                {(signin, { error, loading }) => (
                    <Card>
                        <form method="post" onSubmit={async (e)=> {
                            e.preventDefault();
                            await signin();
                        }}>
                            <fieldset disabled={loading} aria-busy={loading}>
                                <CardHeader>
                                    Sign in to your account
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
                                    type="password"
                                    id="password"
                                    name="password"
                                    placeholder="Password"
                                    required
                                    value={this.state.password}
                                    onChange={this.saveToSate}
                                />
                                <Button type="submit">Sign In</Button>
                            </fieldset>
                        </form>
                    </Card>
                )}
            </Mutation>
        );
    }
}

export default Signin;