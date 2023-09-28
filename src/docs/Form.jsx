import { useEffect, useState } from 'react'
import axios from 'axios'
import useDebounce from '../hooks/useDebounce'

function Form () {
  const [value, setValue] = useState('')
  const [users, setUsers] = useState([])

  const debouncedValue = useDebounce(value, 1000)

  const searchUsers = async () => {
    const response = await axios.get(`https://dummyjson.com/users/search?q=${value}&limit=10&select=firstName,image,lastName`)
    if (response && response.data) {
      setUsers(response?.data?.users || [])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }

  // useEffect(() => {
  //   // searchUsers()
  //   console.log(value)
  // }, [value])

  useEffect(() => {
    searchUsers()
    console.log(debouncedValue)
  }, [debouncedValue])

  return (
    <section className='container py-5 text-white'>
      <form>
        <input onChange={handleSubmit} className='form-control' type='search' placeholder='search...' />
      </form>
      <div className='row py-4'>
        {
          users.length === 0 ? <p>No hay usuarios</p> : <p>Usuarios encontrados</p>
        }
        {
          users.map(({ id, image, firstName, lastName }) => {
            return (
              <article key={id} className='col-md-4'>
                <div className='card bg-dark'>
                  <img src={image} alt={firstName} className='img-fluid' />
                  <div className='card-body'>
                    <h5 className='card-title'>{firstName} {lastName}</h5>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Form
