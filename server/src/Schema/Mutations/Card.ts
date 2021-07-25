import { GraphQLString,GraphQLInt,GraphQLID,GraphQLBoolean } from "graphql";
import { CardType } from "../TypeDefs/Card";
import { Cards } from "../../Entities/Cards";
 

export const CREATE_CARD={
    type:CardType,
    args:{
        id: {type:GraphQLID},
        cardName: {type: GraphQLString},
        cardDescription: {type: GraphQLString},
        ecopoints:{type:GraphQLInt},
        completed:{type:GraphQLBoolean}
    },
    resolve(parent:any, args:any){
        const {id,cardName, cardDescription,ecopoints,completed}=args;
        Cards.insert({id, cardName,cardDescription,ecopoints,completed})
        return args;
    }
}


 