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

export const DELETE_ACTION=gql`
    mutation deleteAction(
        $id:ID!
    ){
        deleteAction(id: $id){
            id
        }
    }
`