import { Link } from 'react-router-dom'
import toLowerCase from '../../utils/toLowerCase'

export default function Card ({ ...props }) {
  const { name, flags, cca3 } = props

  const lowerCca3 = toLowerCase(cca3)
  return (
    <Link className='card' to={`/country/${lowerCca3}`}>
      <img src={flags.svg} className='card-img-top' alt={name.common} lazy='loading' />
      <div className='card-body'>
        <h5 className='card-title m-0'>{name.common}</h5>
      </div>
    </Link>
  )
}
