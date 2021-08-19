import React,{useState} from 'react';
import './App.css';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client"; //server component handling graphQL requests

// import HomePage from './pages/HomePage';
import DNDPage from './pages/DNDPage';
import CreatePage from './pages/CreatePage';

// import { BrowserRouter, BrowserRouter as Router, Route} from "react-router-dom";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import AboutPage from './pages/AboutPage';
import { LoginPage } from './pages/LoginPage/LoginPage';

import Dashboard from './authTesting/Dashboard/Dashboard';
import Preferences from './authTesting/Preferences/Preferences';
import Login from './authTesting/Login';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql', // link to the graphql server
  cache: new InMemoryCache()
});

 
function setToken(userToken:any){
  sessionStorage.setItem('token', JSON.stringify(userToken))
}
function getToken(){
  const tokenString:any=sessionStorage.getItem('token')
  const userToken=JSON.parse(tokenString)
  return userToken?.token
}
 

function App(){

  const token=getToken()
  
  if(!token){
    return <Login setToken={setToken} />
  }

  return (
    // <ApolloProvider client={client}>
    //    <Router>
    //   <div className="App">
    //     {/* <h1>Lou Team</h1> */}
    //     {/* <Route exact path="/" component={HomePage} /> */}
    //     <Route exact path="/" component={LoginPage} />
    //     <Route exact path={"/about"} component={AboutPage} />
    //     <Route exact path="/create" component={CreatePage} />
    //     <Route exact path="/ndn" component={DNDPage} />
      
    //     {/* <HomePage />
    //     <TempPage /> */}
    //   </div>
    //   </Router>
    // </ApolloProvider>
    <div>
      <h1>Auth testing</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
