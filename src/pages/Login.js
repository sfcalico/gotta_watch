import { useState } from 'react';
import env from 'react-dotenv';
import axios from 'axios';

const Login = (props) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${env.REACT_APP_BACKEND_URL}/users/login`, { email, password })
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
                    <label htmlFor="password">Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
               
                <div>
                    <button
                        type="submit" 
                        className="suli-button">
                        Log in!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Login;