"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Fix Leaflet icon pentru Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

// 📍 Datele tale
const events = [
  {
    city: "Roman",
    coords: [46.9212, 26.9265],
    entries: [
      { date: "03/08/2024", place: "La Casa Veche" },
      { date: "15/06/2025", place: "Terra Peutique" },
      { date: "15/08/2025", place: "Alege Moto Rock" },
    ],
  },
  {
    city: "Iași",
    coords: [47.1636, 27.5826],
    entries: [
      { date: "16/08/2024", place: 'La "Container"' },
      { date: "21/09/2024", place: "Concurs Rock’N’Iasi" },
      { date: "04/10/2024", place: "Rock’N’Iasi" },
      { date: "15/02/2025", place: "Rock'N'Rolla" },
      { date: "26/07/2025", place: "Rock'N'Rolla" },
      { date: "21/03/2025", place: "Rock'N'Rolla" },
    ],
  },
  {
    city: "Suceava",
    coords: [47.6510, 26.2556],
    entries: [
      { date: "02/11/2024", place: "Art Rock Cafe" },
      { date: "08/03/2025", place: "Art Rock Cafe" },
    ],
  },
  {
    city: "Piatra Neamț",
    coords: [46.9231, 26.3706],
    entries: [{ date: "22/02/2025", place: "Central Plaza Hotel" }],
  },
  {
    city: "Botoșani",
    coords: [47.7460, 26.6732],
    entries: [
      { date: "15/03/2025", place: "Cross Medio Pub" },
      { date: "18/10/2025", place: "Cross Medio Pub" },
    ],
  },
  {
    city: "Chișinău",
    coords: [47.0105, 28.8638],
    entries: [{ date: "26/04/2025", place: "LaBrewTory" }],
  },
  {
    city: "Bistrița",
    coords: [47.1333, 24.5000],
    entries: [{ date: "16/08/2025", place: "WTF Rock Contest" }],
  },
  {
    city: "Brașov",
    coords: [45.6580, 25.6012],
    entries: [{ date: "15/11/2025", place: "Tâmplărie Pub" }],
  },
];

export default function EventMap() {
  return (
    <div className="relative z-0 w-full flex justify-center">
      <div className="w-full max-w-5xl">
        <MapContainer
          center={[46.9, 26.8]}
          zoom={6}
          scrollWheelZoom={false}
          className="
            w-full
            h-[300px]
            sm:h-[400px]
            md:h-[500px]
            rounded-2xl
            shadow-xl
          "
        >
          <TileLayer
  attribution="&copy; Carto"
  url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
/>

          {events.map((city) => (
            <Marker key={city.city} position={city.coords}>
              <Popup>
                <div className="space-y-2">
                  <h3 className="font-bold text-base">{city.city}</h3>
                  <ul className="text-sm space-y-1">
                    {city.entries.map((e, idx) => (
                      <li key={idx}>
                        <span className="font-medium">{e.date}</span> –{" "}
                        {e.place}
                      </li>
                    ))}
                  </ul>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
}
