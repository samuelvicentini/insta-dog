import React from 'react';

import Image from '../../../Helper/Image';

import style from './style.module.css';

const FeedPhotosItem = ({ photo, setModalPhoto }) => {
  function handleClick() {
    setModalPhoto(photo);
  }

  return (
    <li className={style.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={style.view}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
