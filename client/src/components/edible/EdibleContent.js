import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const EdibleContent = () => {
  return (
    <div>
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Edible
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-5'></Col>
        </Row>
      </Container>
    </div>
  )
}

export default EdibleContent
