'use client';
// Import statements...
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface LeafletMapProps {
  center: [number, number];
}

const LeafletMap: React.FC<LeafletMapProps> = ({ center }) => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Check if window is defined (running on the client/browser)
    const isBrowser = typeof window !== 'undefined';

    // Import Leaflet and related code dynamically on the client side
    if (isBrowser) {
      import('leaflet').then((L) => {
        const customMarkerIcon = new L.Icon({
          iconUrl: '/mapicon.png',
          iconSize: [32, 32],
          iconAnchor: [16, 32],
          popupAnchor: [0, -32],
        });

        // Set a flag to indicate that the map has been loaded
        setMapLoaded(true);
      });
    }
  }, []);

  if (!mapLoaded) {
    return null; // Return null or a loading indicator while waiting for the map to load
  }

  // Import Leaflet and related code statically (for server-side rendering)
  const L = require('leaflet');
  const { MapContainer, TileLayer, Marker, Popup } = require('react-leaflet');

  return (
    <div>
      <MapContainer
        center={center}
        zoom={13}
        style={{ width: '100%', height: '400px' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <Marker position={center} icon={new L.Icon()}>
          <Popup>
            <div className="flex flex-col justify-between items-start">
              <h1 className="text-xl italic">
                Dumper Exact Location Detected{' '}
              </h1>{' '}
              <br /> FOUND
              <Link
                href={'/dashboard/search?id=900'}
                className="px-4 py-1 rounded-md mt-2 w-[50%] text-white "
              >
                View Details
              </Link>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
