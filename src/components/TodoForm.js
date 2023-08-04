import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

export const TodoForm = ({addTodo}) => {
     const [value,setValue] = useState("")
     const handleSubmit = e =>{
          e.preventDefault();
          addTodo(value);
          setValue('')
     }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
     <input type="text" className='todo-input' placeholder='Task Needed to be covered....' value={value} onChange={(e)=>setValue(e.target.value)}/>
     <Button className='rounded-0 h-50' type='submit' variant='primary' >Add Task</Button>
    </form>
  )
}
