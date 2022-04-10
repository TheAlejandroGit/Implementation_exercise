import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import TaskEdit from './Components/TaskEdit';
import TodoList from './Components/TodoList';

function App() {
  return (
    <HashRouter>
    <div className="App">
      <Routes>
     <Route path='/' element={<TodoList/>}/>
     <Route path='/edit' element={<TaskEdit/>}/>
     </Routes>
    </div>
    </HashRouter>
  );
}

export default App;
