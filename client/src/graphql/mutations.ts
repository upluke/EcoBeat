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


export const CREATE_USER=gql`
    mutation createUser(
        $username:String!
        $email:String!
        
    ){
        createUser(
            username:$username
            email:$email
            
        ){
            username
            email
            ecopoints
           
        }
    }
`