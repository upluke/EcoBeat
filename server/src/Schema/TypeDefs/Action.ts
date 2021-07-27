import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean
}from 'graphql'; //graphQL types


//Todo type
// export const TodoType=new GraphQLObjectType({
//     name:'Todo',
//     fields:()=>({
//         id:{type:GraphQLInt},
//         userId:{type:GraphQLInt},
//         title:{type:GraphQLString},
//         completed:{type:GraphQLBoolean}
//     })
// })

// Action Type
export const ActionType=new GraphQLObjectType({
    name:'Action',
    fields:()=>({
        id:{type:GraphQLID},
        actionName:{type:GraphQLString},
        actionDescription:{type:GraphQLString},
        ecopoints:{type:GraphQLInt},
        completed:{type:GraphQLBoolean}
    })
})