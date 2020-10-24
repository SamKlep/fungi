import React from 'react'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

const WordItem = ({ words }) => {
  console.log(words)
  return (
    <ListGroup>
      <ListGroup.Item className='bg-info text-dark'>
        <h3>{words.date}</h3>
      </ListGroup.Item>
      <ListGroup.Item className='text-center text-white bg-dark'>
        <h5>Definition</h5>
      </ListGroup.Item>
      <ListGroup.Item className='bg-light'>{words.shortdef[0]}</ListGroup.Item>
    </ListGroup>
  )
}

export default WordItem
