import React from 'react'
import HistoryInfo from '../HistoryInfo'
import AllFungi from './AllFungi'
import Define from '../Define'
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
