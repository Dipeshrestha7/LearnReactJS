import React from 'react'

function TodoForm() {

  const [todo, setTodo] = useState("");
  return (
    <form> 
      <input 
          type="text" 
          placeholder='Write todos ...'
      />
      <button type='submit'>
        Add
      </button>
    </form>
  )
}

export default TodoForm