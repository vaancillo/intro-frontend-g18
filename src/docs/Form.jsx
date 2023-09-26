import { useEffect, useState } from 'react'
import axios from 'axios'

function Form () {
  const [value, setValue] = useState('')
  const [users, getUsers] = useState({})

  const searchUsers = async () => {
    const response = await axios.get(`https://dummyjson.com/users/search?q=${value}&limit=10&select=firstName,image`)
    console.log(response)
    // if (response && response.data) {

    // }
  }

  useEffect(() => {
    searchUsers()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setValue(e.target.value)
  }
  return (
    <section className='container py-5'>
      <h2 className='text-white'>{value}</h2>
      <form>
        <input onChange={handleSubmit} className='form-control' type='search' placeholder='search...' />
      </form>
    </section>
  )
}

export default Form
