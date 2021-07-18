// const axios =require('axios') //makes it easy to send asynchronous HTTP requests to endpoints
// const {
//     GraphQLObjectType,
//     GraphQLString,
//     GraphQLSchema,
//     GraphQLBoolean,
//     GraphQLInt,
//     GraphQLList
// } = require('graphql'); //graphQL types

// // User dummpy data
// const users=[
//     {id:'1', name:'Lou', email:'lou123@gmail.com'},
//     {id:'2', name:'Alex', email:'alex456@gmail.com'},
//     {id:'3', name:'Pranav', email:'pranav789@gmail.com'},
// ]



// // Todo type
// const TodoType=new GraphQLObjectType({
//     name:'Todo',
//     fields:()=>({
//         id:{type:GraphQLInt},
//         userId:{type:GraphQLInt},
//         title:{type:GraphQLString},
//         completed:{type:GraphQLBoolean}
//     })
// })

 
// // Root Query
// const RootQuery= new GraphQLObjectType({
//     name:'RootQueryType',
//     fields:{
//         user:{
//             type:UserType,
//             args:{
//                 id:{type:GraphQLString}
//             },
//             resolve(root, args){ // access data using: customer(id:"1"){}
//                 for(let i = 0;i < users.length;i++){
//                     if(users[i].id == args.id){
//                         return users[i]; // dummmy data
//                     }
//                 }
//             }
//         },
//         todo:{
//             type:new GraphQLList(TodoType),
//             resolve(root,args){
//                 return axios.get('https://jsonplaceholder.typicode.com/todos') //endpoint data
//                     .then(res=>res.data)
//             }
//         }
//     }
// });



// module.exports = new GraphQLSchema({
//     query: RootQuery,
// });