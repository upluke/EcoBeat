import { GraphQLString,GraphQLInt,GraphQLID } from "graphql";
import { UserType } from "../TypeDefs/User";
import {Users} from '../../Entities/Users'
 

export const CREATE_USER={
    type:UserType,
    args:{
        username: {type: GraphQLString},
        email: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
    },
    resolve(parent:any, args:any){
        const {username, email,ecopoints=0}=args;
        Users.insert({username,email,ecopoints})
        return args;
    }
}


 