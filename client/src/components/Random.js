import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Random = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={8}>
            <div>
              <h1>hello</h1>
            </div>
          </Col>
          <Col sm={4}>sm=4</Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </div>
  )
}

export default Random
