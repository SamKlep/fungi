import React from 'react'
import { Link } from 'react-router-dom'

const WordItem = ({ words }) => {
  console.log(words)
  return (
    <div className='card'>
      <div className='card-body'>
        <h1>{words.date}</h1>

        <ul>
          <li>{words.shortdef[0]}</li>
          <li>{words.shortdef[1]}</li>
          <li>{words.shortdef[2]}</li>
        </ul>
      </div>
    </div>
  )
}

export default WordItem
