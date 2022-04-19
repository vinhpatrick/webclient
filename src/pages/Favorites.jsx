import React from 'react'
import { Media } from 'reactstrap'
import Layout from '../layout/Layout'
import FavoriteItem from '../components/FavoriteItem'

const Favorites = () => {
  return (
    <Layout>
      <div className='container' style={{ minHeight: '600px' }}>
        <div style={{ marginTop: '100px' }} className='row'>
          <div className='col-12'>
            <h3>My Favorites</h3>
            <hr />
          </div>
        </div>
        <div className='row'>
          <Media list>
            {[...new Array(4)].map((e, index) => (
              <div key={Math.random()} className='col-12 mt-5'>
                <FavoriteItem />
              </div>
            ))}
          </Media>
        </div>
      </div>
    </Layout>
  )
}

export default Favorites
