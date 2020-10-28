import React from 'react'
import { Nav } from 'react-bootstrap'

const Pills = () => {
  return (
    <div>
      <Nav
        variant='tabs'
        className='pill-links bg-light justify-content-center'
        defaultActiveKey='/info'>
        <Nav.Item>
          <Nav.Link href='/info'>Info</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/history'>History</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/links'>Health</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/links'>Links</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default Pills
