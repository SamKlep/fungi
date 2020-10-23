import React from 'react'
import { Link } from 'react-router-dom'

const Fungus = ({ fungus }) => {
  return (
      <>
    <Link className='btn btn-light my-3' to='/explore'>
        Go Back
      </Link>
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
              <strong>Sub-name:</strong> {fungus.subName}
            </li>
            <li>
              <strong>Family:</strong> {fungus.family}
            </li>
            <li>
              <strong>Location:</strong> {fungus.location}
            </li>
            <li>
              <strong>Dimensions:</strong> {fungus.dimensions}
            </li>
            <li>
              <strong>Description:</strong> {fungus.description}
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}

export default Fungus
