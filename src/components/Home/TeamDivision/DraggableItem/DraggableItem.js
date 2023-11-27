import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableItem = ({ members }) => {
  const [, drag] = useDrag({
    type: 'ITEM', // Định danh cho loại phần tử kéo
    item: { id: members.id, name: members.name }, // Thông tin về phần tử được kéo
  });
 
  return (
    <div ref={drag} className="draggable-item">
      {members.name}
    </div>
    
  );
};

export default DraggableItem;
 