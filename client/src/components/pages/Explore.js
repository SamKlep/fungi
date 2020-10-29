import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import FungiGrid from '../fungi/FungiGrid'
import Search from '../fungi/Search'
import Filter from '../search/Filter'

const Explore = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`/api/v1/fungus`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container mt-5 mb-5'>
      <h1>Explore</h1>
      <p>Enter the name of a fungus in question</p>

      <Filter />
      <FungiGrid isLoading={isLoading} fungi={fungi} />
    </div>
  )
}

export default Explore
