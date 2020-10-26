import React from 'react'

const FungusListItem = ({ fungus }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <img alt='fungi' src={fungus.imgUrl} />
        </div>
        <div className='card-back'>
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
    </div>
  )
}

export default FungusListItem
