import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Figure>
              <a href='/info'>
                <Figure.Image
                  width={300}
                  height={300}
                  alt='171x180'
                  src='/img/main_fungi1.jpeg'
                />
              </a>
              <hr />
              <Figure.Caption>
                A mushroom or toadstool is the fleshy, spore-bearing fruiting
                body of a fungus, typically produced above ground, on soil, or
                on its food source...
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <a href='/history'>
                <Figure.Image
                  width={300}
                  height={300}
                  alt='171x180'
                  src='/img/main_fungi2.jpeg'
                />
              </a>
              <hr />
              <Figure.Caption>
                Throughout history mushrooms have gained many varying
                reputations, considered both food and foe. Today it is easy for
                us to find safe, tasty mushrooms at the grocery store, but it
                wasn't always this way...
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <a href='/breathe'>
                <Figure.Image
                  width={300}
                  height={300}
                  alt='171x180'
                  src='/img/main_fungi3.jpeg'
                />
              </a>
              <hr />
              <Figure.Caption>
                Cultures around the world have eaten or used mushrooms
                medicinally for centuries, dating all the way back to ancient
                Egypt. Legend has it...
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
