import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const HistoryInfo = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>History</h1>
          <Image className='mb-3' src='/img/fungus.jpeg' />
          <p>Delicious, deadly, magical, intoxicating, mysterious...</p>

          <br />
        </Col>
      </Row>
    </div>
  )
}

export default HistoryInfo
