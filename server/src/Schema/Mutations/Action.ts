import { GraphQLString,GraphQLInt,GraphQLID,GraphQLBoolean } from "graphql";
import { ActionType } from "../TypeDefs/Action";
import { Actions } from "../../Entities/Actions";
 

export const CREATE_ACTION={
    type:ActionType,
    args:{
        actionName: {type: GraphQLString},
        actionDescription: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
        completed:{type:GraphQLBoolean}
    },
    async resolve(parent:any, args:any){
        const {actionName, actionDescription,ecopoints,completed}=args;
        await Actions.insert({actionName,actionDescription,ecopoints,completed})
        return args;
    }
}

export const DELETE_ACTION={
    type:ActionType,
    args:{
        id: {type:GraphQLID},
    },
    async resolve(parent:any, args:any){
        const id=args.id
        return Actions.delete(id);
    }
}

 