import React from "react"
import { Link } from "react-router-dom"

export default function ContactPreview({ contact }) {
  const contactImgUrl = `https://robohash.org/${contact.name}`
  return (
    <Link to={`/contact/${contact._id}`}
      className='contact-preview flex align-center'
    >
      <img className='contact-img' src={contactImgUrl} alt='User img' />
      <div className='contact-info'>
        <h1 className='c-name'>{contact.name}</h1>
      </div>
    </Link>
  )
}
