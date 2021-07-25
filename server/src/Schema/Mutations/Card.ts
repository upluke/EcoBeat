import { GraphQLString,GraphQLInt,GraphQLID,GraphQLBoolean } from "graphql";
import { CardType } from "../TypeDefs/Card";
import { Cards } from "../../Entities/Cards";
 

export const CREATE_CARD={
    type:CardType,
    args:{
        cardName: {type: GraphQLString},
        cardDescription: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
        completed:{type:GraphQLBoolean}
    },
    async resolve(parent:any, args:any){
        const {cardName, cardDescription,ecopoints,completed}=args;
        await Cards.insert({cardName,cardDescription,ecopoints,completed})
        return args;
    }
}

export const DELETE_CARD={
    type:CardType,
    args:{
        id: {type:GraphQLID},
    },
    async resolve(parent:any, args:any){
        const id=args.id
        return Cards.delete(id);
    }
}

 