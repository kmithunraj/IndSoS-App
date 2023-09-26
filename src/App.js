import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LandingPage from './components/landingpage';
import Home from './components/home';
import Profile from './components/profile';
import Search from './components/search';
import Chat from './components/chat'; 


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
