import { useEffect } from 'react'
import { toast } from 'react-toastify'
import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'

function Country () {
  const apiUrl = 'https://restcountries.com/v3.1/name/mexico'

  const { data: country, loading, error } = useGetData(apiUrl)

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

  if (loading) return <Loading />

  const { flags, name, capital } = country[0]

  return (
    <section className='container py-5'>
      <article className='text-white text-center'>
        <img width='400px' src={flags.svg} alt={name.common} />
        <h1 className='mt-3'>{name.common}</h1>
        <p className='text-secondary'>{capital}</p>
      </article>
    </section>
  )
}

export default Country
