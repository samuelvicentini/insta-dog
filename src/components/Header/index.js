import { Link } from 'react-router-dom';

import { ReactComponent as Dogs } from '../../Assets/dogs.svg';

import style from './style.module.css';

const Header = () => {
  return (
    <header className={style.header}>
      <nav className={`${style.nav} container`}>
        <Link className={style.logo} to='/' aria-label='Dogs - Home'>
          <Dogs />
        </Link>
        <Link className={style.login} to='/login'>
          Login | Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
