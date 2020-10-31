import React from 'react'
import '../../App.css'
import MedicinalItem from './MedicinalItem'

const MedicinalGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <MedicinalItem key={fungus._id} fungus={fungus}></MedicinalItem>
      ))}
    </section>
  )
}

export default MedicinalGrid
