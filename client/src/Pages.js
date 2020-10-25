import React from 'react'
import { Pagination } from 'react-bootstrap'

const Pages = () => {
  return (
    <div className='container d-flex'>
      <Pagination className='mx-auto'>
        <Pagination.Item active>{1}</Pagination.Item>

        <Pagination.Item>{2}</Pagination.Item>
        <Pagination.Item>{3}</Pagination.Item>
        <Pagination.Item>{4}</Pagination.Item>
        <Pagination.Item>{5}</Pagination.Item>
        <Pagination.Item>{6}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  )
}

export default Pages
