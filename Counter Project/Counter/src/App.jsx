import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if(counter < 20) {
      console.log('value added ', Math.random());
      counter = counter + 1;
      setCounter(counter)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
    setCounter(counter - 1)
    }
  }

  return (
   <>
    <h1> chai aur code </h1>
    <h2>Counter value {counter}</h2>

    <button
      onClick={addValue}
    >add value</button>

    <br />
    <button
    onClick={removeValue}
    >Remove value</button>

   </>
  )
}

export default App
