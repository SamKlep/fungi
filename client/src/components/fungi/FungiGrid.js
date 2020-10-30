import React from 'react'
import './Explore.css'
import FungusItem from './FungusItem'

const FungiGrid = ({ fungi, isLoading }) => {
  console.log(fungi.data)

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {fungi.data.map((fungus) => (
        <FungusItem key={fungus._id} fungus={fungus}></FungusItem>
      ))}
    </section>
  )
}

export default FungiGrid
