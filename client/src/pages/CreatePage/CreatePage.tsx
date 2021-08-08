import React, { useState } from 'react'
import NavBar from '../../components/NavBar';
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
    textAlign: 'center',
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
const CreatePage: React.FC = () => {
  const classes = useStyles();
 
  return (
    <div>
      <NavBar loggedIn={false} points="0" loginUser="" />
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
    </div>
  )
}

export default CreatePage