import React from 'react'
import { Container, Row, Col, Figure, Image } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt='171x180'
                src='/img/fungus.jpeg'
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum. Nulla vitae
                elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt='171x180'
                src='/img/fungus.jpeg'
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla
                vitae elit libero, a pharetra augue mollis interdum.Nulla vitae
                elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
          <Col>
            <Figure>
              <Figure.Image
                width={171}
                height={180}
                alt='171x180'
                src='/img/fungus.jpeg'
              />
              <Figure.Caption>
                Nulla vitae elit libero, a pharetra augue mollis interdum.Nulla
                vitae elit libero, a pharetra augue mollis interdum.Nulla vitae
                elit libero, a pharetra augue mollis interdum.
              </Figure.Caption>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Main
