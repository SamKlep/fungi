import React from 'react'
import Info from '../Info'
import AllFungi from './AllFungi'
import Define from '../Define'
import Pills from '../Pills'
import { Container } from 'react-bootstrap'

const Learn = () => {
  return (
    <Container className='w-50'>
      <Pills />
      <Info />
      <Define />
      <AllFungi />
    </Container>
  )
}

export default Learn
