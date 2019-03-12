import React, { useState } from 'react'
import MainLayout from '../components/layouts/main-layout'

const Search = () => {
  const [query, setQuery] = useState('')
  const [search, setSearch] = useState('')
  const queryChangeHandler = (e) => setQuery(e.target.value)
  const submit = (e) => {
    e.preventDefault()
    setSearch(query)
  }

  return (
    <MainLayout>
      <section class="section">
        <div className="container">
          <h1 className="title">Find Opskrift</h1>
          <form onSubmit={submit}>
            <div className="field">
              <div className="control">
                <input
                  className="input is-large"
                  type="text"
                  placeholder="Slubr"
                  value={query}
                  onChange={queryChangeHandler}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
      <section>
        <div className="container">
          <p>{search}</p>
        </div>
      </section>
    </MainLayout>
  )
}

export default Search
