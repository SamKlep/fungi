import React from 'react'
import { Nav } from 'react-bootstrap'

const MedicinalPills = () => {
  return (
    <div>
      <Nav
        variant='tabs'
        className='pill-links bg-light justify-content-center'
        defaultActiveKey='/medicinal'>
        <Nav.Item>
          <Nav.Link href='/breathe'>Breathe</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/edible'>Edible</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/medicinal'>Medicinal</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href='/identify'>Identify</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  )
}

export default MedicinalPills
