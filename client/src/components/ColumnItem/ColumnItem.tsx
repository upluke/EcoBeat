import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { makeStyles } from "@material-ui/core/styles";

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import clsx from 'clsx';
import Coin from '../CoinIcon/Coin';

interface ItemInterface {
  text: string;
  index: number
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: .1,

  },
  palette: {
    backgroundColor: '#C4C4C4'
  },
  item: {
    borderRadius: 4,
    transition: "background-color .8s ease-out",
    marginTop: 20,
    "&:hover": {
      backgroundColor: "#B2FFC3",
      transition: "background-color 0s ease-in"
    }
  }

}));


const ColumnItem: React.FC<ItemInterface> = ({ text, index }) => {
  const { loading, data, error } = useQuery(GET_ALL_ACTIONS)
  const classes = useStyles();
  if (typeof (data) == 'undefined') {
    return (
      <Draggable draggableId={text} index={index}>
        {(provided) => (
          <Card className={clsx(classes.root, classes.palette, classes.item)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent>
              <Typography variant="h5" component="h2" style={{ textAlign: 'left', width: '100%', fontSize: '1em' }}>
                {text}
              </Typography>
            </CardContent>
          </Card>
        )}
      </Draggable>
    );
  } else {
    const fetchedText = data.getAllActions && data.getAllActions.find((action: any) => text === action["id"])

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return (
      <Draggable draggableId={text} index={index}>
        {(provided) => (
          <Card className={clsx(classes.root, classes.palette, classes.item)}

            // className={classes.item}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <CardContent>
              <Toolbar >
                <Typography variant="h5" component="h2" style={{ textAlign: 'left', width: '100%', fontSize: '1em' }}>
                  {fetchedText["actionDescription"]}
                </Typography>

                <Typography variant="h5" component="h2" style={{ width: '30%', textAlign: 'right', fontSize: '1.5em' }}>

                  <Toolbar style={{ float: 'right' }}>
                    <Coin />
                    {fetchedText["ecopoints"]}
                  </Toolbar>
                </Typography>

              </Toolbar >
            </CardContent>
          </Card>
        )
        }
      </Draggable >

      // <Draggable draggableId={text} index={index}>
      //   {(provided) => (

      //     <div
      //       className={classes.item}
      //       ref={provided.innerRef}
      //       {...provided.draggableProps}
      //       {...provided.dragHandleProps}
      //     >
      //       {fetchedText["actionDescription"]} -------
      //       {fetchedText["ecopoints"]}
      //     </div>
      //   )}
      // </Draggable>
    );
  }
};

export default ColumnItem;