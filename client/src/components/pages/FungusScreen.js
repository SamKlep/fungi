import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { ListGroup, Image } from 'react-bootstrap'

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
    <div className='container mb-5'>
      <Link className='btn btn-light my-5' to='/explore'>
        Go Back
      </Link>
      <div className='container m-auto mb-5'>
        <div className='card2 justify-content-md-center '>
          <Image
            style={{ overflow: 'hidden' }}
            alt='fungi'
            src={fungus.imgUrl}
          />

          <div className='card-body'>
            <h1>{fungus.name}</h1>

            <ListGroup>
              <ListGroup.Item className='bg-light'>
                <strong>Family: </strong>
                {fungus.family}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Sub-Name: </strong>
                {fungus.subname}
              </ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                <strong> Location: </strong>
                {fungus.location}
              </ListGroup.Item>
              <ListGroup.Item>
                {fungus.edible === true ? 'Edible' : 'Inedible'}
              </ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                <strong> Dimensions: </strong>
                {fungus.dimensions}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Description: </strong>
                {fungus.description}
              </ListGroup.Item>
              <ListGroup.Item className='bg-light'>
                <strong> Similar: </strong>
                {fungus.similar}
              </ListGroup.Item>
              <ListGroup.Item>
                <strong> Folklore: </strong>
                {fungus.folklore}
              </ListGroup.Item>
            </ListGroup>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FungusScreen
