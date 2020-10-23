import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const FungusScreen = ({ match }) => {
  const [fungus, setFungus] = useState({})

  useEffect(() => {
    const fetchFungus = async () => {
      const { data } = await axios.get(`/api/v1/fungus/${match.params.id}`)

      console.log(data)
      setFungus(data.data)
    }

    fetchFungus()
    // eslint-disable-next-line
  }, [match])

  return (
    <>
      <Link className='btn btn-light my-3' to='/explore'>
        Go Back
      </Link>
      
      <div className='card'>
        <div className='card-inner'>
          <div className='card-front'>
            <img alt='fungus' src={fungus.imgUrl} />
          </div>
          <div className='card-back'>
            <h1>{fungus.name}</h1>

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

export default FungusScreen
