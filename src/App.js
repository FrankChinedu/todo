import React, {useState, useEffect} from 'react';
import './App.css';
import {Header} from './Header';
import {Input} from './Input';
import {Display} from './Display';


const  App = () =>  {
  const names = ['name', 'new name', 'another name', 'my name'];
  const [state, setState] = useState([]);

  useEffect(() => {}, [state]);

  const handleAddTodo = (todo) => {
    const data = {
      name: todo,
      id: state.length
    }
    setState([...state, data]);
  }

  const handleRemove = (id) => {
    console.log('id', id);
    const arr = state.filter((e) => e.id !== id);
    setState([...arr]);
  }

  return (
    <>
      <div className="App">
        <Header/>
        <Input addTodo={handleAddTodo} />
        {state && state.map((e) => <Display todo={e} key={e.id} handleRemove={handleRemove} />)}
      </div>
    </>
  );
}

export default App;
