import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import GridView from '../components/GridView'
import ListView from '../components/ListView'
import Layout from '../layout/Layout'
import { _search } from '../redux/action/searchAction'

const AllProduct = (props) => {
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
      <section className='section-content padding-y ' style={{ minHeight: '750px' }}>
        <div className='container page-search'>
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
export default AllProduct
