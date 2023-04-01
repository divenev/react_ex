import './App.css'

import { UserProvider } from './contexts/UserContext'
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { Register } from './components/Register';
import { Logout } from './components/Logout';
import { Check } from './components/Check';


function App() {

  return (
    <>
      <UserProvider>

        <Header />
        <main >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/check' element={<Check />} />
            <Route path='/users/login' element={<Login />} />
            <Route path='/users/register' element={<Register />} />
            <Route path='/users/logout' element={<Logout />} />
          </Routes>
        </main>
        <Footer />

      </UserProvider>
    </>
  );
}

export default App;