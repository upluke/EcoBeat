const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
} = require('graphql'); //graphQL types

// dummpy data
const users=[
    {id:'1', name:'Lou', email:'lou123@gmail.com'},
    {id:'2', name:'Alex', email:'alex456@gmail.com'},
    {id:'3', name:'Pranav', email:'pranav789@gmail.com'},
]

// User type
const UserType = new GraphQLObjectType({
    name:'User',
    fields:() => ({
        id: {type:GraphQLString},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
    })
});

// Root Query
const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        user:{
            type:UserType,
            args:{
                id:{type:GraphQLString}
            },
            resolve(parent, args){ // access data using: customer(id:"1"){}
                for(let i = 0;i < users.length;i++){
                    if(users[i].id == args.id){
                        return users[i];
                    }
                }
            }
        }
    }
});



module.exports = new GraphQLSchema({
    query: RootQuery,
});