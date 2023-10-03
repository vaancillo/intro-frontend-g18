const DashBoard = () => {
  return (
    <section className='container-fluid'>
      <div className='row'>
        <div className='col-md-3 bg-light'>
          <aside className='list-group'>
            <a href='#'>Link 1</a>
            <a href='#'>Link 2</a>
            <a href='#'>Link 3</a>
            <a href='#'>Link 4</a>
            <a href='#'>Link 5</a>
          </aside>
        </div>
        <div className='col-md-9'>
          <main>
            <p>Main</p>
          </main>
        </div>
      </div>
    </section>
  )
}

export default DashBoard
