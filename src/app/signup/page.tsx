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
    <div className="flex flex-col pt-16 pb-24 justify-center items-center bg-body">
      <div
        className="py-6 px-16 w-[80%] md:w-[40%] backdrop-xl bg-opacity-80
         border bg-white border-gray-200 rounded-xl
       flex flex-col justify-center"
      >
        <h1 className="text-4xl my-4">
          {loading ? 'Processing...' : 'Sign Up'}
        </h1>
        <hr className="border-gray-600 py-1 w-full my-4" />
        <label htmlFor="username" className="mt-2 mb-2">
          Username
        </label>
        <input
          className="p-2 rounded-md mb-2 border border-[#969696]"
          id="username"
          type="text"
          value={user.username}
          onChange={(event) =>
            setUser({ ...user, username: event.target.value })
          }
        />
        <label htmlFor="email" className="mt-2 mb-2">
          Email
        </label>
        <input
          className="p-2 rounded-md mb-2 border border-[#969696]"
          id="email"
          type="email"
          value={user.email}
          onChange={(event) => setUser({ ...user, email: event.target.value })}
        />
        <label htmlFor="password" className="mt-2 mb-2">
          Password
        </label>
        <input
          className="p-2 rounded-md mb-2 border border-[#969696]"
          id="password"
          type="password"
          value={user.password}
          onChange={(event) =>
            setUser({ ...user, password: event.target.value })
          }
        />
        {!buttonDisabled ? (
          <button
            onClick={onSignUp}
            className="py-2 px-8 my-6 text-center rounded-xl bg-gray-200 transition duration-300 hover:bg-gray-700
      "
          >
            SignUp
          </button>
        ) : (
          <p
            className="py-2 px-8 my-6 text-center rounded-xl text-gray-600 transition duration-300 bg-gray-200
        "
          >
            SignUp
          </p>
        )}
        <Link href={'/login'} className="hover:underline">
          Already a User? Login
        </Link>
      </div>
    </div>
  );
}
