import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import FungiGrid from '../fungi/FungiGrid'
import Search from '../fungi/Search'
import Dropdown from '../search/Dropdown'

const Explore = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])
  const [query, setQuery] = useState('')

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`/api/v1/fungus?name=${query}`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [query])

  return (
    <div className='container mt-5 mb-5'>
      <h1>Explore</h1>
      <Search getQuery={(q) => setQuery(q)} />
      <Dropdown />
      <FungiGrid isLoading={isLoading} fungi={fungi} />
    </div>
  )
}

export default Explore
