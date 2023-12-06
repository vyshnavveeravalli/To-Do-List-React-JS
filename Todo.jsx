import { useState } from 'react';
import './css/Todo.css'
import { useRef } from 'react';
import { useEffect } from 'react';

let count = 0;
const todo = () => {
  const [todos,setTodos] = useState([]);
  const inputRef = useRef(null);

  
  const add = () => {
    setTodos([...todos,{no:count++,text:inputRef.current.value,display:""}]);
    inputRef.current.value = "";
    localStorage.setItem("todos_count",count);
  }

  useEffect(()=>{
    setTodos(JSON.parse(localStorage.getItem("todos")));
    count=localStorage.getItem("todos_count")
  },[])

  useEffect(()=>{
    setTimeout(()=>{
      console.log(todos);
      localStorage.setItem("todos",JSON.stringify(todos));
    }, 100);
  },[todos])

  return (
    <div className="todo">
      <div className="todo-header">To-do list</div>
      <div className="todo-add">
        <input ref={inputRef} type="text" id='todo-input' name='todo-input' placeholder="add your text" className="todo-input"/>
        <div className="todo-add-btn" title='add-btn'>
          <button onClick={()=>{add()}}>ADD</button>
        </div>

      </div>
      <div className="todo-list">
          {todos.map((item,index)=>{
            return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text}/>
          })}
      </div>
    </div>
  )
}

export default todo
