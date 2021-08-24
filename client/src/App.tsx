import React,{useState} from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests

import DNDPage from './pages/DNDPage';
import CreatePage from './pages/CreatePage';

import { BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});


function App(){
  return (
    <ApolloProvider client={client}>
       <Router>
      <div className="App">
        <Route exact path="/" component={LoginPage} />
        <Route exact path={"/about"} component={AboutPage} />
        <Route exact path="/create" component={CreatePage} />
        <Route exact path="/ndn" component={DNDPage} />
      </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
