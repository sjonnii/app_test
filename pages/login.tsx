import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

const Login: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        if (data.success) {
            console.log('Login successful', data);
            alert(`login successful ${data}`);
            // Handle successful login
        } else {
            console.error('Login failed', data.message);
            alert(`login failed ${data}`);
            // Handle login failure
        }
    } catch (error) {
        console.error('Error during login', error);
        alert(`login error ${error}`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Login;
