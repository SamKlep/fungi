import React from 'react'
import axios from 'axios'
import { Form, Button } from 'react-bootstrap'

class Submit extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      message: '',
    }
  }

  render() {
    return (
      <div className='container bg-info text-dark p-5 mb-3'>
        <Form
          id='contactform'
          onSubmit={this.handleSubmit.bind(this)}
          method='POST'>
          <Form.Group>
            <Form.Label htmlFor='name'>Name</Form.Label>
            <Form.Control
              type='text'
              placeholder='email@example.com'
              value={this.state.name}
              onChange={this.onNameChange.bind(this)}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              placeholder='email@example.com'
              value={this.state.email}
              onChange={this.onEmailChange.bind(this)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label htmlFor='message'>Message</Form.Label>
            <Form.Control
              as='textarea'
              rows={3}
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </Form.Group>
          <Button variant='dark' type='submit'>
            Submit
          </Button>
        </Form>
      </div>
    )
  }
  onNameChange(event) {
    this.setState({ name: event.target.value })
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios({
      method: 'POST',
      url: '/api/v1/fungus/send',
      data: this.state,
    }).then((response) => {
      if (response.data.status === 'success') {
        alert('Message Sent.')
        this.setState({
          name: '',
          email: '',
          message: '',
        })
      } else if (response.data.status === 'fail') {
        alert('Message failed to send.')
      }
    })
  }
}

export default Submit
