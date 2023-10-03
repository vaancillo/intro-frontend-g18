import { Navigate, Route, Routes } from 'react-router-dom'
/* pages */
import Countries from './pages/Countries'
import Country from './pages/Country'
import Page404 from './pages/Page404'
import FormHandle from './docs/FormHandle'
import DashBoard from './docs/DashBoard'

export default function Paths () {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/countries' replace />} />
      <Route path='/countries' element={<Countries />} />
      <Route path='/country/:code' element={<Country />} />
      <Route path='/404' element={<Page404 />} />
      <Route path='/404' element={<Navigate to='/404' />} />
      <Route path='*' element={<Navigate to='/404' />} />
      {/* Docs */}
      <Route path='/form' element={<FormHandle />} />
      <Route path='/dashboard' element={<DashBoard />} />
    </Routes>
  )
}
