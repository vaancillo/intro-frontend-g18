import { useState, useEffect, useRef } from 'react'
/* componnets */
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'
/* methods */
import { toast } from 'react-toastify'
import useGetData from '../hooks/useGetData'
import { Helmet } from 'react-helmet-async'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function Countries () {
  const [countrie, setCountrie] = useState([])
  const [filteredData, setFilteredData] = useState([])
  const apiUrl = 'https://restcountries.com/v3.1/all'

  const { code } = useParams()

  const inputRef = useRef()

  const searchCountries = async (url = '') => {
    const response = await axios.get(url)
    if (response && response.data) {
      setCountrie(response?.data?.users || [])
      setFilteredData(response?.data?.users || [])
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const inputValue = inputRef.current.value.trim().toLowerCase()

    if (inputValue) {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(inputValue)
      )
      setFilteredData(filteredCountries)
    } else {
      setFilteredData(countries)
    }
  }
  const { data: countries, loading, error } = useGetData(apiUrl)
  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  useEffect(() => {
    if (code) {
      const getCountrie = `https://restcountries.com/v3.1/alpha/${code}`
      searchCountries(getCountrie)
    }
  }, [code])

  if (loading) return <Loading />

  // console.log({ countries, loading, error })
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Countries API</title>
      </Helmet>
      <section className='container py-5'>
        <form onSubmit={handleSubmit}>
          <div className='input-group'>
            <input className='form-control' type='search' placeholder='Search for a user...' name='search' ref={inputRef} />
            <button className='btn btn-outline-secondary text-white'>Search</button>
          </div>
        </form>
        <div className='row gy-4 py-4'>
          {
          countries.length === 0 ? <p className='text-white'>No hay banderas encontradas</p> : <p className='text-white'>Banderas encontradas</p>
          }
          {countries.map((country, index) => (
            <div key={index} className='col-12 col-md-6 col-lg-3'>
              <Card {...country} />
            </div>
          ))}
        </div>
        {error !== '' ? <p className='text-white'>{error}</p> : null}
      </section>
    </>
  )
}

export default Countries
