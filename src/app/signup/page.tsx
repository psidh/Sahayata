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

  const [loading, setLoading] = React.useState(false);

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
    <div className="flex flex-col my-16 items-center justify-center text-left">
      <h1 className="text-4xl my-4">{loading ? 'Processing' : 'Sign Up'}</h1>
      <hr className="border-gray-600 py-1 w-1/4 my-4" />
      <label htmlFor="username">Username</label>
      <input
        className="p-2 bg-gray-200 rounded-lg mb-4 focus:outline-none "
        id="username"
        type="text"
        value={user.username}
        onChange={(event) => setUser({ ...user, username: event.target.value })}
      />
      <label htmlFor="email">Email</label>
      <input
        className="p-2 bg-gray-200 rounded-lg mb-4 focus:outline-none "
        id="email"
        type="email"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2 bg-gray-200 rounded-lg mb-4 focus:outline-none "
        id="password"
        type="password"
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />
      {!buttonDisabled ? (
        <button
        onClick={onSignUp}
        className="py-2 px-8 my-6 rounded-xl bg-gray-200 transition duration-300 hover:bg-gray-700
      "
      >SignUp</button>
      ): (
        <p className="py-2 px-8 my-6 rounded-xl text-gray-600 transition duration-300 bg-gray-200
        ">SignUp</p>
      )}
      <Link href={'/login'}>Already a User? Login</Link>
    </div>
  );
}
