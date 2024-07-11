import React, { useContext } from 'react'

import userContext from '../context/userContext';

function Login() {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');


    const {setUser} = useContext(userContext);

    const handleSubmit = (e) => {

        e.preventDefault();

        setUser({username, password});


    }


    return (
        <div>
            <h1>Login</h1>
            <input 
                type="text" 
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />
            <br/>

            <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                
            />

            <button
                onClick={handleSubmit}
            > login form </button>

        </div>
    )
}

export default Login
