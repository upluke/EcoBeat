import React from 'react'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { ActionInterface } from '../../interface/interface'
 

const Action: React.FC<ActionInterface>=({id, actionDescription,ecopoints})=>{
    return(
        <h1>
            
            <ListItem key={id}>
                <ListItemText>{actionDescription}-{ecopoints||"no points was generated"}</ListItemText>
                
            </ListItem>
        </h1> 
    )
}

export default Action