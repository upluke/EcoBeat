import {gql} from "@apollo/client"

export const GET_ALL_ACTIONS=gql`

    query getAllActions{
        getAllActions{
            id
            actionName
            actionDescription
            ecopoints
        }
    }
    
     
`