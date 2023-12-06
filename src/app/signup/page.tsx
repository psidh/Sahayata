'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const onSignUp = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', user);

      console.log('Sign Success', response.data);
      router.push('/login');
    } catch (error: any) {
      console.log('SignUp Failed');
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1>{loading ? 'Processing' : 'Sign Up'}</h1>
      <hr />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 bg-[#424242] text-white  rounded-xl mb-4 focus:outline-none focus:border-[#303030]"
        id="username"
        type="text"
        value={user.username}
        onChange={(event) => setUser({ ...user, username: event.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 bg-[#424242] text-white  rounded-xl mb-4 focus:outline-none focus:border-[#303030]"
        id="email"
        type="email"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 bg-[#424242] text-white  rounded-xl mb-4 focus:outline-none focus:border-[#303030]"
        id="password"
        type="password"
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />

      <button
        onClick={onSignUp}
        className="p-2 my-6 border rounded-xl border-gray-500 transition duration-300 hover:bg-gray-700
      "
      >
        {buttonDisabled ? ' ' : 'Sign Up'}
      </button>
      <Link href={'/login'}>Already a User? Login</Link>
    </div>
  );
}
