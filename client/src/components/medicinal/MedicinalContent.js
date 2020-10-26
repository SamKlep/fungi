import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'

const MedicinalContent = () => {
  return (
    <div>
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Medicinal
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-2'>
            <p>
              Mushrooms have long been touted for their myriad of health
              benefits, and the use of medicinal mushroom dates back thousands
              of years. Now, in recent times with functional medicine and
              nutrition going mainstream, we’re seeing a resurgence of interest
              in these marvelous superfoods.
            </p>
            <p>
              Before running to your local supplement shop, use the search bar
              below to enter key characteristics of a fungus in question.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MedicinalContent
