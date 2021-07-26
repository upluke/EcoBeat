import {GraphQLSchema,GraphQLObjectType}from 'graphql'; 
import { CREATE_ACTION, DELETE_ACTION } from './Mutations/Action';
// import { GET_USER } from './Queries/User';
// import { GET_TODO } from './Queries/Todo';
import { CREATE_USER } from './Mutations/User';
import { GET_ALL_ACTIONS} from './Queries/Action';
import { GET_ALL_USERS} from './Queries/User';

const RootQuery= new GraphQLObjectType({
    name:'RootQuery',
    fields:{
        // getUser:GET_USER, //getUser(id:"1"){
        getAllUsers:GET_ALL_USERS,
        // getTodo:GET_TODO
        getAllActions:GET_ALL_ACTIONS
    }
});



const Mutation= new GraphQLObjectType({
    name:'Mutation',
    fields:{
        createUser:CREATE_USER,
        createAction:CREATE_ACTION,
        deleteAction:DELETE_ACTION
    }
});

export const schema=new GraphQLSchema({
    query: RootQuery,
    mutation:Mutation
});