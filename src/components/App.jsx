import Counter from './Counter'
import '../styles/App.css'
import { useState } from 'react'

export default function App () {
  const [isView, setIsView] = useState(true)

  const handleView = () => {
    setIsView(!isView)
  }
  return (
    <div className='App'>
      {isView && <Counter />}
      <button onClick={handleView}>toggle</button>
    </div>
  )
}
