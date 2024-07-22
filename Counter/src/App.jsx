import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCount] = useState(0)
  const addValue = () => {
    if (counter >= 0 && counter <20){
      setCount(counter+1)
    }
    else{
      setCount(0)
    }
  }
  const removeValue = () => {
    if (counter >+ 1) {
      setCount(counter-1)
    }
    else{
      setCount(0)
    }
  }

  return (
    <>
      <h1>React First Project</h1>
      <h3>Counter value : {counter}</h3>
      <button 
      onClick={addValue}
      >Add Value</button>
      <br /><br />
      <button
      onClick={removeValue}
      >Remove Value</button>
    </>
  )
}

export default App
