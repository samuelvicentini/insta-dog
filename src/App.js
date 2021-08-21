import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './context/UserContext';

import ProtectedRouter from './components/Helper/ProtectedRouter';

import Home from './pages/Home';
import Login from './pages/Login';
import Conta from './pages/Conta';

import Header from './components/Header';
import Footer from './components/Footer';
import Photo from './components/PhotoContent/Photo';
import UserProfile from './pages/Conta/UserProfile';
import NotFound from './pages/NotFound';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
          <Route path='foto/:id' element={<Photo />} />
          <Route path='perfil/:user' element={<UserProfile />} />
          <ProtectedRouter path='conta/*' element={<Conta />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
