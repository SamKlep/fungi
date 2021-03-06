import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import FungiGrid from '../fungi/FungiGrid'

const AllFungi = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.get(`/api/v1/fungus`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <div className='container mb-5'>
      <FungiGrid isLoading={isLoading} fungi={fungi} />
      <br />
    </div>
  )
}

export default AllFungi
