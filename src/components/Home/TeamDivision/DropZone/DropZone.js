import React from "react";
import { useDrop } from "react-dnd";

const DropZone = ({ onDrop, dragOver }) => {
  const [, drop] = useDrop({
    accept: "ITEM", // Loại phần tử mà bạn cho phép thả vào
    drop: (item) => {
      onDrop(item); // Gọi hàm được truyền từ component cha và truyền thông tin item
    },
  });

  return (
    <div ref={drop} onDragOver={dragOver} onDrop={drop} className="colBd"></div>
  );
};

export default DropZone;
