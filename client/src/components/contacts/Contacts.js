import React, { useContext, Fragment } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

export default function Contacts() {
    const contactContext = useContext(ContactContext)
    const { contacts } = contactContext
    return (
        <Fragment>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact}/>
            ))}
           </Fragment>
    )
}
