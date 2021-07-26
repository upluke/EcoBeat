import {gql} from "@apollo/client"

export const CREATE_ACTION=gql`

    mutation createAction(
        $actionName:String!
        $actionDescription:String!
        # $ecopoints:Number!
        # $completed:Boolean!
    ){
        createAction(
            actionName:$actionName
            actionDescription:$actionDescription
            # ecopoints:$ecopoints
            # completed:$completed
        ){
            actionName
            actionDescription
            # ecopoints
            # completed
        }
    }
`