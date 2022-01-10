// import function and style
import { Routes, Route, Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

// Import pages and components
import Navbar from './components/Navbar';


function App() {

  // User functionality
  const [ user, setUser ] = useState({})
  // const fetchUser = () => {
  //   if (localStorage.getItem('userId')) {
  //     axios.get('http://localhost:3001/users/verify', {
  //       headers: {
  //         Authorization: localStorage.getItem('userId')
  //       }
  //     })
  //     .then((response) => {
  //       setUser('response.data.user')
  //     })
  //   }
  // }
  // // useEffect(fetchUser, [])

  return (
    <div className="App">
      <Navbar user={user} setUser={setUser} />
      <Routes>
        <Route path="/signup" element={ 
          user ? <Redirect to="/home" /> : <Signup setUser={setUser} />} />

        <Route path="/login" element={ 
          user ? <Redirect to="/home" /> : <Login setUser={setUser} /> } />

        <Route path="/home" element={ 
          user ? <HomePage /> : <Login setUser={setUser} /> } />
      </Routes>

    </div>
  );
}

export default App;
