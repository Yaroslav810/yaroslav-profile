import React from 'react'
import './Contacts.css'
import {socialNetworks} from '../../../../const/socialNetworks'

function Contacts() {

    return (
        <div className="contacts">
            <ul className="contacts__list list">
                {
                    socialNetworks.map((socialNetwork, index) => (
                        <li key={ index }>
                            <a
                                className="contacts__link link"
                                href={ socialNetwork.link }
                                title={ socialNetwork.title }
                                rel="noreferrer"
                                target="_blank"
                            >
                                { socialNetwork.title }
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Contacts
