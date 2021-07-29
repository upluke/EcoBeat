import React from 'react'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ActionInterface } from '../../interface/interface'
import { DELETE_ACTION } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';

const Action: React.FC<ActionInterface>=({id, actionDescription,ecopoints})=>{
    const [deleteUser, {error}]=useMutation(DELETE_ACTION)
    return(
        <h1>
            
            <ListItem >
                <ListItemText>{actionDescription}-{ecopoints||"no points was generated"}</ListItemText>
                
            </ListItem>
            <IconButton
              aria-label="Delete"
              onClick={() => deleteUser({variables:{id:id}})}
            >
              <DeleteForeverIcon />
            </IconButton>
        </h1> 
    )
}

export default Action