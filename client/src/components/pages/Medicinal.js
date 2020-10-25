import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import MedicinalPills from '../medicinal/MedicinalPills'
import MedicinalContent from '../medicinal/MedicinalContent'
import MedicinalGrid from '../medicinal/MedicinalGrid'
import { Container } from 'react-bootstrap'

const Medicinal = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`/api/v1/fungus?medicinal=true`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <Container>
      <MedicinalPills />
      <div className='container mt-5 mb-5'>
        <MedicinalContent />
        <MedicinalGrid isLoading={isLoading} fungi={fungi} />
      </div>
    </Container>
  )
}

export default Medicinal
