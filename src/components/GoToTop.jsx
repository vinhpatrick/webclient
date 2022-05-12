import React, { useEffect, useState } from 'react'

export default function GoToTop() {
  const [goToTop, setGotoTop] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setGotoTop(true)
        // console.log('set state')
      } else {
        setGotoTop(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const handleGotoTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  // console.log('re-render')
  return (
    <div className='top-to-btm'>
      {goToTop && (
        <button
          className='icon-position icon-style'
          onClick={handleGotoTop}
          style={{ position: 'fixed', right: '20px', bottom: '20px' }}
        >
          <i className='fa fa-arrow-up fa-lg' aria-hidden='true'></i>
        </button>
      )}
    </div>
  )
}
