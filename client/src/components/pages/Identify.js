import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import IdentifyPills from '../identify/IdentifyPills'

const Identify = () => {
  return (
    <Container>
      <IdentifyPills />
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Identify
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-5'>
            <p>
              Cultures around the world have eaten or used mushrooms medicinally
              for centuries, dating all the way back to ancient Egypt. Legend
              has it that pharaohs liked their earthy flavor so much, they
              declared the fungi royalty food and forbid commoners from touching
              them. Those greedy pharaohs kept the entire supply for themselves.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Identify
