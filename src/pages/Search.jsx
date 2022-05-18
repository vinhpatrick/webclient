import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import ListView from '../components/ListView'
import GridView from '../components/GridView'
import Layout from '../layout/Layout'

import { _search } from '../redux/action/searchAction'

const Search = (props) => {
  const [view, setView] = useState('list')
  const { search } = useLocation() //lấy đường dẫn hiện tại
  // console.log('search', search)
  const query = search
    .replace('?', '')
    .split('&')
    .map((item) => {
      const [key, value] = item.split('=')
      return { [key]: value }
    })
    .reduce((prev, next) => {
      return { ...prev, ...next }
    })
  const { keyword: searchKeyword } = query
  // console.log('keyword', searchKeyword)

  const dispatch = useDispatch()
  const { items = [], page, limit, sort, searching } = useSelector((state) => state.search)

  useEffect(() => {
    dispatch(_search(searchKeyword, page, limit, sort))
  }, [])
  // console.log('items', items)

  return (
    <Layout>
      <section className='section-content padding-y' style={{ minHeight: '750px' }}>
        <div className='container' style={{ marginTop: '100px', marginBottom: '30px' }}>
          <div className='row'>
            {view === 'list' ? (
              <ListView list={items} changeView={(e) => setView('grid')} />
            ) : (
              <GridView list={items} changeView={(e) => setView('list')} />
            )}
          </div>
        </div>
      </section>
    </Layout>
  )
}
export default Search
