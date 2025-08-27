import React, { use } from 'react';
import { useState } from 'react';

export function TodoList() {

  const [todoinput, setTodoInput] = useState("");
  const [todolist, setTodoList] = useState([]);

  function onChangeInput(e){
    let value = e.target.value;
    setTodoInput(value);

  }
  function addTodolist(){
    setTodoList((prev)=> {
      
      return [...prev, todoinput];
    })
    setTodoInput(""); // to set the value to the input 
  }
  function removeItem(id){
    setTodoList((prev) => prev.filter((_, index) => index !== id));
  }

  return(
   <section className='todolist-main'>
      <div className='todolist-container'>
           <div className='todolist-box'>
                  <div className='todolist-boxcontainer'>
                    <h1>TODO LIST</h1>
                    <div className='input-box'>
                        <input type="text" onChange = {onChangeInput} value = {todoinput} placeholder="Enter Your Input..."/>
                        <button onClick={addTodolist}>Add To List</button>
                    </div>
                    <div className='todo-lists'>
                           <ul>
                              {todolist.map((list,index)=> {
                                 return(
                                  <li key={index}><span>{list}</span>
                                  <i id={index} onClick={()=> removeItem(index)} className="bi bi-x-lg"></i>
                                  </li>
                                 )
                              })}
                           </ul>
                      </div>
                  </div>
           </div>
      </div>
   </section>
  )
}

