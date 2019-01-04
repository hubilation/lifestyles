import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    credentials: 'include',
    uri: process.env.REACT_APP_BACKEND_URL,
  }),
});

export default client;