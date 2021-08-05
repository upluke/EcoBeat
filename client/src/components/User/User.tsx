import React from 'react'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { UserInterface } from '../../interface/interface'
 

const Action: React.FC<UserInterface>=({username,email, ecopoints})=>{
 
    return(
        <div style={{backgroundColor:"#DAFEE2"}}>
            
            <ListItem >
                <ListItemText>{username} </ListItemText>
                <ListItemText>{email} </ListItemText>
                <ListItemText style={{color:"red"}}>{ecopoints} </ListItemText>
            </ListItem>
        </div> 
    )
}

export default Action