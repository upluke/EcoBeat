import { GraphQLString,GraphQLInt,GraphQLID } from "graphql";
import { UserType } from "../TypeDefs/User";
import {Users} from '../../Entities/Users'
 

export const CREATE_USER={
    type:UserType,
    args:{
        id: {type:GraphQLID},
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
    },
    resolve(parent:any, args:any){
        const {id,username, email,ecopoints}=args;
        Users.insert({id, username,email,ecopoints})
        return args;
    }
}


 