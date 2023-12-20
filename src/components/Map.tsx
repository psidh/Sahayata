import { IoCallSharp } from 'react-icons/io5';


import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { FaTruckMoving } from "react-icons/fa";
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Link from 'next/link';

interface LeafletMapProps {
  center: [number, number];
}

const customMarkerIcon = new L.Icon({
  iconUrl: '/dumper.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

const LeafletMap: React.FC<LeafletMapProps> = ({ center }) => {

  return (
    <MapContainer center={center} zoom={13} style={{ width: '100%', height: '400px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <Marker position={center} icon={customMarkerIcon}>
        <Popup>
          <div className='flex flex-col justify-between items-start'>
          <h1 className='text-xl italic'>Dumper Detected </h1>
          <h1 className='text-lg '>DumperID : DL1001 </h1>
          <span className='px-2 py-1 rounded-lg bg-green-400 my-4'>Ready</span> 
          <IoCallSharp /> Call
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;