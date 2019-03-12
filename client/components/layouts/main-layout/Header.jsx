import React from 'react'
import Link from 'next/link'

const Header = () => (
  <header>
    <nav
      className="navbar is-light"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <Link href="/">
            <a className="navbar-item">Dinner Winner</a>
          </Link>
          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="main-navigation"
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div className="navbar-menu" id="main-navigation">
          <div className="navbar-start" />

          <div className="navbar-end" />
        </div>
      </div>
    </nav>
  </header>
)

export default Header
