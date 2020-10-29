import React from 'react'
import Info from '../learn/Content'
import Define from '../learn/Define'
import Pills from '../learn/Pills'
import { Container } from 'react-bootstrap'

const Learn = () => {
  return (
    <Container>
      <Pills />
      <Info />
      <Define />
    </Container>
  )
}

export default Learn
