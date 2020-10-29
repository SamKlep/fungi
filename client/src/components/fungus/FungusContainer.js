import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FungusListItem from './FungusListItem'
import './fungus.css'
import Filter from '../search/Filter'

const FungusContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])
  const [q] = useState('')
  const [inputValue, setValue] = useState('')
  const [fungus, setFungus] = useState(inputValue)

  useEffect(() => {
    setLoading(true)
    axios
      .get(`/api/v1/fungus?name=${fungus}`)
      .then((response) => {
        setData(response.data)
        console.log(response.data)
        setLoading(false)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [fungus])

  if (loading) {
    return <p>Loading fungi...</p>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFungus(inputValue)
  }

  const fungus = this.state.fungus ? this.state.fungus : []

  return (
    <div>
      <div className='container mt-3'>
        <h1>Explore</h1>
        <p className='lead'>
          Enter the name of a fungus in question or filter by type
        </p>
        <form onSubmit={handleSubmit}>
          <input
            className='search-explore'
            type='text'
            placeholder='Search fungi'
            value={inputValue}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
        <br />
        <Filter />
        <br />
        <br />
        {q}
        {fungus.data.map((fungus, _id) => (
          <FungusListItem key={_id} fungus={fungus} q={q} />
        ))}
      </div>
    </div>
  )
}

export default FungusContainer
