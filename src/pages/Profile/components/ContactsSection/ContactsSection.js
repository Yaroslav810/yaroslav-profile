import React, { useState } from 'react';
import './ContactsSection.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle, faPhone, faAt } from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faVk,
  faInstagram,
  faWhatsapp,
  faViber,
  faTelegram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons';

function ContactsSection(props) {
  const getSocialNetworkIconById = (socialNetworkId) => {
    switch (socialNetworkId) {
      case 'github': return <FontAwesomeIcon icon={ faGithub } size="3x" />;
      case 'vk': return <FontAwesomeIcon icon={ faVk } size="3x" />;
      case 'instagram': return <FontAwesomeIcon icon={ faInstagram } size="3x" />;
      case 'whatsapp': return <FontAwesomeIcon icon={ faWhatsapp } size="3x" />;
      case 'viber': return <FontAwesomeIcon icon={ faViber } size="3x" />;
      case 'youtube': return <FontAwesomeIcon icon={ faYoutube } size="3x" />;
      case 'telegram': return <FontAwesomeIcon icon={ faTelegram } size="3x" />;
      case 'tel': return <FontAwesomeIcon icon={ faPhone } size="3x" />
      case 'email': return <FontAwesomeIcon icon={ faAt } size="3x" />
      default: return <FontAwesomeIcon icon={ faQuestionCircle } size="3x" />;
    }
  }


  return(
      <div className="contacts">
        <ul className="contacts__list">
          {
            props.socialNetworks.map((socialNetwork, index) => (
                <li key={ index }>
                  <a
                      className="contacts__link link"
                      href={ socialNetwork.link }
                      title={ socialNetwork.title }
                      target="_blank"
                  >
                    <span className="link__content">
                      <span className="link__icon">{ getSocialNetworkIconById(socialNetwork.id) }</span>
                      <span className="link__title">{ socialNetwork.title }</span>
                    </span>
                  </a>
                </li>
            ))
          }
        </ul>
      </div>
  );
}

export default ContactsSection;
