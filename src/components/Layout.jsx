import Menu from './common/Menu'

export default function Layout ({ children }) {
  return (
    <>
      <Menu />
      {children}
      <footer className='d-flex justify-content-center'>
        © Copyright - All rights reserved.
      </footer>
    </>
  )
}
