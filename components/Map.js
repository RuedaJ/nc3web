'use client';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
const DynamicMap = dynamic(() => import('./map/LeafletMap'), { ssr: false });
export default function MapWrapper() {
  useEffect(() => {
    const id = 'leaflet-css';
    if (!document.getElementById(id)) {
      const link = document.createElement('link');
      link.id = id;
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }
  }, []);
  return <DynamicMap />;
}