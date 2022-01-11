import { useState } from 'react';
import axios from 'axios';

const Login = (props) => {

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`http://localhost:5000/users/login`, { email, password })
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
                    <label htmlFor="email">Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
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