import React,{useContext} from 'react'
import ContactContext from '../context/contact/ContactContext'



export default function UserContext() {
    const contactContext = useContext(ContactContext)
    console.log(contactContext)
    return (
        <div>

            <h1>Check</h1>
        </div>
    )
}
