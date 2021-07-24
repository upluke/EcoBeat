import { GraphQLList,GraphQLString } from "graphql";
import { UserType } from "../TypeDefs/User";
import { Users } from "../../Entities/Users";
 

// dummy data:
// const users=[
//     {id:'1', name:'Lou', email:'lou123@gmail.com'},
//     {id:'2', name:'Alex', email:'alex456@gmail.com'},
//     {id:'3', name:'Pranav', email:'pranav789@gmail.com'},
// ]

// export const GET_USER={
//     type:UserType,
//     args:{
//         id:{type:GraphQLString}
//         },
//         resolve(root:any, args:any){ // access data using: customer(id:"1"){}
//             for(let i = 0;i < users.length;i++){
//                 if(users[i].id == args.id){
//                     return users[i]; // dummmy data
//                 }
//             }
//         }
// }

export const GET_ALL_USERS={
    type:new GraphQLList(UserType),
    resolve(){
        return Users.find();
    }
}

 