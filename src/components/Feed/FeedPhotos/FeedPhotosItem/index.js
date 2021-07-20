import React from 'react';

import style from './style.module.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={style.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={style.view}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
