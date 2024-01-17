import type { NextPage } from 'next';
import { useState } from 'react';
import Link from 'next/link';

const Signup: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle the signup logic here
    alert(`Signup with Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
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
        <button type="submit">Sign Up</button>
      </form>
      <Link href="/">Back to home</Link>
    </div>
  );
};

export default Signup;
