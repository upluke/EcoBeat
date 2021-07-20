import { GraphQLString,GraphQLInt } from "graphql";
import { UserType } from "../TypeDefs/User";

export const CREATE_USER={
    type:UserType,
    args:{
        id: {type:GraphQLString},
        username: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
        email: {type: GraphQLString},
    },
    resolve(parent:any, args:any){
        const {id,username, ecopoints,email}=args;
        return args;
    }
}