import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import LoginForm from './Loginform';
import LoginCreate from './LoginCreate';
import LoginPasswordLost from './LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset';
import { UserContext } from '../../context/UserContext';

import style from './style.module.css';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to='/conta' />;

  return (
    <section className={style.login}>
      <div className={style.forms}>
        <Routes>
          <Route path='/' element={<LoginForm />} />
          <Route path='criar' element={<LoginCreate />} />
          <Route path='perdeu' element={<LoginPasswordLost />} />
          <Route path='resetar' element={<LoginPasswordReset />} />
        </Routes>
      </div>
    </section>
  );
};

export default Login;
