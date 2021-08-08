import React,{useState} from 'react'
import {
    useMutation
  } from "@apollo/client"; 

import { CREATE_USER } from '../../graphql/mutations';
import { TextField } from '@material-ui/core';
// import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import { makeStyles } from "@material-ui/core/styles";
import { GET_ALL_USERS } from '../../graphql/queries';

import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    paper: {
      margin: "1rem 1rem ",
      padding:"0.5rem 1rem",
      display: "flex",
      flexDirection: 'column',
    },
    button: {
        margin: theme.spacing(1),
        backgroundColor: '#2CF9AC'
      },
  }));

const CreateAction: React.FC=()=>{
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")

    const [createUser, {loading,error}]=useMutation(CREATE_USER,
    {
      refetchQueries: [
        { query: GET_ALL_USERS }
      ]
    }
    )

    const classes = useStyles();

  
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return(
        <div className={classes.paper}>
            
            <TextField 
                margin="normal"
                type="text" 
                label="username" 
                autoFocus
                onChange={(e)=>{
                    setUsername(e.target.value)
                }}
            />
            <TextField 
                margin="normal"
                type="text" 
                label="email" 
                autoFocus
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
            />
            <Button
                variant="contained"
                color="default"
                size="large"
                className={classes.button}
                startIcon={<SaveIcon />}
                onClick={()=>{
                    createUser({
                        variables:{username:username, email:email}
                    })
                }}
            ><Link style={{textDecoration:"none"}} to="/about"> GREATE USER</Link> </Button>

        </div> 
    )
}

export default CreateAction