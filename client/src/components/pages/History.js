import React from 'react'
import HistoryInfo from '../HistoryInfo'
import HistoryPills from '../HistoryPills'
import { Container } from 'react-bootstrap'

const History = () => {
  return (
    <Container>
      <HistoryPills />
      <HistoryInfo />
    </Container>
  )
}

export default History
