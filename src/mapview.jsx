import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Optional: custom icon
const policeIcon = new L.Icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/61/61456.png',
  iconSize: [30, 30],
});

const officers = [
  { id: 1, name: 'Officer A', lat: 28.644800, lng: 77.216721 },
  { id: 2, name: 'Officer B', lat: 28.641200, lng: 77.210000 },
];

export default function MapView() {
  return (
    <MapContainer center={[28.644800, 77.216721]} zoom={13} style={{ height: '100vh', width: '100%' }}>
      <TileLayer
        attribution='&copy; OpenStreetMap contributors'
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      {officers.map((officer) => (
        <Marker key={officer.id} position={[officer.lat, officer.lng]} icon={policeIcon}>
          <Popup>{officer.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
