import React from 'react'
import { Link } from 'react-router-dom'

const FungusItem = ({ fungus }) => {
  console.log(fungus)
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <Link to={`/fungus/${fungus._id}`}>
            <img alt='fungus' src={fungus.imgUrl} />
          </Link>
        </div>
        <div className='card-back'>
          <Link to={`/fungus/${fungus._id}`}>
            <h1>{fungus.name}</h1>
          </Link>
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
    </div>
  )
}

export default FungusItem
