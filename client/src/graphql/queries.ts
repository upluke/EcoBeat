import {gql} from "@apollo/client"

export const GET_ALL_ACTIONS=gql`

    query getAllActions{
        getAllActions{
            id
            actionDescription
            ecopoints
        }
    } 
`

export const GET_ALL_USERS=gql`

    query getAllUsers{
        getAllUsers{
            id
            username
            email
            ecopoints
        }
    } 
`


 