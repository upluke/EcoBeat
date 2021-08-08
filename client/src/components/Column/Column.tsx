import { Droppable } from "react-beautiful-dnd";
// import { ColumnInterface } from "../../interface/interface";
import ColumnItem from "../ColumnItem";
import { makeStyles } from "@material-ui/core/styles";

import React from 'react'
import Paper from '@material-ui/core/Paper';
import HelpDisplay from '../../components/HelpDisplay';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  column: {
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
    padding: '24px 0',


  },
  list: {
    backgroundColor: "#DAFEE2",
    borderRadius: 8,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginTop: 8
  },
  title: {
    // padding: "0 1rem",
    // margin: "2rem 0",
    // textAlign: "center",
    // color: "white",

    textAlign: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '8em',
    fontSize: '1.5em',

  },
  brown_paper: {
    padding: theme.spacing(2.3),
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(.5),
    minHeight: '6vw',
    textAlign: 'center',
    backgroundColor: 'rgba(164,91,91,.53)',
    borderRadius: '0px 0px 40px 40px',
  },
  green_paper: {
    square: false,
    backgroundColor: 'rgba(218,254,226)',
    borderRadius: '40px 40px 0px 0px',
    padding: theme.spacing(3, 2),
    height: '1.5vw',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
  add_button: {
    backgroundColor: '#2CF9AC',
    width: '100%',
  },
}));


interface ColumnInterface {
  col: {
    columnName: string;
    orderedActions: string[];
  }
}

function capitalizeFirstLetter(text: string) {
  // From https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  return text.charAt(0).toUpperCase() + text.slice(1);
}

const Column: React.FC<ColumnInterface> = ({ col: { orderedActions, columnName } }) => {
  // const capColumnName = columnName.toUpperCase()
  const classes = useStyles();
  return (
    <div>

      <div style={{ float: 'right', paddingTop: '10px' }}>
        <HelpDisplay helpMessage={'hello'} />
      </div>

      <Paper className={classes.green_paper} elevation={20} >
        <Typography className={classes.title}> {capitalizeFirstLetter(columnName)} </Typography>
      </Paper>
 
      <Droppable droppableId={columnName}>
        {(provided) => (
          <div >
            <Paper className={classes.brown_paper}
              {...provided.droppableProps} ref={provided.innerRef}>

              {orderedActions && orderedActions.map((orderedAction, index) => (
                <ColumnItem key={orderedAction} text={orderedAction} index={index} />
              ))}
              {provided.placeholder}
            </Paper>
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;