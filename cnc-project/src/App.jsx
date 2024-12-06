import { useState } from 'react'
import './App.css'
import AllPages from "./components/PageRender"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AllPages/>
       
    </>
  )
}

export default App
