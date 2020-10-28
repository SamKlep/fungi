import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const HistoryInfo = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>History</h1>
          <Image
            className='mb-5'
            width={400}
            height={300}
            alt='171x180'
            src='/img/fungus2.jpeg'
          />
          <p>Delicious, deadly, magical, intoxicating, mysterious...</p>

          <br />
        </Col>
      </Row>
    </div>
  )
}

export default HistoryInfo
