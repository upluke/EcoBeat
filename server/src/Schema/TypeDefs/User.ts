import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
}from 'graphql'; //graphQL types

// User type
export const UserType = new GraphQLObjectType({
    name:'User',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    })
});
