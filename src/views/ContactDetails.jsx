import { Component } from "react"
import { contactService } from "../services/ContactService"
import { Link } from "react-router-dom"
import { TransferFund } from "../cmps/TransferFund"
import { removeContact } from "../store/actions/ContactActions"
import { connect } from "react-redux"
import MoveList from "../cmps/MoveList"
 class _ContactDetails extends Component {
  state = {
    contact: null,
  }
  async componentDidMount() {
    const contactId = this.props.match.params.id
    const contact = await contactService.getContactById(contactId)
    this.setState({ contact })
  }
  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.id !== this.props.match.params.id) {
  //     this.loadRobot()
  //   }
  // }

  onRemoveContact = async () => {
    // await contactService.deleteContact(this.state.contact._id)
    this.props.removeContact(this.state.contact._id)
    this.props.history.push("/contact")
  }

  onBack = () => {
    this.props.history.push("/contact")
  }

  render() {
    const { contact } = this.state
    if (!contact) return <div>Loading...</div>
    const contactImgUrl = `https://robohash.org/${contact.name}`
    return (
      <section className='contact-details flex column container margin'>
        <div className='contact-actions flex space-between align-center'>
          <Link title='Back to list' className='b-btn' to={`/contact`}>
            <img
              className='back-img'
              src='https://cdn-icons-png.flaticon.com/512/189/189252.png'
              alt=''
            />
          </Link>
          <div className=' flex align-center'>
            <Link
              title='Edit contact'
              className='b-btn'
              to={`/contact/edit/${contact._id}`}
            >
              <img
                src='https://cdn-icons.flaticon.com/png/512/5996/premium/5996831.png?token=exp=1660567075~hmac=23c2b8fa2272926a107b6f010c750c9e'
                alt=''
              />
            </Link>
            <button onClick={this.onRemoveContact} className='b-btn'>
              <img
                className='trash-img'
                src='https://cdn-icons.flaticon.com/png/512/5676/premium/5676146.png?token=exp=1660567293~hmac=1d89f60411791dc5507ed7f7fba48ba0'
                alt=''
              />
            </button>
          </div>
        </div>
        <div className='c-top flex'>
          <img src={contactImgUrl} className='c-img' alt='' />
          <div className='contact-info flex column'>
            <span className='tab'>
              <span className='c-name'>Name: </span>
              {contact.name}
            </span>
            <span className='tab'>
              <span className='c-phone'>Phone: </span>
              {contact.phone}
            </span>
            <span className='tab'>
              <span className='c-email'>Email: </span>
              {contact.email}
            </span>
          </div>
        </div>
        <TransferFund contact={contact} />
        <MoveList contact={contact} />
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
  removeContact,
}

export const ContactDetails = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactDetails)
