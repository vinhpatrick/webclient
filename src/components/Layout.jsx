import React from 'react'

import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Layout(props) {
  const { children } = props

  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
