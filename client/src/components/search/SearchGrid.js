import React from 'react'
import '../../App.css'
import SearchItem from './SearchItem'

const SearchGrid = ({ fungi, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className=' pill-links'>
      {fungi.data.map((fungus) => (
        <SearchItem key={fungus._id} fungus={fungus}></SearchItem>
      ))}
    </section>
  )
}

export default SearchGrid
