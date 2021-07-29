import React from 'react'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'

interface ActionListInterface{
    id:string;
    actionName:string;
    actionDescription:string;
    ecopoints:number;
    completed:boolean
}

const Action: React.FC<ActionListInterface>=({id, actionName, actionDescription,ecopoints})=>{
    return(
        <h1>
            
            <ListItem key={id}>
                <ListItemText style={{color:"red"}}>{actionName} :</ListItemText>
                {actionDescription}-{ecopoints||"no points was generated"}
            </ListItem>
        </h1> 
    )
}

export default Action