import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { UserStorage } from './context/UserContext';

import Home from './pages/Home';
import Login from './components/Login';

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='login/*' element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
