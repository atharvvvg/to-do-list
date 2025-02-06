import { useState } from 'react'
import './styles.css'

export default function App(){
  const [newItem, setNewItem] = useState("")
  const [todos, setTodos] = useState([])

  function handleSubmit(e){
    e.preventDefault()
  }

  return <>
  <form onSubmit={handleSubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor='item'>new item</label>
      <input 
        value={newItem}
        onChange={e=>setNewItem(e.target.value)}
        type="text"
        id="item" />
      <button className='btn'>Add</button>
    </div>
  </form>
  <h1>To Do List</h1>
  <ul className='list'>
    <li>
      <label>
        <input type="checkbox" />Sleep
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
    <li>
      <label>
        <input type="checkbox" />Mutthi
      </label>
      <button className='btn btn-danger'>Delete</button>
    </li>
  </ul>
  </>
}