import React from 'react'
import '../../App.css'
import ResultsItem from './ResultsItem'

const Results = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='pill-links'>
      {fungi.data.map((fungus) => (
        <ResultsItem key={fungus._id} fungus={fungus}></ResultsItem>
      ))}
    </section>
  )
}

export default Results
