import React from 'react'
import './fungus.css'

const FungusListItem = ({ fungus }) => {
  return (
    <div className='card2'>
      <img alt='fungi' src={fungus.imgUrl} />

      <div className='card-body'>
        <h1>{fungus.name}</h1>

        <ul>
          <li>
            <strong>Family: </strong>
            {fungus.family}
          </li>
          <li>
            <strong> Sub-Name: </strong>
            {fungus.subname}
          </li>
          <li>
            <strong> Location: </strong>
            {fungus.location}
          </li>
          <li>{fungus.edible === true ? 'Edible' : 'Inedible'}</li>
        </ul>
      </div>
    </div>
  )
}

export default FungusListItem
