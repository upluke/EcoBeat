import React from 'react'
import CreateAction from '../../components/CreateAction'
import ActionList from '../../components/ActionRequestList'
import { Paper } from '@material-ui/core';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CreateUser from '../../components/CreateUser';
import UserList from '../../components/UserList';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      padding: 0,
      margin: 0,
      height: "100%",//100vh
      backgroundColor: "#113537",
     
    },
  
    appBar: {
      height: theme.spacing(8)
    },
    title: {
      flexGrow: 1
    },
    grid: {
      marginTop: "1rem"
    }
  }));

const HomePage: React.FC=()=>{
    const classes = useStyles();
    return(
        <Paper className={classes.root}>
          <Grid container justify="center" className={classes.grid}>
            <Grid item={true} xs={11} md={9} lg={4}>
                <CreateUser/>
                <UserList/>
                <CreateAction/>
                <ActionList/>
            </Grid>
          </Grid>
        </Paper> 
    )
}

export default HomePage