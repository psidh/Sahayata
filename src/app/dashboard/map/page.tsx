'use client';
import React, { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import Sidebar from '@/components/Sidebar';

const LeafletMap = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Import Leaflet and related code only on the client side
      import('leaflet').then((L) => {
        // Create a map centered at [17.6868, 83.2185]
        const mymap = L.map('map').setView([17.6868, 83.2185], 10);

        // Add a marker at [17.6868, 83.2185]
        const marker = L.marker([17.6868, 83.2185]).addTo(mymap);

        // Add a popup to the marker
        marker.bindPopup('<b>Hello, Manager').openPopup();

        // Add the OpenStreetMap tile layer to the map
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '© OpenStreetMap contributors',
        }).addTo(mymap);

        // Cleanup on component unmount
        return () => {
          mymap.remove(); // This removes the map instance when the component is unmounted
        };
      });
    }
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <div className='flex flex-col md:flex-row'>
      <div className=" h-screen">
        <Sidebar />
      </div>
      <div id="map" className="md:w-[70%]"></div>
    </div>
  );
};

export default LeafletMap;
