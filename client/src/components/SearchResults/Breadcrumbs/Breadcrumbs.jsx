import './Breadcrumbs.scss'

function Breadcrumbs({categories}) {
  return (
    <div className='breadcrumbs'>
      {categories.join(' > ')}
    </div>
  )
}

export default Breadcrumbs