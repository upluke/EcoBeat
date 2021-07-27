import {gql} from "@apollo/client"

export const CREATE_ACTION=gql`

    mutation createAction(
        $actionName:String!
        $actionDescription:String!
        $ecopoints:Int!
        
    ){
        createAction(
            actionName:$actionName
            actionDescription:$actionDescription
            ecopoints:$ecopoints
            
        ){
            actionName
            actionDescription
            ecopoints
           
        }
    }
`