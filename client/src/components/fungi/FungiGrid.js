import React from 'react'
import '../../App.css'
import FungusItem from './FungusItem'

const FungiGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {fungi.data.map((fungus, _id) => (
        <FungusItem key={_id} fungus={fungus}></FungusItem>
      ))}
    </section>
  )
}

export default FungiGrid
