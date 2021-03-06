import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import IdentifyContainer from '../identify/IdentifyContainer'

const Identify = () => {
  return (
    <Container>
      <Container className='justify-content-md-center'>
        <h1 className='display-4 mt-4 text-center justify-content-md-center'>
          Identify
        </h1>

        <Row className='justify-content-md-center'>
          <Col lg='8' className='lead mb-2'>
            <p>
              Mushroom hunting can be a rewarding way to get outside and learn
              more about nature. There are many different edible mushrooms in
              the United States, including tasty chanterelles and morels.
            </p>
            <p>
              Mushroom hunting can also be quite dangerous – many mushrooms are
              very similar in appearance. It’s easy to accidentally gather the
              wrong mushrooms, with devastating (or even deadly) consequences.
              When in doubt, throw the mushrooms out.
            </p>
            <p>
              Without further ado, use the search bar below to enter key
              characteristics of a fungus in question.
            </p>
          </Col>
        </Row>
        <IdentifyContainer />
      </Container>
      <br />

      <br />
      <br />
    </Container>
  )
}

export default Identify
