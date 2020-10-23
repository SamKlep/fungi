import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

const Footer = () => {
  return (
    <div>
      <Navbar
        bg='dark'
        variant='dark'
        className='justify-content-center'
        activeKey='/home'>
        <Nav.Item>
          <Nav.Link href='/'>Fungi API</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <span role='img' aria-label=''>
            💜
          </span>
        </Nav.Item>
      </Navbar>
    </div>
  )
}

export default Footer
