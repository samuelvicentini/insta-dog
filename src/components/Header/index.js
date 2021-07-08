import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';

import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

import style from './style.module.css';

const Header = () => {
  const { data } = React.useContext(UserContext);

  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        {data ? (
          <Link className={style.login} to='/login'>
            {data.nome}
          </Link>
        ) : (
          <Link className={style.login} to='/login'>
            Login | Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
