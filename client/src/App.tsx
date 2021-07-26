import React from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests
import CreateAction from './components/CreateAction';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});


function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
          <h1>Lou Team</h1>
          <CreateAction/>
      </div>
    </ApolloProvider>
  );
}

export default App;
