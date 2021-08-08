import React,{useState} from 'react'
import {
    useMutation
  } from "@apollo/client"; 

import { CREATE_ACTION } from '../../graphql/mutations';
import { TextField } from '@material-ui/core';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from "@material-ui/core/styles";
import { GET_ALL_ACTIONS } from '../../graphql/queries';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: "1rem 1rem ",
      padding:"0.5rem 1rem",
      display: "flex",
      flexDirection: 'column',
    },
    button: {
        margin: theme.spacing(1),
      },
  }));

const CreateAction: React.FC=()=>{
    const [actionDescription, setaActionDescription]=useState("")
    const [ecopoints, setEcopoints]=useState(0)

    const [createAction, {loading,error}]=useMutation(CREATE_ACTION,{
        refetchQueries:[{query:GET_ALL_ACTIONS}]
    })

    const classes = useStyles();

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <Paper className={classes.paper}>
            
            <TextField 
                margin="normal"
                type="text" 
                label="Description" 
                autoFocus
                onChange={(e)=>{
                    setaActionDescription(e.target.value)
                }}
            />
           <TextField 
                margin="normal"
                type="number" 
                label="Price" 
                autoFocus
                onChange={(e)=>{
                    setEcopoints(parseInt(e.target.value))
                }}
            />
            <Button
                variant="contained"
                color="primary"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={()=>{
                    createAction({
                        variables:{actionDescription:actionDescription, ecopoints:ecopoints }
                    })
                }}
            >Create Card</Button>

        </Paper> 
    )
}

export default CreateAction