import React from 'react'
import Footer from '../components/Footer'
import GoToTop from '../components/GoToTop'
// import Test from '../components/Test'
import Header from '../components/Header'

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
