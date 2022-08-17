import { Component } from "react"
import { connect } from "react-redux"
import { updateContact } from "../store/actions/ContactActions"
import { contactService } from "../services/ContactService"
import { Link } from "react-router-dom"
class _ContactEdit extends Component {
  state = {
    contact: null,
  }

  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = contactId
      ? await contactService.getContactById(contactId)
      : contactService.getEmptyContact()
    this.setState({ contact }, () => {
      // this.inputRef.current.focus()
    })
  }

  inputRefFunc = (elInput) => {
    elInput && elInput.focus()
  }

  onSaveContact = async (ev) => {
    ev.preventDefault()
    const newContact = await this.props.updateContact({ ...this.state.contact })
    this.props.history.push(`/contact/${newContact._id}`)
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.type === "number" ? +target.value || "" : target.value
    this.setState((prevState) => ({
      contact: { ...prevState.contact, [field]: value },
    }))
  }

  componentWillUnmount() {}

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    const contactImg = `https://robohash.org/${
      contact.name ? contact.name : "undefind"
    }`

    return (
      <section className='contact-edit container margin flex column'>
        <div className='edit-header flex space-between'>
          <Link
            title='Back to list'
            className='b-btn'
            to={`/contact/${contact._id ? contact._id : ""}`}
          >
            <img
              className='back-img'
              src='https://cdn-icons-png.flaticon.com/512/189/189252.png'
              alt=''
            />
          </Link>
          <h1 className='title'>{contact._id ? "Edit" : "Add"} Contact</h1>
          <div className='space'></div>
        </div>
        <div className="c-top flex ">
          <img className='c-img' src={contactImg} alt='' />

          <form className='form-edit flex column' onSubmit={this.onSaveContact}>
            <label htmlFor='name'>
              <span>Name: </span>
              <input
                className='input-name'
                required
                onChange={this.handleChange}
                type='text'
                id='name'
                name='name'
                placeholder='Name'
                value={contact.name}
              />
            </label>

            <label htmlFor='phone'>
              <span>Phone: </span>
              <input
                className='input-phone'
                required
                onChange={this.handleChange}
                type='text'
                id='phone'
                name='phone'
                placeholder='Phoner'
                value={contact.phone}
              />
            </label>

            <label htmlFor='email'>
              <span>Email: </span>
              <input
                className='input-email'
                required
                onChange={this.handleChange}
                type='email'
                id='email'
                name='email'
                placeholder='Email'
                value={contact.email}
              />
            </label>
            <button className='btn-save'>{contact._id ? "Save" : "Add"}</button>
          </form>
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contactModule.contacts,
  }
}

const mapDispatchToProps = {
  updateContact,
}

export const ContactEdit = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactEdit)
