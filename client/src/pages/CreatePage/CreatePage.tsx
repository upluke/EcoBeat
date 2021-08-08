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
    flexGrow: 2,
    padding: 0,
    margin: 0,
    height: "40%",//100vh
    backgroundColor: "#113537",

  },
  grid: {
    marginTop: "1rem"
  },
  list: {
    width: '50%',
    margin: '1rem',
  },


}));
const AboutPage: React.FC = () => {
  const classes = useStyles();
  return (

    <Paper className={classes.root}>
      <div className={classes.list}>
        <CreateUser />
        <UserList />
      </div>
      <div className={classes.list}>
        <CreateAction />
        <ActionList />
      </div>

    </Paper>
  )
}

export default AboutPage