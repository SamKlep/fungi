import React from 'react'
import WordItem from './WordItem'

const Word = ({ word, isLoading }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className='cards'>
      {word.map((words) => (
        <WordItem key={words.id} words={words}></WordItem>
      ))}
    </section>
  )
}

export default Word
