import React,{useState} from 'react';
import './App.css';
import ToDo from './components/ToDo';
import UserDetail from './components/UserDetail';

function App() {

  const [idFromToDo,setIdFromToDo] = useState(false)

  const getData = (id) => {
    setIdFromToDo(id)
  }

  return (
    <div className = "container">
      <ToDo setId={getData} />
      {idFromToDo ? <UserDetail id={idFromToDo}/> : <div></div>}      
    </div>
  );
}

export default App;
