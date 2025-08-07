import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./MapSection.css";

// Import marker icons manually for Vite compatibility
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

// Fix default icon path issue in Leaflet + Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const properties = [
  {
    id: 1,
    title: "Luxury Villa in Kampala",
    position: [0.3476, 32.5825], 
  },
  {
    id: 2,
    title: "Modern Apartments in Nairobi",
    position: [-1.2921, 36.8219], 
  },
  {
    id: 3,
    title: "Beach House in Zanzibar",
    position: [-6.1659, 39.2026], 
  },
  {
    id: 4,
    title: "Hilltop Mansion in Kigali",
    position: [-1.9441, 30.0619], 
  },
  {
    id: 5,
    title: "Penthouse in Lagos",
    position: [6.5244, 3.3792], 
  },
  {
    id: 6,
    title: "Duplex in Accra",
    position: [5.5600, -0.2050],
  },
  {
    id: 7,
    title: "Garden Bungalow in Mombasa",
    position: [-4.0435, 39.6682], 
  },
  {
    id: 8,
    title: "Farmhouse in Arusha",
    position: [-3.3869, 36.6829],
  },
  {
    id: 9,
    title: "Modern Flat in Addis Ababa",
    position: [9.0301, 38.7498], 
  },
  {
    id: 10,
    title: "Estate Home in Lusaka",
    position: [-15.3875, 28.3228],
  },
  {
    id: 11,
    title: "Contemporary Condo in Gaborone",
    position: [-24.6282, 25.9231], 
  },
  {
    id: 12,
    title: "Private Residence in Abidjan",
    position: [5.3599, -4.0083], 
  },
];


const MapSection = () => {
  return (
    <section className="map-section" id="map">
      <h2>Explore Our Properties</h2>
      <MapContainer center={[0.0, 34.0]} zoom={5} scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {properties.map((property) => (
          <Marker key={property.id} position={property.position}>
            <Popup>{property.title}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </section>
  );
};

export default MapSection;