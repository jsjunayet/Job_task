import React from 'react';

import Task_1 from "./component/TASK_1/Task_1";
import Task_2 from "./component/TASK_2/Task_2";
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <div className="mx-4 md:mx-0">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Task_1></Task_1>} />
          <Route path="/task" element={<Task_2></Task_2>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;