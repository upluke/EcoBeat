import React from 'react'
import CreateAction from '../../components/CreateAction'
import ActionList from '../../components/ActionRequestList'
import CreateUser from '../../components/CreateUser';
import UserList from '../../components/UserList';
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      // flexGrow: 2,
      // flexGrow:1,
      textAlign:'center',
      padding: 0,
  
    
      backgroundColor: "#113537",
  
    },
    grid: {
      marginTop: "1rem"
    },
    list: {
      width: '40%',
      margin: 'auto',
    },
 
  
  }));
const AboutPage: React.FC=()=>{
    const classes = useStyles();
    return(
      
        <Paper className={classes.root}>
        {/* <div className={classes.list}>
          <CreateUser />  
          <UserList /> 
        </div> */}
        <div className={classes.list}>
          <CreateAction />
          <ActionList />
          <UserList /> 
        </div>

      </Paper>
    )
}

export default AboutPage