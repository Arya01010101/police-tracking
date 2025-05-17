import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import './App.css'

// Optional: Fix marker icon issue in Leaflet + Vite
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: new URL('leaflet/dist/images/marker-icon-2x.png', import.meta.url).href,
  iconUrl: new URL('leaflet/dist/images/marker-icon.png', import.meta.url).href,
  shadowUrl: new URL('leaflet/dist/images/marker-shadow.png', import.meta.url).href,
})

function App() {
  const officers = [
    { id: 1, name: 'Officer A', position: [26.8467, 80.9462] }, // Lucknow
    { id: 2, name: 'Officer B', position: [28.7041, 77.1025] }, // Delhi
  ]

  return (
    <div style={{ height: '100vh' }}>
      <MapContainer center={[26.8467, 80.9462]} zoom={6} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        />
        {officers.map((officer) => (
          <Marker key={officer.id} position={officer.position}>
            <Popup>{officer.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  )
}

export default App
