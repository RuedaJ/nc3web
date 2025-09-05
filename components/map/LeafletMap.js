'use client';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, Circle } from 'react-leaflet';
import L from 'leaflet';
import { useMemo } from 'react';
const { BaseLayer, Overlay } = LayersControl;
const markerIcon = new L.DivIcon({
  className: 'custom-marker',
  html: `<div style="background:#059669;width:14px;height:14px;border-radius:9999px;border:2px solid white;box-shadow:0 0 0 2px rgba(5,150,105,0.4)"></div>`,
  iconSize: [14, 14],
  iconAnchor: [7, 7],
});
export default function LeafletMap() {
  const center = useMemo(() => [41.6517, -0.8891], []);
  return (
    <div id="map-card" className="rounded-2xl border border-emerald-200/50 overflow-hidden shadow-md">
      <div className="px-4 py-3 bg-emerald-50 border-b border-emerald-200 text-stone-800 font-medium">
        Mapa Interactivo (OpenStreetMap tiles)
      </div>
      <MapContainer center={center} zoom={11} style={{ height: '380px', width: '100%' }}>
        <LayersControl position="topright">
          <BaseLayer checked name="OSM">
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </BaseLayer>
          <Overlay checked name="Puntos de interés (mock)">
            <Marker position={[41.6617, -0.8791]} icon={markerIcon}>
              <Popup>
                <div className="font-semibold">Sitio A</div>
                <div className="text-sm text-stone-600">Score hídrico: 82</div>
              </Popup>
            </Marker>
          </Overlay>
          <Overlay name="Zona prioritaria (mock)">
            <Circle center={center} radius={2000} pathOptions={{ color: '#059669' }} />
          </Overlay>
        </LayersControl>
      </MapContainer>
    </div>
  );
}