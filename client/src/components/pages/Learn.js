import React from 'react'
import Info from '../learn/Info'
import AllFungi from './AllFungi'
import Define from '../learn/Define'
import Pills from '../learn/Pills'
import { Container } from 'react-bootstrap'

const Learn = () => {
  return (
    <Container>
      <Pills />
      <Info />
      <Define />
      <AllFungi />
    </Container>
  )
}

export default Learn
