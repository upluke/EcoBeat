import { GraphQLString,GraphQLInt,GraphQLID,GraphQLList,GraphQLObjectType } from "graphql";
import { ColumnType } from "../TypeDefs/Column";
import { Columns } from "../../Entities/Columns";
 

 

export const CREATE_COLUMNS={
    type:ColumnType,
    args:{
        columnName: {type: GraphQLString},
        orderedActions:{type:new GraphQLList(GraphQLString)},
 
    },
    async resolve(parent:any, args:any){
        const {columnName,orderedActions}=args;
        await Columns.insert({columnName,orderedActions})
        return args;
    }
}

export const UPDATE_COLUMNS = {
    type: ColumnType,
    args: {
        columnName: { type: GraphQLString },
        orderedActions: { type: new GraphQLList(GraphQLString) },
    },
    async resolve(parent: any, args: any) {
        const { columnName, orderedActions: newOrderedActions } = args;
        Columns.update(
            columnName,
            { orderedActions: newOrderedActions }
        )
        return args;
    }
}

 