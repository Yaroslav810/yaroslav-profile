import React from 'react';
import './Contacts.css';

function Contacts(props) {

  return(
      <div className="contacts">
        <ul className="contacts__list list">
          {
            props.socialNetworks.map((socialNetwork, index) => (
                <li key={ index }>
                  <a
                      className="contacts__link link"
                      href={ socialNetwork.link }
                      title={ socialNetwork.title }
                      target="_blank"
                  >
                    { socialNetwork.title }
                  </a>
                </li>
            ))
          }
        </ul>
      </div>
  );
}

export default Contacts;
