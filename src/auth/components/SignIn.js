import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './signin.css'
import { signIn } from '../api'
import messages from '../messages'

class SignIn extends Component {
  constructor () {
    super()

    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = event => this.setState({
    [event.target.name]: event.target.value
  })

  onSignIn = event => {
    event.preventDefault()

    const { alert, history, setUser } = this.props

    signIn(this.state)
      .then(res => setUser(res.data.user))
      .then(() => alert(messages.signInSuccess, 'success'))
      .then(() => history.push('/'))
      .catch(error => {
        console.error(error)
        this.setState({ email: '', password: '' })
        alert(messages.signInFailure, 'danger')
      })
  }

  render () {
    const { email, password } = this.state

    return (
      <div className="card d-flex align-items-center border-n" >
        <div className="card col-md-6  col-sm-12 py-1 my-5 backgg rounded-">
          
      <form className='auth-form' onSubmit={this.onSignIn}>
        <h3>Sign In</h3>
        <div className="form-group">
        <label htmlFor="email">Email</label>
        <input className="form-control"
          required
          type="email"
          name="email"
          value={email}
          placeholder="Email"
          onChange={this.handleChange}
        /></div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <input className="form-control"
          required
          name="password"
          value={password}
          type="password"
          placeholder="Password"
          onChange={this.handleChange}
        />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Sign In</button>
      </form>
      </div>
      </div>

    )
  }
}

export default withRouter(SignIn)
