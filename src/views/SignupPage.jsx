import { userService } from "../services/UserService"

import { Component } from "react"
export class SignupPage extends Component {
  state = {
    newUser: "",
  }

  componentDidMount() {}
  componentWillUnmount() {}

  onSignup = (e) => {
    e.preventDefault()
    userService.signup(this.state.newUser.name)
    this.setState({ newUser: "" })
    this.props.history.push("/")
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value || "" : target.value
    this.setState((prevState) => ({
      newUser: { ...prevState.name, [field]: value },
    }))
  }

  render() {
    const { newUser } = this.state
    return (
      <section className='signup-page container margin flex column align-center'>
        <img
          src='https://cdn-icons-png.flaticon.com/512/1490/1490900.png'
          alt=''
        />
        <form
          className='signup-form flex column align-center'
          onSubmit={this.onSignup}
        >
          <label htmlFor='name'>Please enter your name:</label>
          <input
            required
            value={newUser.name}
            onChange={this.handleChange}
            type='text'
            name='name'
            id='name'
            placeholder='Name'
          />
          <button className='signup-btn'>Sign up</button>
        </form>
      </section>
    )
  }
}
