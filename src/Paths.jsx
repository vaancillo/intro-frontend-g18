import { Navigate, Route, Routes } from 'react-router-dom'
/* pages */
import Countries from './pages/Countries'
import Country from './pages/Country'
import Page404 from './pages/Page404'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' replace />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
      <Route path='/404' element={<Page404 />} />
      <Route path='/404' element={<Navigate to='/404' />} />
      <Route path='*' element={<Navigate to='/404' />} />
    </Routes>
  )
}
