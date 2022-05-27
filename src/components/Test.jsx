import React from 'react'

export default function Test() {
  return (
    <div>
      <div className='top-to-btm'>
        <button
          className='icon-position icon-style'
          style={{ position: 'fixed', right: '20px', bottom: '20px' }}
        >
          <i className='fa fa-arrow-up fa-lg' aria-hidden='true'></i>
        </button>
      </div>
    </div>
  )
}
