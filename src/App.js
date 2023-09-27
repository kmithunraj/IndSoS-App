import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Profile from './components/profile';
import Search from './components/search';
import Chat from './components/chat';
import { useState } from 'react';

function App() {
  const [authenticated, setAuthenticated] = useState(true);

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
              <Route
                path="/*"
                element={<Navigate to="/home" />}
              />
              <Route path="/login" element={<Navigate to="/home" />} />
            </>
          ) : (
            <>
                 <Route path="/login" element={<Login />} />
                  <Route path="/*" element={<Navigate to="/login" />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
