import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
 

interface ItemInterface {
  text: string;
  index: number
}

const ColumnItem: React.FC<ItemInterface> = ({ text,index  }) => {
  console.log(text,"inside item", index)
    return (
      <Draggable draggableId={text} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {text}
        </div>
      )}
    </Draggable>
    );
  };
  
  export default ColumnItem;