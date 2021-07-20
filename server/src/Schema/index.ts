import {GraphQLSchema,GraphQLObjectType}from 'graphql'; 
// import { GET_USER } from './Queries/User';
import { GET_TODO } from './Queries/Todo';
import { CREATE_USER } from './Mutations/User';
import { GET_ALL_USERS } from './Queries/User';

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        // getUser:GET_USER, //getUser(id:"1"){
        getAllUsers:GET_ALL_USERS,
        getTodo:GET_TODO
    }
});



const Mutation= new GraphQLObjectType({
    name:'Mutation',
    fields:{
        createUser:CREATE_USER
    }
});

export const schema=new GraphQLSchema({
    query: RootQuery,
    // mutation:Mutation
});