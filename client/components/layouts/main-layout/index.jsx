import React from 'react'
import Header from './Header'
import Footer from './Footer'

const MainLayout = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
)

export default MainLayout
