import { Route, Routes, Navigate } from 'react-router-dom'
import { RenderComponent } from '../components/common/RenderComponent'
import Layout from '../components/Layout'

export function RoutingDocu () {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={<Navigate to='/main/' />} />
          <Route path='/main' element={<RenderComponent text='Main' />} />
          <Route path='/about' element={<RenderComponent text='About' />} />
          <Route path='/services' element={<RenderComponent text='Services' />} />
          <Route path='/404' element={<RenderComponent text='Page not found 404' />} />
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </Layout>
    </>
  )
}
