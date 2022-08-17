import { Component } from "react"
import { connect } from 'react-redux'
import ContactList from "../cmps/ContactList.jsx"
import { ContactFilter } from "../cmps/ContentFilter"
import { Link } from "react-router-dom"
import { loadContacts,setFilterBy } from "../store/actions/ContactActions"

class _ContactPage extends Component {
  
  async componentDidMount() {
    await this.props.loadContacts()
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className='contact-page container margin'>
        <h1 className='title'>Contacts</h1>
        <div className='list-header flex align-center space-between'>
          <ContactFilter onChangeFilter={this.onChangeFilter} />
          <Link title='Add contact' className='add-c' to='/contact/edit'>
            <img
              src='https://cdn-icons-png.flaticon.com/512/1828/1828817.png'
              alt=''
            />
          </Link>
        </div>
        <ContactList contacts={contacts} />
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
  loadContacts,
  setFilterBy,
}

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage)
