import { Link } from 'react-router-dom'

function Page404 () {
  return (
    <>
      <div className='container text-center py-4 text-white'>
        <h1>This is not fine 404</h1>
        <p>You are lost 404</p>
        <img src='https://midu.dev/images/this-is-fine-404.gif' alt='Gif del perro this is fine quemandose vivo' />
      </div>
      <p className='text-center py-4 text-white'>aquí tienes volver a la home, ¡para que encuentres algo!</p>
      <div className='text-center'>
        <Link className='btn btn-primary text-center' to='/'>Volver a la home</Link>
      </div>
    </>
  )
}

export default Page404
