import {GraphQLSchema,GraphQLObjectType}from 'graphql'; 
import { GET_USER } from './Queries/User';

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        getUser:GET_USER //getUser(id:"1"){
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