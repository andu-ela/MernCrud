// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import Create from './Create'
import axios from 'axios'
import { BsFillCheckCircleFill, BsCircleFill, BsFillTrashFill } from 'react-icons/bs'

function Home() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
   axios.get('http://localhost:3004/get')
   .then(result => setTodos(result.data))
   .catch(err => console.log(err))
  }, [])

  const handleEdit = (id) => {
    axios.put('http://localhost:3004/update/'+id)
    // eslint-disable-next-line no-unused-vars
    .then(result => {
        location.reload()
    })
    .catch(err => console.log(err))
  }

  const handleDelete = (id) => {
    axios.delete('http://localhost:3004/delete/'+id)
    // eslint-disable-next-line no-unused-vars
    .then(result => {
        location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className="home">
      <h1>ToDo List </h1>
      <Create />
      <br />
      {
      todos.length === 0
       ? 
        <div>
          <h2>No Record</h2>
        </div>
       : 
        todos.map(todo => (
          <div className='task' key={todo._id}>
            <div className='checkbox' onClick={() => handleEdit(todo._id)}>
                {todo.done ?
                <BsFillCheckCircleFill className='icon'></BsFillCheckCircleFill>
                : <BsCircleFill className='icon' />}
                <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
            </div>
            <div>
              <span>
                <BsFillTrashFill className='icon' onClick={() => handleDelete(todo._id)} />
              </span>
            </div>
          </div>
        ))
    }

    </div>
  )
}

export default Home
