import { Link } from 'react-router-dom';

import style from './style.module.css';

const Header = () => {
  return (
    <div className={style.header}>
      <nav className='container'>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login | Criar</Link>
      </nav>
    </div>
  );
};

export default Header;
