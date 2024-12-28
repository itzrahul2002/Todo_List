import React from 'react'
import Todo from './Todo'

function TodosContainer({todos, delTodo}) {
  return (
    <div className='container'>
        {todos.map((todo,index)=>{
            return(
                <Todo key={todo.id} todo={todo} delTodo={delTodo} index={index}/>
            )
        })}
    </div>
  )
}

export default TodosContainer
