import React,{useState} from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests

import DNDPage from './pages/DNDPage';
import CreatePage from './pages/CreatePage';
import { useAuth0 } from "@auth0/auth0-react";
import { BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage/LoginPage';
import Loading from './components/Loading/Loading';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});


function App(){
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading />;
  }
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
