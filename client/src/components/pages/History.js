import React from 'react'
import HistoryInfo from '../learn/HistoryInfo'
import HistoryPills from '../learn/HistoryPills'
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
