import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ListGroup, Card } from 'react-bootstrap'

const FungusScreen = ({ match }) => {
  const [fungus, setFungus] = useState({})

  useEffect(() => {
    const fetchFungus = async () => {
      const { data } = await axios.get(`/api/v1/fungus/${match.params.id}`)

      console.log(data)
      setFungus(data.data)
    }

    fetchFungus()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <div className='container mb-5'>
        <Link className='btn btn-light my-5 mx-auto' to='/explore'>
          Go Back
        </Link>

        <div className='container  m-auto mb-5'>
          <Card className='mx-auto mb-5' style={{ width: '36rem' }}>
            <Card.Img variant='top' src={fungus.imgUrl} />
            <Card.Body>
              <Card.Title>{fungus.name}</Card.Title>

              <ListGroup variant='flush'>
                <ListGroup.Item className='bg-light'>
                  <strong> Sub-Name: </strong>
                  {fungus.subname}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>Family: </strong>
                  {fungus.family}
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  <strong> Location: </strong>
                  {fungus.location}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong> Dimensions: </strong>
                  {fungus.dimensions}
                </ListGroup.Item>
                <ListGroup.Item className='bg-light'>
                  {fungus.edible === true ? 'Edible' : 'Inedible'}
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong> Similar: </strong>
                  {fungus.similar}
                </ListGroup.Item>
              </ListGroup>
              <Card.Text>
                <strong> Description: </strong>
                {fungus.description}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <br />
      <br />
    </>
  )
}

export default FungusScreen
