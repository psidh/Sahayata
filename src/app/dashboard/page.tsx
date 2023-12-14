'use client'
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import data from '../../data/daily';


export default function Table(){
  


  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div>
     <div>
      <h1 className='text-4xl'>HOME</h1>
     </div>
    </div>
  );
}



