import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const PoisonousContent = () => {
  return (
    <div>
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Poisonous
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-2'></Col>
        </Row>
      </Container>
    </div>
  )
}

export default PoisonousContent
