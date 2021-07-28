import React from 'react'
import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { Paper } from '@material-ui/core'
import { List } from '@material-ui/core'
import { Divider } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'

const ActionList: React.FC=()=>{
    const {loading,data, error}=useQuery(GET_ALL_ACTIONS)
    console.log(data)
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <Paper>
            <List>
            {data&&
                data.getAllActions.map((action:any)=>{
                    return (
                        <>
                        <ListItem key={action.id}>
                            <ListItemText style={{color:"red"}}>{action.actionName} :</ListItemText>
                            {action.actionDescription}-{action.ecopoints||"no points was generated"}
                        </ListItem>
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