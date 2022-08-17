import React from "react"
import ContactPreview from "./ContactPreview"

export default function ContactList({contacts}) {
  return (
    <div className="contact-list ">
      {contacts.map((c) => (
        <ContactPreview key={c._id} contact={c}  />
      ))}
    </div>
  )
}
