import React,{useState} from 'react'
import Button from 'react-bootstrap/Button';

export const EditTodoForm = ({editTodo,task}) => {
     const [value,setValue] = useState(task.task)
     const handleSubmit = e =>{
          e.preventDefault();
          editTodo(value,task.id);
          setValue('')
     }
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
     <input type="text" className='todo-input' placeholder='Update Task' value={value} onChange={(e)=>setValue(e.target.value)}/>
     <Button type='submit' className='rounded-0' variant='primary' >Add Task</Button>
    </form>
  )
}
