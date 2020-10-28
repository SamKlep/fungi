import React from 'react'
import { Container, Row, Col, Figure } from 'react-bootstrap'

const Main = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <Figure>
              <Figure.Image
                width={300}
                height={300}
                alt='171x180'
                src='/img/main_fungi1.jpeg'
              />
              <hr />
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
                width={300}
                height={300}
                alt='171x180'
                src='/img/main_fungi2.jpeg'
              />
              <hr />
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
                width={300}
                height={300}
                alt='171x180'
                src='/img/main_fungi3.jpeg'
              />
              <hr />
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
