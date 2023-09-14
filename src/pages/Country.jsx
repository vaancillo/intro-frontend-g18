import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'
import { useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useEffect } from 'react'

export default function Country () {
  const { code } = useParams()

  const apiUrl = `https://restcountries.com/v3.1/name/${code}`

  const { data: country, loading, error } = useGetData(apiUrl)

  if (loading) return <Loading />

  const { flags, name, capital } = country[0]

  useEffect(() => {
    if (error !== '') toast.error(error)
  }, [error])

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
