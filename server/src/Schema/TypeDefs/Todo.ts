import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean
}from 'graphql'; //graphQL types


// Todo type
export const TodoType=new GraphQLObjectType({
    name:'Todo',
    fields:()=>({
        id:{type:GraphQLInt},
        userId:{type:GraphQLInt},
        title:{type:GraphQLString},
        completed:{type:GraphQLBoolean}
    })
})
