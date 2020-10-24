import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import EdiblePills from '../EdiblePills'

const Edible = () => {
  return (
    <Container>
      <EdiblePills />
      <Container className='justify-content-md-center'>
        <h1 className='display-4 text-center justify-content-md-center'>
          Edible
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
            <p>
              Fast forward 5,000 years or so to the 19th century, when mushroom
              production made its way from France (where it began in the 1600s
              under King Louis XIV) across the Atlantic to America. Today, the
              billion-dollar industry grows nearly 900 million pounds of
              mushrooms each year, and we're the second leading mushroom grower
              in the world behind China, according to the Agricultural Marketing
              Resource Center.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Edible
