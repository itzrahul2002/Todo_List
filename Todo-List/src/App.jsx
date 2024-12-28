import { useState } from 'react'
import './App.css'
import Input from './Components/Input'
import Todo from './Components/Todo'
import TodosContainer from './Components/TodosContainer';

function App() {
  const [inputval, setIntputVal] = useState('');
  const [todos, setTodos] = useState([]);

  function inputHandle(e){
    setIntputVal(e.target.value)
  }

  function addtodo(){
    if(inputval!=('')){
      setTodos((prevTodos)=> [...prevTodos, inputval])
      setIntputVal('')
    }
  }

  function delTodo(todoIndex){
      setTodos((prevTodos)=>prevTodos.filter((prevTodos,prevTodosIndex)=>{
        return prevTodosIndex != todoIndex;
      }) 
  )}
  console.log(todos)
  return (
    <> 
      <main>
        <h1>Todo-List App</h1>
        <Input inputval={inputval} inputHandle={inputHandle} addtodo={addtodo}/>
        <TodosContainer todos={todos} delTodo={delTodo}/>
      </main>
    </>
  )
}

export default App
