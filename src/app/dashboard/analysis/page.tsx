'use client';
import BarGraph from '@/components/BarGraph';
import React, { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import Popup from '@/components/Pop';
import Image from 'next/image';
import Second from '@/components/Second';
import Third from '@/components/Third';

export default function Page() {
  return (
    <div className="flex justify-between min-h-screen">
      <div className="w-[25%]">
        <Sidebar />
      </div>
      <div className="w-[75%]">
        <div className="flex flex-col">
          <BarGraph />
          <Third />
          <Second />
        </div>
      </div>
    </div>
  );
}
