import React from 'react'
import { Form, Button } from 'react-bootstrap'

const Submit = () => {
  return (
    <div className='container bg-info text-dark p-5 mb-3'>
      <Form>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>
            <h4>Join Our Mailing List!</h4>
          </Form.Label>
          <Form.Control type='password' placeholder='Enter an email' />
        </Form.Group>

        <Button variant='btn btn-lg btn-block btn-dark' type='submit'>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default Submit
