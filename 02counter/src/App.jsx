import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] =useState(15) //setCounter handle to counter varibale

  //let counter = 15
  console.log("clicked, counter");

  const addValue = () =>  {
    
    counter = counter + 1
    setCounter(prevCounter  =>  prevCounter + 1)
    setCounter(prevCounter  =>  prevCounter + 1)
    setCounter(prevCounter  =>  prevCounter + 1)
    setCounter(prevCounter  =>  prevCounter + 1)
    
  }

  const revmoveValue = () => {
    setCounter = (counter -1)
  }
  
  
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {counter}</h2>
      
      <button
      onClick={addValue}
      >Add Value {counter}</button>
      <br />
      <button
      onClick = {revmoveValue}
      >remove value: {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
