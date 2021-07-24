import { GraphQLString,GraphQLInt,GraphQLID } from "graphql";
import { UserType } from "../TypeDefs/User";
import {Users} from '../../Entities/Users'
 

export const CREATE_USER={
    type:UserType,
    args:{
        id: {type:GraphQLID},
        username: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
        email: {type: GraphQLString},
    },
    resolve(parent:any, args:any){
        const {id,username, ecopoints,email}=args;
        Users.insert({id, username,ecopoints, email})
        return args;
    }
}


 