import React, { useState, useEffect } from 'react'
import Word from './Word'
import axios from 'axios'

const Define = () => {
  const [word, setWord] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.dictionaryapi.com/api/v3/references/collegiate/json/mushroom?key=adb83fbb-4540-4d90-b25c-d503b0fde007`
      )

      console.log(result.data)
      setWord(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container mb-5'>
      <Word isLoading={isLoading} word={word} />
    </div>
  )
}

export default Define
