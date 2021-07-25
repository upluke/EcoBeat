import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt
}from 'graphql'; //graphQL types

// Dummmy User type
// export const UserType = new GraphQLObjectType({
//     name:'User',
//     fields:() => ({
//         id: {type:GraphQLString},
//         name: {type: GraphQLString},
//         email: {type: GraphQLString},
//     })
// });

// Moogodb User Type
export const UserType = new GraphQLObjectType({
    name:'User',
    fields:() => ({
        id: {type:GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},        
    })
});


 