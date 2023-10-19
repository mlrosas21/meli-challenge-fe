import './SearchResults.scss'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { getItems } from '@service/items'
import SearchItem from './SearchItem/SearchItem'
import Breadcrumbs from './Breadcrumbs/Breadcrumbs'

function SearchResults() {
  const [searchParams] = useSearchParams()
  const [items, setItems] = useState([])

  useEffect(() => {
    const query = searchParams.get('search')
    if (!query) return;

    const fetchItems = async () => {
      try {
        const { results } = await getItems(query)
        setItems(results)
      } catch (error) {
        console.error('Error fetching items:', error)
      }
    }

    fetchItems()
  }, [searchParams])

  return (
    <div className='container'>
      <Breadcrumbs />
      <ul className='itemsList'>
        {items.length > 0 && items.map(item => <li key={item.id}> <SearchItem  item={item}/> </li>)}
      </ul>
    </div>
  )
}

export default SearchResults
