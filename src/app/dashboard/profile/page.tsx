import Sidebar from '@/components/Sidebar';
import React from 'react';

interface UserProfile {
  name: string;
  age: number;
  email: string;
  occupation: string; // Added occupation field
  location: string; // Added location field
  // Add more details as needed
}

const UserProfilePage: React.FC<UserProfile> = ({
  name,
  age,
  email,
  occupation,
  location,
}) => {
  return (
    <>
      <div className='flex justify-between my-6'>
        <div className="w-[25%]">
          <Sidebar />
        </div>
        <div className="w-[75%] mt-8 p-4  rounded-md shadow-md">
          <h1 className="text-3xl font-bold mb-4">User Profile</h1>
          <p className="text-lg">
            <span className="font-normal mr-12">Name:</span> P SIDHARTH
          </p>
          <p className="text-lg">
            <span className="font-normal mr-12">Age:</span> 19
          </p>
          <p className="text-lg">
            <span className="font-normal mr-12">Email:</span> philkhanasidharth14@gmail.com
          </p>
          <p className="text-lg">
            <span className="font-normal mr-12">Role:</span>  <span className='px-4 py-1 rounded-3xl bg-green-400'>Admin</span> 
          </p>
          <p className="text-lg">
            <span className="font-normal mr-12">Location:</span> Bhopal
          </p>
          {/* Add more details here */}
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
