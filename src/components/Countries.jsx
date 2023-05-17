import { useEffect, useState } from 'react'
/* componnets */
import Loading from './common/Loading'
import Card from './common/Card'
/* methods */
import { toast } from 'react-toastify'

function Countries () {
  const [countries, setCountries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const { signal, abort } = new AbortController()

  const apiUrl = 'https://restcountries.com/v3.1/all'

  const getData = async () => {
    try {
      const req = await fetch(apiUrl, { signal })
      const res = await req.json()
      setCountries(res)
    } catch (error) {
      setError(String(error))
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
    return () => abort()
  }, [])

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  if (loading) return <Loading />

  return (
    <section className='container py-5'>
      <div className='row gy-4'>
        {countries.map((country, index) => (
          <div key={index} className='col-12 col-md-6 col-lg-3'>
            <Card name={country.name} flags={country.flags} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Countries
