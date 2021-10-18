import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './ContactContext';
import contactReducer from './contactReducer';
import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACTS,
    CLEAR_CONTACTS,
    CLEAR_FILTER,
    CONTACT_ERROR
} from '../types'




const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 1,
                name: "Mani",
                email: "mani.mgh@gmail.com",
                phone: "0173445",
                type: "professional"
            },
            {
                id: 2,
                name: "Sahar",
                email: "sahar.mgh@gmail.com",
                phone: "6786353",
                type: "personal"
            },
            {
                id: 3,
                name: "Mehdi",
                email: "mehdi.rahmaniyan@gmail.com",
                phone: "334789456",
                type: "professional"
            }

        ]
    };
    const [state, dispatch] = useReducer(contactReducer, initialState)
    //Add Contact
    //Delte Contact
    // Set Current Contact


    return (
        <ContactContext.Provider

            value={{ contacts: state.contacts }}
        >
            {props.children}
        </ContactContext.Provider>
    )
}
export default ContactState;
