import React from 'react';
import './Profile.css';

import ContactsSection from "./components/ContactsSection/ContactsSection";
import Footer from "../../components/Footer/Footer"
import avatarImage from "../../assets/images/yaroslav.jpg";

function Profile() {
  return (
      <div className="profile">
        <div className="profile__block">
          <div className="profile__content">
            <div className="profile__avatar">
              <img src={ avatarImage } alt="avatar"/>
            </div>
            <div className="profile__name">
              Кузьмин Ярослав
            </div>
            <div className="delimiter" />
            <div className="profile__about">
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано, Здесь будет что-то написано,
              Здесь будет что-то написано!
            </div>
            <ContactsSection />
          </div>
        </div>
        <Footer />
        <div className="profile__overlay" />
      </div>
  );
}

export default Profile;
