import React from 'react'
import { Image, Row, Col } from 'react-bootstrap'

const HistoryInfo = () => {
  return (
    <div className='text-center container mt-5 mb-3'>
      <Row className='justify-content-md-center pill-links'>
        <Col lg='8'>
          <h1 className='display-4'>History</h1>
          <Image className='mb-3' src='/img/fungus.jpeg' />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            eius voluptatum esse corporis sed et, nulla ratione labore illum
            nobis odio inventore incidunt quam impedit consequuntur debitis ab
            error nihil.
          </p>

          <br />
        </Col>
      </Row>
    </div>
  )
}

export default HistoryInfo
