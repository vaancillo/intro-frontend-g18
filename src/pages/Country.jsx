import { Helmet } from 'react-helmet-async'
import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'
import { Link, Navigate, useParams } from 'react-router-dom'

export default function Country () {
  const { code } = useParams()

  const apiUrl = `https://restcountries.com/v3.1/alpha/${code}`

  const { data: countries, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  // if (countries.length === 0) return <Loading />

  if (error !== '') {
    return <Navigate to='/404' />
  }

  const { flags, name, capital } = countries[0]

  return (
    <>
      <Helmet>
        <title>{name.common}</title>
      </Helmet>
      <section className='container py-5'>
        <article className='text-white text-center'>
          <img width='400px' src={flags.svg} alt={name.common} />
          <h1 className='mt-3'>{name.common}</h1>
          <p className='text-secondary'>{capital[0]}</p>
          <Link className='btn btn-primary' to='/'>
            Home
          </Link>
        </article>
      </section>
    </>
  )
}
