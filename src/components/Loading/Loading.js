import React from 'react';
import './Loading.css';

import loading from '../../assets/images/loading.gif';

function Loading() {
  return (
      <div className="loading">
        <img src={ loading } alt=""/>
      </div>
  );
}

export default Loading;
