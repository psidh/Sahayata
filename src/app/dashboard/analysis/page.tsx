'use client';
import React from 'react';
import BarGraph from '../../../components/BarGraph';
import Sidebar from '@/components/Sidebar';

const IndexPage: React.FC = () => {
  return (
    <div className='flex justify-between '>
      <div className='w-[25%]'>
        <Sidebar />
      </div>
      <div className='w-[55%]'>
        <BarGraph />
      </div>
    </div>
  );
};

export default IndexPage;
