import React from 'react'
import CreateAction from '../../components/CreateAction'
import ActionList from '../../components/ActionRequestList'
import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import CreateUser from '../../components/CreateUser';
import UserList from '../../components/UserList';
import ColumnList from '../../components/Columns';

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
  dndPaper: {
    width: "100%",
    backgroundColor: "red",

  },

}));

const Testing: React.FC = () => {
  const classes = useStyles();
  return (
    <>
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
      <Paper className={classes.dndPaper}>
        <div >
          <ColumnList />
        </div>
      </Paper>
    </>
  )
}

export default Testing