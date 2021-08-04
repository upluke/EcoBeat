import { Droppable } from "react-beautiful-dnd";
// import { ColumnInterface } from "../../interface/interface";
import ColumnItem from "../ColumnItem";

interface ColumnInterface {
        col:{
        columnName:string;
        orderedActions: string[];
      }
  }

const Column: React.FC<ColumnInterface> = ({col:{orderedActions,columnName }}) => {
    console.log(orderedActions,"list-id",columnName)
    return (
      <Droppable droppableId={columnName}>
        {(provided) => (
          <div>
            <h2>{columnName}</h2>
            <div    
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