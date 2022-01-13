import { useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

const Signup = (props) => {

    // user info
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ bio, setBio ] = useState('');

    // call to local database to sign up user/add user to database
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${env.REACT_APP_BACKEND_URL}/users/signup`, { email, password, bio })
            console.log(response);
            localStorage.setItem('userId', response.data.user.id);
            props.setUser(response.data.user);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={submitForm} className="suli-form" >
                <div>
                    <label
                        htmlFor="email"
                        className="label">Email: </label>
                    <input 
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label
                        htmlFor="password"
                        className="label">Password: </label>
                    <input
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                {/* <div>
                    <label htmlFor="bio">Write a quick sentence about yourself: </label>
                    <input
                        type="text"
                        value={bio}
                        onChange={(e) => setBio(e.target.value)} />
                </div> */}
                <div>
                    <button
                        type="submit" 
                        className="suli-button">
                        Sign up!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup;