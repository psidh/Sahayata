'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';

export default function Login() {
  const router = useRouter();

  const [user, setUser] = React.useState({
    email: '',
    password: '',
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const [loading, setLoading] = React.useState(true);

  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user);

      console.log('Login Success', response.data);
      router.push('/profile');

    } catch (error: any) {
      console.log('Login Failed');
      console.log(error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  

  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-4xl my-4"> Login</h1>
      <hr className="border-gray-600 py-1 w-1/4 my-4" />

      <label htmlFor="email" className="mt-3 mb-4">
        Email
      </label>
      <input
        className="p-2  bg-[#424242] text-white  rounded-xl mb-4 focus:outline-none focus:border-[#303030]"
        id="email"
        type="email"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <label htmlFor="password">Password</label>
      <input
        className="p-2  bg-[#424242] text-white  rounded-xl mb-4 focus:outline-none focus:border-[#303030]"
        id="password"
        type="password"
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />

      <button
        onClick={onLogin}
        className="p-2 my-6 border rounded-xl border-gray-500 transition duration-300 hover:bg-gray-700
      "
      >
        Login
      </button>
      <Link href={'/signup'}>New User? Signup</Link>
    </div>
  );
}
