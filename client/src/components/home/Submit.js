import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Submit = () => {
  return (
    <div className='container bg-info text-dark p-5 mb-3'>
      <Form>
        <Form.Group controlId='exampleForm.ControlInput1'>
          <Form.Label>Email</Form.Label>
          <Form.Control type='email' placeholder='email@example.com' />
        </Form.Group>
        <Form.Group controlId='exampleForm.ControlSelect1'>
          <Form.Label>Subject</Form.Label>
          <Form.Control as='select'>
            <option>Add/Edit information</option>
            <option>Contact</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>
        <Button variant='dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Submit
