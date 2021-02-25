import React from 'react';
import './Loader.css';

import Loading from '../../assets/images/loading.gif';

function Loader() {
  return (
      <div className="loader">
        <img src={ Loading } alt="Лого"/>
      </div>
  );
}

export default Loader;
