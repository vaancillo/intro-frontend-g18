import { useEffect, useState } from 'react'
import '../styles/App.css'

const App = () => {
  console.log('Montaje')
  /*  reglas básicas de los hooks */
  /*
    1. se deben llamar en la cabecera del componente
    2. No se pueden llamar dentro de condicionales, ciclos y scopes
  */
  const [username, setUsername] = useState('Bruno')
  const [number, setNumber] = useState(0)

  const handleChangeName = () => {
    setUsername('Jared') // no se ejecuta por segunda vez
  }
  /* siempre se ejecuta */
  /*  useEffect(() => {
     handleChangeName()
    console.log('Update')
    console.log(number)
  })  */

  /* se ejecuta una sola vez */
  // useEffect(() => {
  //  number !== 0 && console.log('useEffect')
  /* if (number === 0) {
    console.log('useEffect')
    }
  }, []) */

  const productCount = 10
  /*  se ejecuta cuando detecta el cambio de un estado especifico */
  /*  useEffect(() => {
    console.log('cambio de numero')
    number === productCount && window.alert('Ya no hay productos')
  }, [number])  */

  /* se ejecuta un fragmenteo de codigo cuando se desmonta el componente */
  /* useEffect(() => {
    return () => {
      console.log('unmount')
    }
  }, []) */

  return (
    <div className='App'>
      <h2>{number}</h2>
      {/* <button onClick={() => setNumber(number < productCount ? number + 1 : number)}>Cambiar</button>  */}
      <button onClick={() => setNumber(number < productCount ? number + 1 : number)}>Cambiar</button>
    </div>
  )
}

export default App
