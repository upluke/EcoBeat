import React from 'react'
import CreateAction from '../../components/CreateAction'
import ActionList from '../../components/ActionRequestList'
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CreateUser from '../../components/CreateUser';
import UserList from '../../components/UserList';
import Columns from '../../components/Columns';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexGrow: 2,
      padding: 0,
      margin: 0,
      height: "100vh",//100vh
      backgroundColor: "#113537",
   
    },
    grid: {
      marginTop: "1rem"
    },
    list: {
      width: '50%',
      margin: '1rem',
  
 
  }
  }));

const HomePage: React.FC=()=>{
    const classes = useStyles();
    return(
      <>
        <Paper className={classes.root}>
              <div className={classes.list}>
                <CreateUser/>
                <UserList/>
              </div>
              <div className={classes.list}>
                <CreateAction/>
                <ActionList/>
              </div>
        </Paper> 
        <Paper className={classes.root}>
                <div className={classes.list}>
                  <Columns/>
                </div>
          </Paper> 
      </>
    )
}

export default HomePage