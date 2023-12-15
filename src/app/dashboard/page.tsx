'use client';
import { useState, useEffect } from 'react';
import Sidebar from '@/components/Sidebar';
import data from '../../data/daily';

export default function Table() {
  return (
    <div className="flex justify-between">
      <div>
        <Sidebar />
      </div>
      <div>
        <div className="flex min-h-screen items-center justify-center">
          <h1 className="text-4xl">HOME</h1>
          <h1 className="text-4xl">        </h1>

        </div>
      </div>
    </div>
  );
}
