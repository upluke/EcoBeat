import React from 'react'
import { ListItem } from '@material-ui/core'
import { ListItemText } from '@material-ui/core'
import { IconButton } from '@material-ui/core'
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { ActionInterface } from '../../interface/interface'
import { DELETE_ACTION } from '../../graphql/mutations';
import { useMutation } from '@apollo/client';
import { GET_ALL_ACTIONS } from '../../graphql/queries';


const Action: React.FC<ActionInterface>=({id, actionDescription,ecopoints})=>{
    const [deleteUser, {error}]=useMutation(DELETE_ACTION,{
      refetchQueries:[{query:GET_ALL_ACTIONS}]
    })
    return(
        <div style={{backgroundColor:"#969398"}}>
            
            <ListItem >
                <ListItemText style={{color:"white"}}>{actionDescription}</ListItemText>
                <ListItemText style={{color:"blue"}}>{ecopoints||"no points was generated"}</ListItemText>
            
            </ListItem>
            <IconButton
              aria-label="Delete"
              onClick={() => deleteUser({variables:{id:id}})}
            >
              <DeleteForeverIcon />
            </IconButton>
        </div> 
    )
}

export default Action