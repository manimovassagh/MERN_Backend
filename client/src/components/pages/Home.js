import React from 'react'
import Contacts from '../contacts/Contacts'
import UserContext from '../UserContext'
export default function Home() {
    return (
        <div className="grid-2">
            <div>
                {/*contact for come here*/}
            </div>
            <div>
                <Contacts/>
            </div>
        </div>
    )
}
