import Link from 'next/link';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <h1>Welcome to Our App</h1>
      <nav>
        <Link href="/signup">Sign Up</Link>
        <br/>
        <Link href="/login">Login</Link>
      </nav>
    </div>
  );
};

export default Home;
