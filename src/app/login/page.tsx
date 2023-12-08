'use client';
import Link from 'next/link';
import './styles.css';
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
    <div className="flex flex-col pt-16 pb-24 justify-center items-center bg-body">
      <div className='py-6 px-16 w-[80%] md:w-[40%] backdrop-xl bg-opacity-80 border bg-white border-gray-200 rounded-xl
       flex flex-col justify-center'>
      <h1 className="text-4xl my-4 semibold"> Login</h1>
      <hr className="border-gray-600 py-1 w-full my-4" />
      <label htmlFor="email" className="mt-3 mb-4">
        Email
      </label>
      <input
        className="p-2 rounded-md mb-4 border border-[#969696]"
        id="email"
        type="email"
        value={user.email}
        onChange={(event) => setUser({ ...user, email: event.target.value })}
      />
      <label htmlFor="password" className="mt-3 mb-4">Password</label>
      <input
        className="p-2  rounded-md mb-4 border border-[#969696]"
        id="password"
        type="password"
        value={user.password}
        onChange={(event) => setUser({ ...user, password: event.target.value })}
      />
      {!buttonDisabled ? (
        <button
          onClick={onLogin}
          className="py-2 px-8 my-6 border text-center rounded-md 
          transition duration-300 bg-blue-600 text-white hover:bg-blue-800
      "
        >
          Login
        </button>
      ) : (
        <p
          className="py-2 px-8 my-6 border text-center rounded-md text-gray-500 transition duration-300 bg-gray-200
        "
        >
          Login
        </p>
      )}
      <Link href={'/signup'} className="hover:underline" target="_blank">
        New User? Signup
      </Link>
      </div>
      
    </div>
  );
}
