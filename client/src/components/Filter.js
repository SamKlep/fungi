import React from 'react'
import { Card, CardDeck, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Filter = () => {
  return (
    <div className='container'>
      <CardDeck>
        <Card>
          <Card.Img variant='top' src='/img/fungus1.jpeg' />
          <Card.Body>
            <Card.Title>Information</Card.Title>
            <Card.Text>
              Learn about the history and science of the fungi around you and I.
            </Card.Text>
            <Link to='/learn'>
              <Button variant='info'>Learn</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='/img/fungus2.jpeg' />
          <Card.Body>
            <Card.Title>Fungus</Card.Title>
            <Card.Text>
              Explore all the many species and characteristics of the mushroom
              kingdom with the FungeAPI.
            </Card.Text>
            <Link to='/explore'>
              <Button variant='info'>Explore</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant='top' src='/img/fungus5.jpeg' />
          <Card.Body>
            <Card.Title>Health</Card.Title>
            <Card.Text>
              Take a wider approach to what you may think you know about the
              fungus among-us!
            </Card.Text>
            <Link to='/breathe'>
              <Button variant='info'>Breathe</Button>
            </Link>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  )
}

export default Filter
