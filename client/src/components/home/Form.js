import React from 'react'

export default class Form extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this)
    this.state = {
      status: '',
    }
  }

  render() {
    const { status } = this.state
    return (
      <form
        onSubmit={this.submitForm}
        action='https://formspree.io/f/xvovbddn'
        method='POST'>
        <div className='form=group'>
          <label>Email</label>
          <input className='form-control' type='email' name='email' />
        </div>
        <div className='form=group mt-2'>
          <label>Message</label>
          <input className='form-control' type='text' name='message' />
        </div>
        {status === 'SUCCESS' ? (
          <p>Thanks!</p>
        ) : (
          <button className='btn btn-dark mt-3'>Submit</button>
        )}
        {status === 'ERROR' && <p>Ooops! There was an error.</p>}
      </form>
    )
  }

  submitForm(ev) {
    ev.preventDefault()
    const form = ev.target
    const data = new FormData(form)
    const xhr = new XMLHttpRequest()
    xhr.open(form.method, form.action)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return
      if (xhr.status === 200) {
        form.reset()
        this.setState({ status: 'SUCCESS' })
      } else {
        this.setState({ status: 'ERROR' })
      }
    }
    xhr.send(data)
  }
}
