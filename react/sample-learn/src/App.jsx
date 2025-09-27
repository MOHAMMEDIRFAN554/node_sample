import { useState } from 'react'
import './App.css'
function App() {
  const [name, setName] = useState('Leo Geo')
  const [num, setNum] = useState(0)
  function clickMe() {
    setName('Lego')
  }
  function countNum() {
    setNum(num + 1)
  }
  function decrementNum() {
    setNum(num - 1)
  }
  function addnum(value) {
    setNum(num + value)
  }
  return (
    <>
      <h2>Welcome {name}</h2>
      <h3 className={(num > 5) ? 'red' : 'green'}>count = {num}</h3>
      <button className='btn' onClick={clickMe}>Click</button>
      <button className='btn' onClick={countNum}>+</button>
      <button className='btn' onClick={decrementNum}>-</button>
      <button className='btn' onClick={() => addnum(1)}>+ Add</button>
      <button className='btn' onClick={() => addnum(-1)}>- Subtract</button>
    </>
  )
}

export default App
