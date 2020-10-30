import React from 'react'
import { Image, ListGroup } from 'react-bootstrap'
import './fungus.css'

const FungusListItem = ({ fungus }) => {
  return (
    <div className='container m-auto mb-5'>
      <div className='card2 justify-content-md-center '>
        <Image style={{ overflow: 'hidden' }} alt='fungi' src={fungus.imgUrl} />

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
          </ListGroup>
        </div>
      </div>
    </div>
  )
}

export default FungusListItem
