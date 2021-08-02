import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { ItemInterface } from '../../interface/interface';


const ColumnItem: React.FC<ItemInterface> = ({ id,index  }) => {
    return (
      <Draggable draggableId={id} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          {id}
        </div>
      )}
    </Draggable>
    );
  };
  
  export default ColumnItem;