import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean
}from 'graphql'; //graphQL types


//Todo type
export const TodoType=new GraphQLObjectType({
    name:'Todo',
    fields:()=>({
        id:{type:GraphQLInt},
        userId:{type:GraphQLInt},
        title:{type:GraphQLString},
        completed:{type:GraphQLBoolean}
    })
})

// Card Type
// export const CardType=new GraphQLObjectType({
//     name:'Card',
//     fields:()=>({
//         id:{type:GraphQLInt},
//         title:{type:GraphQLInt},
//         ecopoints:{type:GraphQLString},
//         description:{type:GraphQLString},
//         completed:{type:GraphQLBoolean}
//     })
// })