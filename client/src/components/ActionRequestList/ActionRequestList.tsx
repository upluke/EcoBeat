import React from 'react'
import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import Action from '../Action/Action'

// interface ActionCardInterface {
//     id:string;
//     actionDescription: string;
//     ecopoints: number;
// }

const ActionList: React.FC =()=>{
    const {loading,data, error}=useQuery(GET_ALL_ACTIONS)
 
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <Paper >
            <List style={{backgroundColor:"#113537"}}>
            {data&&
                data.getAllActions.map((action?:any)=>{
                    console.log(action,"action in actioncard")
                    return (
                        <>
                        <Action {...action}/>
                        <Divider/>
                        </>
                    )
                })
                }
            </List>
        </Paper> 
    )
}

export default ActionList