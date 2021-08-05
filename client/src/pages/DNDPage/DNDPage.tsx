import React from 'react'

import { Paper } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import ColumnList from '../../components/ColumnList';

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

const DNDPage: React.FC = () => {
  const classes = useStyles();
  return (
      <Paper className={classes.dndPaper}>
        <div >
          <ColumnList />
        </div>
      </Paper>
  )
}

export default DNDPage