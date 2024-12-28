import React from 'react'

function Todo({todo,index,delTodo}) {
  return (
    <div className="container">
        <div className="todo">
            <p>{todo}</p>
            <div className="action">
              <input type="checkbox" name="" id="" />
              <button onClick={()=>delTodo(index)}>Delete</button>
            </div>
        </div>
    </div>
  )
}

export default Todo
