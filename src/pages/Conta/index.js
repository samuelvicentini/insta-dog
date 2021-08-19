import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Feed from '../../components/Feed';
import { UserContext } from '../../context/UserContext';
import UserHeader from './UserHeader/UserHeader';
import UserPhotoPost from './UserPhotoPost/UserPhotoPost';
import UserStats from './UserStats';

const Conta = () => {
  const { data } = React.useContext(UserContext);

  return (
    <section className='container'>
      <UserHeader />
      <Routes>
        <Route path='/' element={<Feed user={data.id} />} />
        <Route path='postar' element={<UserPhotoPost />} />
        <Route path='estatisticas' element={<UserStats />} />
      </Routes>
    </section>
  );
};

export default Conta;
