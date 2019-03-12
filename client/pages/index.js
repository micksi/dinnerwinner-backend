import React from 'react'
import Link from 'next/link'
import MainLayout from '../components/layouts/main-layout'

const Home = () => (
  <MainLayout>
    <section className="section">
      <div className="container">
        u wanna fite? <Link href="search">Search</Link>
      </div>
    </section>
  </MainLayout>
)

export default Home
