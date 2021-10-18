import React from 'react'
import _ from "lodash";
import  PropTypes  from 'prop-types';
export default function ContactItem({ contact }) {
    const { id, name, email, phone, type } = contact
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} {' '}
                <span
                    style={{ float: 'right' }}
                    className={type === 'professional' ? 'badge badge-primary' : 'badge badge-success'}>{_.capitalize(type)}</span>
            </h3>
            <ul>
                {email && (
                    <li >
                        <i className='fas fa-envelope-open' />
                        {email}
                    </li>
                )}

                {phone && (
                    <li  >
                        <i className='fas fa-phone' />
                        {phone}</li>
                )}
            </ul>
            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}

ContactItem.prototype={
    contact: PropTypes.object.isRequired
}
