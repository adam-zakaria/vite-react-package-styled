import { useState } from 'react'
import './App.scss'
import MyComponent from './MyComponent'

function App() {
  const [count, setCount] = useState(0)
  /*
  read from 4 files, put them in 4 flex col divs
  */

  return (
    <>
      <MyComponent></MyComponent>
    </>
  )
}

export default App
