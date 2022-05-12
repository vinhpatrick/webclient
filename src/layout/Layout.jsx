import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <Header />
      {children}
      <GoToTop />
      <Footer />
    </>
  )
}