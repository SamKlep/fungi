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
          <Col lg='8' className='lead mb-5'>
            <p>
              Mushrooms have been considered as an ingredient of gourmet cuisine
              across the globe; especially for their unique flavor and have been
              valued by humankind as a culinary wonder. More than 2,000 species
              of mushrooms exist in nature, but around 25 are widely accepted as
              food and few are commercially cultivated.
            </p>
            <p>Here are the edible ones: </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default EdibleContent
