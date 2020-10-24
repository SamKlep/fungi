import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import EdibleGrid from '../../components/edible/EdibleGrid'
import EdibleContent from '../edible/EdibleContent'
import EdiblePills from '../../components/EdiblePills'
import { Container } from 'react-bootstrap'

const Breathe = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`/api/v1/fungus?edibility=true`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <Container>
      <EdiblePills />
      <div className='container mt-5 mb-5'>
        <EdibleContent />
        <EdibleGrid isLoading={isLoading} fungi={fungi} />
      </div>
    </Container>
  )
}

export default Breathe
