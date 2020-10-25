import React from 'react'
import '../fungi/Explore.css'
import ResultsItem from './ResultsItem'

const Results = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <ResultsItem key={fungus._id} fungus={fungus}></ResultsItem>
      ))}
    </section>
  )
}

export default Results
