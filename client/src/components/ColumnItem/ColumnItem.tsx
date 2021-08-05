import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { GET_ALL_ACTIONS } from '../../graphql/queries'
import { useQuery } from '@apollo/client'
import { makeStyles } from "@material-ui/core/styles";


interface ItemInterface {
  text: string;
  index: number
}

const useStyles = makeStyles((theme) => ({
  item: {
    backgroundColor: "#eee",
    borderRadius: 4,
    padding: "4px 8px",
    transition: "background-color .8s ease-out",
    marginTop: 8,
    "&:hover": {
      backgroundColor: "#fff",
      transition: "background-color .1s ease-in"
    }
  }
   
}));


const ColumnItem: React.FC<ItemInterface> = ({ text,index  }) => {
    const {loading,data, error}=useQuery(GET_ALL_ACTIONS)
    const classes = useStyles();
    if (typeof(data) == 'undefined') {
      return (
        <Draggable draggableId={text} index={index}>
        {(provided) => (
          <div
            className={classes.item}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {text}
          </div>
        )}
      </Draggable>
      ); 
    }else{
    const fetchedText=data.getAllActions&&data.getAllActions.find((action:any)=>text===action["id"])
   
    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Something went wrong!</h1>;
    return (
      <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div
          className={classes.item}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {fetchedText["actionDescription"]} -------
          {fetchedText["ecopoints"]}
        </div>
      )}
    </Draggable>
    );
  }
  };
  
  export default ColumnItem;