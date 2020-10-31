import React from 'react'
import { Dropdown } from 'react-bootstrap'

const Filter = () => {
  return (
    <div>
      <Dropdown>
        <Dropdown.Toggle
          variant='info'
          className='text-dark w-100'
          id='dropdown-basic'>
          Filter by
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href='/edible'>Edible</Dropdown.Item>
          <Dropdown.Item href='/medicinal'>Medicinal</Dropdown.Item>
          <Dropdown.Item href='/poisonous'>Poisonous</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Filter
