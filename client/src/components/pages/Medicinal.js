import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MedicinalPills from '../medicinal/MedicinalPills'
import MedicinalContainer from '../medicinal/MedicinalContainer'
import MedicinalContent from '../medicinal/MedicinalContent'
import Pages from '../learn/Pages'

const Identify = () => {
  return (
    <Container>
      <MedicinalPills />
      <MedicinalContent />
      <MedicinalContainer />
      <br />
      <Pages />
      <br />
      <br />
    </Container>
  )
}

export default Identify
