import React, { useState } from 'react';
import { animateScroll } from "react-scroll";
import './Profile.css';
import avatar from "../../assets/images/yaroslav.jpg";

import ContactsSection from "./components/ContactsSection/ContactsSection";
import Loading from "../../components/Loading/Loading";
import Footer from "../../components/Footer/Footer"

let response = {
  name: 'Ярослав Кузьмин',
  text: "Всем привет! &#128075;<br /> Меня зовут Ярослав! Я учусь в Волгатехе &#128293; " +
      "на специальности Программная инженерия. <br /> Эта страница постепенно будет наполняться контентом! Здесь я " +
      "буду рассказывать про интересные вещи, связанные с IT сферой, а также про интересующие меня темы &#128540; ",
  about: "Программирование заинтересовало меня ещё в начальной школе &#127890;. Тогда это были интересные рисунки " +
      "черепашкой в «Логомирах» &#128034;<br /> и ''увлекательные'' соревнования роботов, собранных из «LEGO Mindstorms» &#129302;  С тех пор прошло" +
      " уже много лет и на данный момент я разрабатываю сайты и web-приложения, использую такие инструменты, как React, Vue, а также PHP и Symfony 4.",
  avatar: 'https://psv4.userapi.com/c532036/u188735571/docs/d14/f547383b6a87/yaroslav.jpg?extra=GB4hjeTIdy5eseWC99sZIWa-7xX8FWoBAlivLJabSoZ6bPrTmDqQ9D7UGCfmjolmzyKggd6J3g9HlRYSV_T5F4IYSQbjq_oAYzYfh3yPjOF3glQiSj1yEfpo8TNzDq5YkbiQzZ4y8KpZIstDARzZTbre_w',
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
  const [loading, setLoading] = useState(true);
  const [scroll, setScroll] = useState(0);

  window.onload = () => {
    setLoading(false);
  };

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  }

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading) {
    return <Loading />
  }
  return (
      <div className="profile">
        <div className="profile__block">
          <div className="profile__content">
            <div className="profile__avatar">
              <img src={ avatar } alt="avatar" />
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
        <div className={ "left-scroll-bar " + (scroll < 300 ? "" : "left-scroll-bar_active") } onClick={ scrollToTop } />
        <Footer />
      </div>
  );
}

export default Profile;
