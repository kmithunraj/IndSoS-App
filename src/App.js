import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import Search from './components/search';
import Chat from './components/chat';
import { useState } from 'react';

function App() {
  
  const [authenticated, setAuthenticated] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {authenticated ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/search" element={<Search />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/chat" element={<Chat />} />
            </>
          ) : (
            <Route path="/" element={<Login />} />
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
