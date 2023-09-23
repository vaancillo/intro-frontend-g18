import { useEffect } from 'react'
/* componnets */
import Card from '../components/common/Card'
import Loading from '../components/common/Loading'
/* methods */
import { toast } from 'react-toastify'
import useGetData from '../hooks/useGetData'
import { Helmet } from 'react-helmet-async'

function Countries () {
  const apiUrl = 'https://restcountries.com/v3.1/all'

  const { data: countries, loading, error } = useGetData(apiUrl)
  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  if (loading) return <Loading />

  // console.log({ countries, loading, error })
  return (
    <>
      <Helmet prioritizeSeoTags>
        <title>Countries API</title>
      </Helmet>
      <section className='container py-5'>
        <div className='row gy-4'>
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
