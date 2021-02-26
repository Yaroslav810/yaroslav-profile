import React, { useState, useEffect } from 'react';
import './Profile.css';

import ContactsSection from "./components/ContactsSection/ContactsSection";
import Loader from "../../components/Loader/Loader"
import Footer from "../../components/Footer/Footer"
import axios from "axios";

function Profile() {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    axios
        .get('/api/get_profile/index.php')
        .then(response => {
          const profileData = response.data;
          setData(profileData);
          console.log(profileData);
          setLoading(false);
        })
  }, [setData]);

  if (loading) {
    return (
        <Loader />
    )
  }
  return (
      <div className="profile">
        <div className="profile__block">
          <div className="profile__content">
            <div className="profile__avatar">
              <img src={ data.avatar } alt="avatar"/>
            </div>
            <div className="profile__name">
              { data.name }
            </div>
            <div className="delimiter" />
            <div className="profile__about">
              { data.text }
            </div>
            <ContactsSection socialNetworks={ data.socialNetworks } />
          </div>
        </div>
        <Footer />
        <div className="profile__overlay" />
      </div>
  );
}

export default Profile;
