import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export function App({ children }) {
  return (
    <Fragment>
      <header>
        <Link to="/">
          <h1>Astronomy Picture of the Day</h1>
        </Link>
      </header>
      <main>
        {children}
      </main>
    </Fragment>
  )
}
