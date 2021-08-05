import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLInt,
    GraphQLBoolean,
    GraphQLList
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

// const OrderedActionsType=new GraphQLObjectType({
//     name:'OrderedActions',
//     fields:()=>({
//         id: { type: GraphQLString  }
//     })
// })

// Column Type
export const ColumnType=new GraphQLObjectType({
    name:'Column',
    fields:()=>({
        id:{type:GraphQLID},
        columnName:{type:GraphQLString},
        orderedActions:{type:new GraphQLList(GraphQLString)},
       
    })
})

 

 