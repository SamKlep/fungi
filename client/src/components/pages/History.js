import React from 'react'
import HistoryInfo from '../history/HistoryInfo'
import HistoryPills from '../history/HistoryPills'
import { Container } from 'react-bootstrap'
import HistoryContent from '../history/HistoryContent'

const History = () => {
  return (
    <Container>
      <HistoryPills />
      <HistoryInfo />
      <HistoryContent />
    </Container>
  )
}

export default History
