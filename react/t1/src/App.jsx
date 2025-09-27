import { useState } from 'react'
import './App.css'
import Signup  from './singnup/singup' 
import Login from './login/login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Signup />
   
      <Login />
      
        
    </>
  )
}

export default App
