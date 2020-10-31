import React from 'react'
import '../../App.css'
import IdentifyItem from './IdentifyItem'

const IdentifyGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <IdentifyItem key={fungus._id} fungus={fungus}></IdentifyItem>
      ))}
    </section>
  )
}

export default IdentifyGrid
