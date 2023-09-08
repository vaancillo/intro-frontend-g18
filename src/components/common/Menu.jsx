import { Link, NavLink } from 'react-router-dom'

export default function Menu () {
  return (
    <menu className='d-flex justify-content-center'>
      <NavLink className='nav-link mx-4' to='/main'>Main</NavLink>
      <NavLink className='nav-link mx-4' to='/about'>About</NavLink>
      <NavLink className='nav-link mx-4' to='/services'>Services</NavLink>
    </menu>
  )
}
