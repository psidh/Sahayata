'use client';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState, useEffect } from 'react';

export default function SignUp() {
  const router = useRouter();

  const [user, setUser] = useState({
    email: '',
    password: '',
    username: '',
  });

  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const { email, password, username } = user;
    if (email && password && username) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  const handleChange = (e : any) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e : any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post('/api/users/signup', {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      console.log('Sign Success', response.data);
      router.push('/login');
    } catch (error: any) {
      console.error('SignUp Failed:', error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='flex flex-col min-h-screen justify-center items-center py-14'>
      <div className='p-5 md:py-6 md:px-16 w-[80%] md:w-[40%] backdrop-xl bg-opacity-80 border bg-white border-gray-200 rounded-xl flex flex-col justify-center'>
        <h1 className='text-4xl my-4'>
          {loading ? 'Processing...' : 'Sign Up'}
        </h1>
        <hr className='border-gray-600 py-1 w-full my-4' />
        <form onSubmit={handleSubmit} className='flex flex-col justify-start'>
          <label htmlFor='username' className='mt-2 mb-2'>
            Username
          </label>
          <input
            className='p-2 rounded-md mb-2 border border-[#969696]'
            id='username'
            type='text'
            value={user.username}
            onChange={handleChange}
          />
          <label htmlFor='email' className='mt-2 mb-2'>
            Email
          </label>
          <input
            className='p-2 rounded-md mb-2 border border-[#969696]'
            id='email'
            type='email'
            value={user.email}
            onChange={handleChange}
          />
          <label htmlFor='password' className='mt-2 mb-2'>
            Password
          </label>
          <input
            className='p-2 rounded-md mb-2 border border-[#969696]'
            id='password'
            type='password'
            value={user.password}
            onChange={handleChange}
          />
          <button
            type='submit'
            disabled={buttonDisabled}
            className={`py-2 px-8 my-6 border text-center rounded-md transition duration-300 ${
              buttonDisabled
                ? 'bg-gray-200 text-gray-600'
                : 'bg-blue-600 text-white hover:bg-blue-800'
            }`}
          >
            Sign Up
          </button>
        </form>
        <p className='text-gray-600'>
          Already a User?{' '}
          <a href='/login' className='hover:underline'>
            Login
          </a>
        </p>
      </div>
    </div>
  );
}
