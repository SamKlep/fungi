import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = ({ _id, fungus, q }) => {
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
        {/* <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form> */}
      </Navbar>
    </div>
  )
}

export default Header
