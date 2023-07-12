import React from "react";
import MainHistory from "./components/MainHistory";
import Division from "./components/TeamDivision";
import { DragDropContext } from 'react-beautiful-dnd';


function App() {
  return (
    <DragDropContext>
        <div className="App">
          <Division />
      </div>
    </DragDropContext>
    
  );
}

export default App;
