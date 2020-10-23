import React from 'react'
import { Link } from 'react-router-dom'

const WordItem = ({ words }) => {
  console.log(words)
  return (
    <div className='card'>
      <div className='card-title'>{words.date}</div>
      <div className='card-body'>
        <ul>
          <li>{words.shortdef[0]}</li>
          <li>{words.shortdef[1]}</li>
          <li>{words.shortdef[2]}</li>
          <li>{words.fl}</li>
        </ul>
      </div>
    </div>
  )
}

export default WordItem
