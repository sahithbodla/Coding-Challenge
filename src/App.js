import React,{useState} from 'react';
import './App.css';
import ToDo from './components/ToDo';
import UserDetail from './components/UserDetail';

function App() {

  const [idFromToDo,setIdFromToDo] = useState(false)
  const [toDoIdFromToDo,setToDoIdFromToDo] = useState(false)
  const [titleFromToDo,setTitleFromToDo] = useState(false)

  const getId = (id) => {
    setIdFromToDo(id);
  }

  const getToDoId = (toDoId) => {
    setToDoIdFromToDo(toDoId);
  }

  const getTitle = (title) => {
    setTitleFromToDo(title);
  }

  return (
    <div className = "container">
      <ToDo setId={getId} setToDoId = {getToDoId} setTitle={getTitle} />
      {idFromToDo ? <UserDetail id={idFromToDo} toDoId={toDoIdFromToDo} title={titleFromToDo}/> : <div></div>}      
    </div>
  );
}

export default App;
