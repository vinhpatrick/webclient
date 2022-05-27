import { Button, Pagination, Spin } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import styles from '../css_modules/css/all.module.css'
import { _search } from '../redux/action/searchAction'
import GridItem from './GridItem'

const GridView = (props) => {
  const dispatch = useDispatch()
  const { list, changeView } = props
  const { searching, keyword, total, page, limit, sort } = useSelector((state) => state.search)

  const handleSortChange = (sorter) => {
    if (!sort.includes(sorter)) {
      dispatch(_search(keyword, 1, limit, sorter))
    } else {
      if (sort.includes('-')) {
        dispatch(_search(keyword, 1, limit, sorter))
      } else {
        dispatch(_search(keyword, 1, limit, `-${sorter}`))
      }
    }
  }

  return (
    <>
      <main className={`${styles['col-md-12']}`}>
        <header className={`${styles['border-bottom']} ${styles['mb-4']} ${['pb-3']}`}>
          <div className={`${['form-inline']}`}>
            <span className={`${styles['mr-md-auto']} listview-fix`}>
              {total} sản phẩm liên quan đến #<b>{decodeURIComponent(keyword)}</b>
            </span>

            <Button
              size='large'
              shape='round'
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('createdAt')}
            >
              Mới
              {sort.includes('createdAt') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className='fa fa-sort-down' />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className='fa fa-sort-up' />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size='large'
              shape='round'
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('price')}
            >
              Giá
              {sort.includes('price') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className='fa fa-sort-down' />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className='fa fa-sort-up' />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size='large'
              shape='round'
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('rating')}
            >
              Đánh giá
              {sort.includes('rating') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className='fa fa-sort-down' />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className='fa fa-sort-up' />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size='large'
              shape='round'
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('sold')}
            >
              Lượt mua
              {sort.includes('sold') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className='fa fa-sort-down' />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className='fa fa-sort-up' />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <Button
              size='large'
              shape='round'
              style={{ marginRight: '1rem' }}
              onClick={(e) => handleSortChange('view')}
            >
              Lượt xem
              {sort.includes('view') ? (
                sort.includes('-') ? (
                  <>
                    {' '}
                    <i className='fa fa-sort-down' />
                  </>
                ) : (
                  <>
                    {' '}
                    <i className='fa fa-sort-up' />
                  </>
                )
              ) : (
                <></>
              )}
            </Button>

            <div className={`${styles['btn-group']} btn-listview`}>
              <button
                className='btn btn-outline-secondary'
                data-toggle='tooltip'
                title='List view'
                onClick={changeView}
              >
                <i className='fa fa-bars' />
              </button>
              <button
                className='btn btn-outline-secondary active'
                data-toggle='tooltip'
                title='Grid view'
              >
                <i className='fa fa-th' />
              </button>
            </div>
          </div>
        </header>

        <Spin spinning={searching}>
          <div className={`${styles['row']}`}>
            {list.map((item, index) => {
              return <GridItem key={index} {...item} />
            })}
          </div>
        </Spin>

        <Pagination
          total={total}
          showTotal={(total, range) => `${range[0]}-${range[1]} / ${total} sản phẩm`}
          pageSize={limit}
          current={page}
          showSizeChanger
          pageSizeOptions={[20, 40, 100]}
          onChange={(page, pageSize) => {
            dispatch(_search(keyword, page, pageSize, sort))
          }}
          style={{ textAlign: 'center' }}
        />
      </main>
    </>
  )
}

export default GridView
