import React from 'react'
import '../fungi/Explore.css'
import EdibleItem from './EdibleItem'

const BreatheGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <EdibleItem key={fungus._id} fungus={fungus}></EdibleItem>
      ))}
    </section>
  )
}

export default BreatheGrid
