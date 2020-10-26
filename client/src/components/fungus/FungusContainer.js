import React, { useState, useEffect } from 'react'
import axios from 'axios'
import FungusListItem from './FungusListItem'
import './fungus.css'

const FungusContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])
  const [q, setQ] = useState('')
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

  return (
    <div>
      <h1>Fungi List</h1>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Search fungi'
          value={inputValue}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>

      {q}
      {data.data.map((fungus, _id) => (
        <FungusListItem key={_id} fungus={fungus} />
      ))}
    </div>
  )
}

export default FungusContainer
