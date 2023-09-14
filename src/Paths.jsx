import { Navigate, Route, Routes } from 'react-router-dom'
/* pages */
import Countries from './pages/Countries'
import Country from './pages/Country'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
    </Routes>
  )
}
