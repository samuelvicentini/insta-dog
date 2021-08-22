import React from 'react';

import { ReactComponent as Dogs } from '../../Assets/dogs-footer.svg';

import style from './style.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos reservados.</p>
    </footer>
  );
};

export default Footer;
