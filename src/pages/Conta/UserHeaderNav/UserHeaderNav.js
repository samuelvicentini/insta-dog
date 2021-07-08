import React from 'react';

import { UserContext } from '../../../context/UserContext';

import { NavLink } from 'react-router-dom';

import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';

import style from './style.module.css';

const UserHeaderNav = () => {
  const [mobile, setMobile] = React.useState(null);
  const { userLogout } = React.useContext(UserContext);

  return (
    <nav className={style.nav}>
      <NavLink to='/conta' end activeClassName={style.active}>
        <MinhasFotos />
        {mobile && 'Minhas Fotos'}
      </NavLink>
      <NavLink to='/conta/estatisticas' activeClassName={style.active}>
        <Estatisticas />
        {mobile && 'Estatísticas'}
      </NavLink>
      <NavLink to='/conta/postar' activeClassName={style.active}>
        <AdicionarFoto />
        {mobile && 'Adicionar Foto'}
      </NavLink>
      <button onClick={userLogout}>
        <Sair />
        {mobile && 'Sair'}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
