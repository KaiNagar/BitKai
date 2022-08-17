import { contactService } from "../../services/ContactService.js"

export function loadContacts() {
  return async (dispatch, getState) => {
    try {
      const { filterBy } = getState().contactModule
      const contacts = await contactService.getContacts(filterBy)
      dispatch({ type: "SET_CONTACTS", contacts })
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function removeContact(contactId) {
  return async (dispatch) => {
    try {
      const contact = await contactService.deleteContact(contactId)
      dispatch({ type: "REMOVE_CONTACT", contactId })
      return contact
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function updateContact(contact) {
  return async (dispatch) => {
    try {
      dispatch({ type: "UPDATE_CONTACT", contact })
      const newContact = await contactService.saveContact(contact)
      return newContact
    } catch (err) {
      console.log("err:", err)
    }
  }
}
export function addContact(contact) {
  return async (dispatch) => {
    try {
      dispatch({ type: "ADD_CONTACT", contact })
      const newContact = await contactService.saveContact(contact)
      return newContact
    } catch (err) {
      console.log("err:", err)
    }
  }
}

export function setFilterBy(filterBy) {
  return (dispatch) => {
    dispatch({ type: "SET_FILTER_BY", filterBy })
  }
}
