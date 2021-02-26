import React from 'react';
import './Profile.css';

import ContactsSection from "./components/ContactsSection/ContactsSection";
import Footer from "../../components/Footer/Footer"

let response = {
  name: 'Ярослав Кузьмин',
  text: 'Здесь будет что-то написано, Здесь будет что-то написано, ' +
        'Здесь будет что-то написано, Здесь будет что-то написано, ' +
        'Здесь будет что-то написано, Здесь будет что-то написано, ' +
        'Здесь будет что-то написано, Здесь будет что-то написано, ' +
        'Здесь будет что-то написано, Здесь будет что-то написано, ' +
        'Здесь будет что-то написано, Здесь будет что-то написано',
  avatar: 'https://psv4.userapi.com/c532036/u188735571/docs/d14/e0757d743a0d/yaroslav.jpg?extra=v2ErZl3slV_any5vFDneaXBo5lKTLVwCjKXhDwchD9RycNRnlcjjdZ454GbxNac5MqrpqQMn2Cqk8jgdkgKA1FPZrz1qap3VQhDf51wzkC1Ypd0V7OfLl6uD3GgUjhsIN6w0RD14CPhGnOITRpRSw63NCg',
  socialNetworks: [
    {
      id: 'vk',
      title: 'VK',
      link: 'https://vk.com/yariklend'
    },
    {
      id: 'instagram',
      title: 'Instagram',
      link: 'https://www.instagram.com/vso.tip.top/'
    },
    {
      id: 'telegram',
      title: 'Telegram',
      link: 'https://t.me/vsotiptop'
    },
    {
      id: 'github',
      title: 'GitHub',
      link: 'https://github.com/Yaroslav810'
    },
    {
      id: 'youtube',
      title: 'YouTube',
      link: 'https://www.youtube.com/channel/UCuARJ-O5Gvpb8IdxHjXYoQQ'
    },
    {
      id: 'tel',
      title: 'Телефон',
      link: 'tel:+79697783077'
    },
    {
      id: 'email',
      title: 'Почта',
      link: 'mailto:Yaroslav.Kuzmin.01@yandex.ru'
    }
  ]
};

function Profile() {
  return (
      <div className="profile">
        <div className="profile__block">
          <div className="profile__content">
            <div className="profile__avatar">
              <img src={ response.avatar } alt="avatar"/>
            </div>
            <div className="profile__name">
              { response.name }
            </div>
            <div className="delimiter" />
            <div className="profile__about">
              { response.text }
            </div>
            <ContactsSection socialNetworks={ response.socialNetworks } />
          </div>
        </div>
        <Footer />
        <div className="profile__overlay" />
      </div>
  );
}

export default Profile;
