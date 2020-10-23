import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'

const Jumbo = () => {
  return (
    <div className='text-center'>
      <Jumbotron fluid>
        <Container>
          <h1>Welcome.</h1>
        </Container>
      </Jumbotron>
    </div>
  )
}

export default Jumbo
