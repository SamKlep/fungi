import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../../App.css'
import EdibleGrid from '../../components/edible/EdibleGrid'
import { Container, Button } from 'react-bootstrap'

import PoisonousContent from '../poisonous/PoisonousContent'

const Breathe = () => {
  const [fungi, setFungus] = useState([])
  const [isLoading, setIsLoading] = useState([true])

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios.post(`/api/v1/fungus/search?q=poisonous`)

      console.log(result.data)
      setFungus(result.data)
      setIsLoading(false)
    }

    fetchItems()
  }, [])

  return (
    <Container>
      <br />
      <a href='/explore'>
        <Button className='mr-auto' size='lg' variant='outline-info'>
          Go back
        </Button>
      </a>
      <div className='container mt-5 mb-5'>
        <PoisonousContent />
        <EdibleGrid isLoading={isLoading} fungi={fungi} />
      </div>
      <br />
      =
      <br />
      <br />
    </Container>
  )
}

export default Breathe
