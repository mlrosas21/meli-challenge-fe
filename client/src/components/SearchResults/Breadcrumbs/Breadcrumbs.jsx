import './Breadcrumbs.scss'

function Breadcrumbs({filters}) {
  const paths = filters.values[0].path_from_root

  return (
    <div className='breadcrumbs'>
      {paths.map(path => path.name).join(' > ')}
    </div>
  )
}

export default Breadcrumbs