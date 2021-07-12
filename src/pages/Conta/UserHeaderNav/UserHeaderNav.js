import React from 'react';

import { UserContext } from '../../../context/UserContext';

import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as MinhasFotos } from '../../../Assets/feed.svg';
import { ReactComponent as Estatisticas } from '../../../Assets/estatisticas.svg';
import { ReactComponent as AdicionarFoto } from '../../../Assets/adicionar.svg';
import { ReactComponent as Sair } from '../../../Assets/sair.svg';

import style from './style.module.css';
import useMedia from '../../../Hooks/useMedia';

const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);
  const mobile = useMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = React.useState(false);

  const { pathname } = useLocation();
  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label='Menu'
          className={`${style.mobileButton} ${
            mobileMenu && style.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? style.navMobile : style.nav} ${
          mobileMenu && style.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
