import { Droppable } from "react-beautiful-dnd";
// import { ColumnInterface } from "../../interface/interface";
import ColumnItem from "../ColumnItem";

interface ColumnInterface {
 
        columnName:string;
        orderedActions: string[];
   
  }

const Column: React.FC<ColumnInterface> = ({columnName, orderedActions}) => {
    console.log(columnName,"----",orderedActions)
    return (
      <Droppable droppableId={columnName}>
        {(provided) => (
          <div          
            style={{
            display: 'flex',
            flexDirection: 'column',
             }}>
            <h2>{columnName}</h2>
            <div   style={{
              display: 'flex',
              flexDirection: 'column',
              minHeight: '120px'
            }}
             {...provided.droppableProps} ref={provided.innerRef}>
              {orderedActions.map((orderedAction, index) => (
 
                <ColumnItem id={orderedAction} index={index} />
              ))}
              {provided.placeholder}
            </div>
          </div>
        )}
      </Droppable>
    );
  };
  
  export default Column;