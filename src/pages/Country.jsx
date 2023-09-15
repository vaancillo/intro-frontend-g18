import Loading from '../components/common/Loading'
import useGetData from '../hooks/useGetData'
import { useParams } from 'react-router-dom'

export default function Country () {
  const { code } = useParams()

  const apiUrl = `https://restcountries.com/v3.1/name/${code}`

  const { data: countries, loading } = useGetData(apiUrl)
  // useEffect(() => {
  //   if (error !== '') toast.error(error)
  // }, [error])

  if (loading) return <Loading />

  if (countries.length === 0) return <Loading />

  const { flags, name, capital } = countries[0]

  return (
    <section className='container py-5'>
      <article className='text-white text-center'>
        <img width='400px' src={flags.svg} alt={name.common} />
        <h1 className='mt-3'>{name.common}</h1>
        <p className='text-secondary'>{capital[0]}</p>
      </article>
    </section>
  )
}
