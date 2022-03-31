import React, {useState} from 'react'
import './Profile.css'

import Loading from '../../components/Loading/Loading'
import Header from '../../components/Header/Header'
import Delimiter from '../../components/Delimiter/Delimiter'
import Footer from '../../components/Footer/Footer'
import Tools from './components/Tools/Tools'
import Contacts from './components/Contacts/Contacts'

function Profile() {
    const [loading, setLoading] = useState(true)

    window.onload = () => {
        setLoading(false)
    }

    if (loading) {
        return <Loading />
    }
    return (
        <div className="profile">
            <Header />
            <Delimiter />
            <div className="container">
                <div className="profile__content">
                    <div className="profile__text text">
              Всем привет! &#128075;<br />
              Меня зовут <span className="text__marked">Ярослав</span>! Я учусь в Волгатехе &#128293; на специальности Программная инженерия. <br />
              Эта страница постепенно будет наполняться контентом! Здесь я буду рассказывать про интересные вещи,
              связанные с <span className="text__marked">IT сферой</span>, а также про интересующие меня темы &#128540;
                    </div>
                    <div className="profile__about text">
              Программирование заинтересовало меня ещё в начальной школе &#127890;. Тогда это были интересные рисунки черепашкой в «Логомирах»
              &#128034; и ''увлекательные'' соревнования роботов, собранных из «LEGO Mindstorms» &#129302;  С тех пор прошло
              уже много лет и на данный момент я разрабатываю сайты и web-приложения, использую такие инструменты, как React, Vue, а также PHP и Symfony 4.
                    </div>
                </div>
            </div>
            <Tools />
            <Contacts />
            <Footer />


            {/*<div className="profile__block">*/}
            {/*  <div className="profile__content">*/}
            {/*    <div className="profile__avatar">*/}
            {/*      <img src={ avatar } alt="avatar" />*/}
            {/*    </div>*/}
            {/*    <div className="profile__name">*/}
            {/*      { response.name }*/}
            {/*    </div>*/}
            {/*    <div className="delimiter" />*/}
            {/*    <div className="profile__text" dangerouslySetInnerHTML={{__html: response.text}} />*/}
            {/*    <div className="profile__about" dangerouslySetInnerHTML={{__html: response.about}} />*/}
            {/*    <ContactsSection socialNetworks={ response.socialNetworks } />*/}
            {/*  </div>*/}
            {/*</div>*/}
            {/*<div className={ "left-scroll-bar " + (scroll < 300 ? "" : "left-scroll-bar_active") } onClick={ scrollToTop } />*/}
            {/*<Footer />*/}
        </div>
    )
}

export default Profile
