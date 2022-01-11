// import function and style
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LandingPage from './pages/LandingPage';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import axios from 'axios';
import './App.css';

// Import pages and components
import Navbar from './components/Navbar';


function App() {

  // User functionality
  const [ user, setUser ] = useState({});
  const fetchUser = () => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      axios.get('http://localhost:5000/users/verify', {
        headers: {
          Authorization: userId
        }
      })
      .then((response) => {
        setUser(response.data.user)
      })
    }
  }
  useEffect(fetchUser, [])

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={ 
          localStorage.userId ? <Home user={user}/> : <Signup setUser={setUser} /> } />

        <Route path="/login" element={ 
          localStorage.userId ? <Home user={user}/> : <Login setUser={setUser} /> } />

        <Route path="/home" element={
          localStorage.userId ? <Home user={user}/> : <Login setUser={setUser} /> } />
      </Routes>

    </div>
  );
}

export default App;
