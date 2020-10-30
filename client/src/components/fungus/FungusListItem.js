import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'
import './fungus.css'

const FungusListItem = ({ data }) => {
  return (
    <div className='container m-auto mb-5'>
      <div className='card2 justify-content-md-center '>
        <Image style={{ overflow: 'hidden' }} alt='fungi' src={data.imgUrl} />

        <div className='card-body'>
          <h1>{data.name}</h1>

          <ListGroup>
            <ListGroup.Item className='bg-light'>
              <strong>Family: </strong>
              {data.family}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Sub-Name: </strong>
              {data.subname}
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong> Location: </strong>
              {data.location}
            </ListGroup.Item>
            <ListGroup.Item>
              {data.edible === true ? 'Edible' : 'Inedible'}
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong> Dimensions: </strong>
              {data.dimensions}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong> Description: </strong>
              {data.description}
            </ListGroup.Item>
            <ListGroup.Item className='bg-light'>
              <strong> Similar: </strong>
              {data.similar}
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default FungusListItem
