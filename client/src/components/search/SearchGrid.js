import React from 'react'
import '../fungi/Explore.css'
import SearchItem from './SearchItem'

const SearchGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards pill-links'>
      {fungi.data.map((fungus) => (
        <SearchItem key={fungus._id} fungus={fungus}></SearchItem>
      ))}
    </section>
  )
}

export default SearchGrid
