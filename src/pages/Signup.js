import { useState } from 'react';
import axios from 'axios';

const Signup = (props) => {

    // user info
    const [ name, setName ] = useState('');

    // call to local database to sign up user/add user to database
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`http://localhost:3001/users/signup`, { name, email, password})
            console.log(response);
            localStorage.setItem('userId', response.data.newUser.id);
            props.setUser(response.data.newUser);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <form onSubmit={submitForm} className="suli-form" >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
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
                        Sign up!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup;