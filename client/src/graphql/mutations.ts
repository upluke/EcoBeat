import {gql} from "@apollo/client"

export const CREATE_ACTION=gql`

    mutation createAction(
        $actionDescription:String!
        $ecopoints:Int!
        
    ){
        createAction(
            actionDescription:$actionDescription
            ecopoints:$ecopoints
            
        ){
            actionDescription
            ecopoints
           
        }
    }
`