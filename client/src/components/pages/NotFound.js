import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <article className='not-found container mt-5'>
      <h1>404!</h1>
      <p>
        Content not found.
        <Link to='/'>Go Back</Link>
      </p>
    </article>
  )
}

export default NotFound
