import { Component } from "react"
export class ContactFilter extends Component {
  state = {
    txt: "",
  }
  componentDidMount() {}
  componentWillUnmount() {}

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState({ [field]: value }, () => {
      this.props.onChangeFilter({ ...this.state })
    })
  }
  render() {
    const { txt } = this.state
    return (
      <section className='c-filter container'>
        <input
          value={txt}
          name='txt'
          id='txt'
          type='text'
          onChange={this.handleChange}
          className='search-contact'
          placeholder='Search contact'
        />
      </section>
    )
  }
}
