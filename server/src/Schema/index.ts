import {GraphQLSchema,GraphQLObjectType}from 'graphql'; 
import { GET_USER } from './Queries/User';
import { GET_TODO } from './Queries/Todo';

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        getUser:GET_USER, //getUser(id:"1"){
        getTodo:GET_TODO
    }
});



// const Mutation= new GraphQLObjectType({
//     name:'Mutation',
//     fields:{}
// });

export const schema=new GraphQLSchema({
    query: RootQuery,
    // mutation:Mutation
});