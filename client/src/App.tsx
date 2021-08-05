import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests

import HomePage from './pages/HomePage';
import TempPage from './pages/TempPage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        {/* <h1>Lou Team</h1> */}
        <HomePage />
        <TempPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
