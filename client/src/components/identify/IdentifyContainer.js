import React, { useState, useEffect } from 'react'
import axios from 'axios'
import IdentifyListItem from './IdentifyListItem'
import '../../App.css'

const IdentifyContainer = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState([])
  const [q] = useState('')
  const [inputValue, setValue] = useState('')
  const [fungus, setFungus] = useState(inputValue)

  useEffect(() => {
    setLoading(true)
    axios
      .post(`/api/v1/fungus/search?q=${fungus}`)
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
    <div className='container mt-3'>
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
      <br />
      {q}
      {data.data.map((fungus, _id) => (
        <IdentifyListItem key={_id} fungus={fungus} q={q} />
      ))}
    </div>
  )
}

export default IdentifyContainer
