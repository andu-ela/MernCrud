// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import axios from 'axios'

function Create() {
    const [task, setTask] = useState()
    const handleAdd = () => {
        axios.post('http://localhost:3004/add', {task:task})
        // eslint-disable-next-line no-unused-vars
        .then(result => {
            location.reload()
        })
        .catch(err => console.log(err))

    }
  return (
    <div className='create_form'>
      <input type="text"  placeholder='Enter Task Please'onChange={(e) => setTask(e.target.value)}/>
      <button type="button" onClick={ handleAdd}>Add</button>
    </div>
  )
}

export default Create
