import React from 'react'
import { Nav } from 'react-bootstrap'

const HistoryPills = () => {
  return (
    <div>
      <Nav
        variant='tabs'
        className='pill-links bg-light justify-content-center'
        defaultActiveKey='/history'>
        <Nav.Item>
          <Nav.Link href='/learn'>Learn</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/history'>History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/links'>Links</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default HistoryPills
