import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand className='text-info logo'>Fungi API</Navbar.Brand>
        </LinkContainer>
        <Nav className='ml-auto'>
          <LinkContainer to='/info'>
            <Nav.Link>Info</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/explore'>
            <Nav.Link>Explore</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/identify'>
            <Nav.Link>Identify</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
