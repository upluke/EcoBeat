import { Droppable } from "react-beautiful-dnd";
// import { ColumnInterface } from "../../interface/interface";
import ColumnItem from "../ColumnItem";
import { makeStyles } from "@material-ui/core/styles";


interface ColumnInterface {
  col:{
  columnName:string;
  orderedActions: string[];
}
}

const useStyles = makeStyles((theme) => ({
  column: {
      display: "flex",
      flexDirection:"column",
      marginTop:8,
      padding: '24px 0',

    
  },
  list:{
    backgroundColor: "#ddd",
    borderRadius: 8,
    padding: 16,
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    marginTop: 8
  },
  title:{
    margin: 0,
    padding: "0 16px",
    textAlign:"center"
  }
}));




const Column: React.FC<ColumnInterface> = ({col:{orderedActions,columnName }}) => {
  const capColumnName=columnName.toUpperCase()
  const classes = useStyles();
    return (
      <Droppable droppableId={columnName}>
        {(provided) => (
          <div className={classes.column}>
            <h2 className={classes.title}>{capColumnName}</h2>
            <div 
             className={classes.list}   
             {...provided.droppableProps} ref={provided.innerRef}>
     
              {orderedActions&&orderedActions.map((orderedAction, index) => (
            
                <ColumnItem key={orderedAction} text={orderedAction} index={index} />
             
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    );
  };
  
  export default Column;