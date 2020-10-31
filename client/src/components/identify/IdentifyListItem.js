import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css'

const FungusListItem = ({ fungus }) => {
  return (
    <div class='row'>
      <div class='col-lg-4 col-md-3 col-sm-6'>
        <div className='card'>
          <div className='card-inner'>
            <div className='card-front'>
              <img alt='fungus' src={fungus.imgUrl} />
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
      </div>
    </div>
  )
}

export default FungusListItem
