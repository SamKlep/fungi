import React from 'react'
import '../../App.css'
import BreatheItem from './BreatheItem'

const BreatheGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <BreatheItem key={fungus._id} fungus={fungus}></BreatheItem>
      ))}
    </section>
  )
}

export default BreatheGrid
