import { useEffect, useRef, useState } from 'react'
import axios from 'axios'

export default function FormHandle () {
  const [users, setUsers] = useState([])

  const inputRef = useRef()

  const searchUsers = async (url = '') => {
    const response = await axios.get(url)
    if (response && response.data) {
      setUsers(response?.data?.users || [])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const searchUser = `https://dummyjson.com/users/search?q=${inputRef.current.value}&limit=10&select=firstName,image,lastName`
    searchUsers(searchUser)
  }

  useEffect(() => {
    const getUsers = 'https://dummyjson.com/users?limit=10&select=firstName,image,lastName'
    searchUsers(getUsers)
  }, [])

  return (
    <section className='container py-5 text-white'>
      <form onSubmit={handleSubmit}>
        <div className='input-group'>
          <input className='form-control' type='search' placeholder='Search for a user...' name='search' ref={inputRef} />
          <button className='btn btn-outline-secondary text-white'>Search</button>
        </div>
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
