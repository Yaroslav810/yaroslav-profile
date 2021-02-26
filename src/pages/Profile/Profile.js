import React from 'react';
import './Profile.css';

import ContactsSection from "./components/ContactsSection/ContactsSection";
import Footer from "../../components/Footer/Footer"

let response = {
  name: 'Ярослав Кузьмин',
  text: "Всем привет! &#128075;<br /> Меня зовут Ярослав! Я учусь в Волгатехе &#128293; " +
      "на специальности Программная инженерия. <br /> Эта страница постепенно будет наполняться контентом! Здесь я " +
      "буду рассказывать про интересные вещи, связанные с IT сферой, а также про интересующие меня темы &#128540; ",
  about: "Программирование заинтересовало меня ещё в начальной школе &#127890;. Тогда это были интересные рисунки " +
      "черепашкой в «Логомирах» &#128034;<br /> и ''увлекательные'' соревнования роботов, собранных из «LEGO Mindstorms» &#129302;  С тех пор прошло" +
      " уже много лет и на данный момент я разрабатываю сайты и web-приложения, использую такие инструменты, как React, Vue, также PHP и Symfony 4.",
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
            <div className="profile__text" dangerouslySetInnerHTML={{__html: response.text}} />
            <div className="profile__about" dangerouslySetInnerHTML={{__html: response.about}} />
            <ContactsSection socialNetworks={ response.socialNetworks } />
          </div>
        </div>
        <Footer />
      </div>
  );
}

export default Profile;
