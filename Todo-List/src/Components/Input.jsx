import React from 'react'

function Input({inputval, inputHandle,addtodo}) {

  return (
    <div className='input-container'>
        <input type="text" placeholder="Add a todo" value={inputval} onChange={inputHandle}/>
        <button onClick={addtodo}>+</button>
    </div>
  )
}

export default Input
