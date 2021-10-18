import React from 'react'


export default function ContactItem({ contact }) {
    const { id, name, email, phone, type } = contact
    return (
        <div className="card bg-light">
            <h3 className="text-primary text-left">
                {name} {' '} 
                <span className={type==='professional'?'badge badge-primary' :'badge badge-success'}>{type}</span>
            </h3>
               
        </div>
    )
}
