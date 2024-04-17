import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setcount] = useState(15);
function addvalue()
{
  counter= counter+1;
  setcount(counter);
  console.log(counter)
}
function decvalue()
{
  counter = counter-1;
  setcount(counter);
  console.log(counter)
}

  return (
    <>
     <h1>Sagar Joshi.</h1>
     <p>Counter value is:{counter}</p>

     <button onClick={addvalue}>Add value.</button>

     <button onClick={decvalue}>Decrease value.</button>
    </>
  )
}

export default App
