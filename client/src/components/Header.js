import React from 'react'
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark'>
        <LinkContainer to='/'>
          <Navbar.Brand>Fungi API</Navbar.Brand>
        </LinkContainer>
        <Nav className='mr-auto'>
          <LinkContainer to='/learn'>
            <Nav.Link>Learn</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/explore'>
            <Nav.Link>Explore</Nav.Link>
          </LinkContainer>
          <LinkContainer to='/breathe'>
            <Nav.Link>Breathe</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl type='text' placeholder='Search' className='mr-sm-2' />
          <Button variant='outline-info'>Search</Button>
        </Form>
      </Navbar>
    </div>
  )
}

export default Header
