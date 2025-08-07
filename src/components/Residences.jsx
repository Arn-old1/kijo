import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./Residences.css";

const residences = [
  {
    id: 1,
    title: "Luxury Villa in Kampala",
    location: "Kampala, Uganda",
    price: "$450,000",
    beds: 4,
    baths: 3,
    area: "350 m²",
    image: "/assets/villa.jpg",
    description: "A modern villa with lake views, garden, and private parking.",
  },
  {
    id: 2,
    title: "Modern Apartments in Nairobi",
    location: "Nairobi, Kenya",
    price: "$280,000",
    beds: 3,
    baths: 2,
    area: "210 m²",
    image: "/assets/apartmentso.webp",
    description: "Stylish apartments close to business hubs and cafes.",
  },
  {
    id: 3,
    title: "Beach House in Zanzibar",
    location: "Zanzibar, Tanzania",
    price: "$650,000",
    beds: 5,
    baths: 4,
    area: "420 m²",
    image: "/assets/beachouse.jpg",
    description: "Oceanfront property with private beach access and infinity pool.",
  },
  {
    id: 4,
    title: "Hilltop Mansion in Kigali",
    location: "Kigali, Rwanda",
    price: "$520,000",
    beds: 6,
    baths: 5,
    area: "500 m²",
    image: "/assets/manson.jpg",
    description: "Elegant mansion with panoramic city views and luxury finish.",
  },
  {
    id: 5,
    title: "Penthouse in Lagos",
    location: "Lagos, Nigeria",
    price: "$700,000",
    beds: 4,
    baths: 4,
    area: "380 m²",
    image: "/assets/penthouse.jpg",
    description: "Skyline views, modern interiors, rooftop pool.",
  },
  {
    id: 6,
    title: "Duplex in Accra",
    location: "Accra, Ghana",
    price: "$360,000",
    beds: 3,
    baths: 3,
    area: "290 m²",
    image: "/assets/duplex.webp",
    description: "Spacious duplex home in a quiet, gated community.",
  },
  {
    id: 7,
    title: "Garden Bungalow in Mombasa",
    location: "Mombasa, Kenya",
    price: "$330,000",
    beds: 3,
    baths: 2,
    area: "260 m²",
    image: "/assets/garden.webp",
    description: "Charming bungalow surrounded by lush gardens.",
  },
  {
    id: 8,
    title: "Farmhouse in Arusha",
    location: "Arusha, Tanzania",
    price: "$310,000",
    beds: 4,
    baths: 2,
    area: "400 m²",
    image: "/assets/farmhouse.jpg",
    description: "Rural escape with open land and mountain views.",
  },
  {
    id: 9,
    title: "Modern Flat in Addis Ababa",
    location: "Addis Ababa, Ethiopia",
    price: "$270,000",
    beds: 2,
    baths: 2,
    area: "180 m²",
    image: "/assets/lux.jpg",
    description: "City flat with minimalist design and balcony.",
  },
  {
    id: 10,
    title: "Estate Home in Lusaka",
    location: "Lusaka, Zambia",
    price: "$490,000",
    beds: 5,
    baths: 4,
    area: "450 m²",
    image: "/assets/estate.webp",
    description: "Executive estate home with home office and pool.",
  },
  {
    id: 11,
    title: "Contemporary Condo in Gaborone",
    location: "Gaborone, Botswana",
    price: "$240,000",
    beds: 2,
    baths: 2,
    area: "190 m²",
    image: "/assets/condoo.webp",
    description: "Bright and airy condo with city views and amenities.",
  },
  {
    id: 12,
    title: "Private Residence in Abidjan",
    location: "Abidjan, Côte d’Ivoire",
    price: "$430,000",
    beds: 4,
    baths: 3,
    area: "340 m²",
    image: "/assets/private.jpg",
    description: "Peaceful private home with smart security system.",
  },
  {
    id: 13,
    title: "Golf Estate in Kampala",
    location: "Kampala, Uganda",
    price: "$480,000",
    beds: 5,
    baths: 4,
    area: "400 m²",
    image: "/assets/golf.jpg",
    description: "Modern estate near the golf course with garden and smart features.",
  },
  {
    id: 14,
    title: "Urban Loft in Nairobi",
    location: "Nairobi, Kenya",
    price: "$310,000",
    beds: 3,
    baths: 2,
    area: "230 m²",
    image: "/assets/urban.jpeg",
    description: "Loft-style living in Nairobi’s vibrant commercial district.",
  },
  {
    id: 15,
    title: "Seaside Villa in Zanzibar",
    location: "Zanzibar, Tanzania",
    price: "$690,000",
    beds: 4,
    baths: 4,
    area: "440 m²",
    image: "/assets/seaside.webp",
    description: "Luxury villa right on the beach with ocean views.",
  },
  {
    id: 16,
    title: "Modern Hillside Home",
    location: "Kigali, Rwanda",
    price: "$550,000",
    beds: 5,
    baths: 4,
    area: "420 m²",
    image: "/assets/hillsidehome.jpg",
    description: "Hillside home with cityscape views and premium finishes.",
  },
  {
    id: 17,
    title: "Island Apartment in Lagos",
    location: "Lagos, Nigeria",
    price: "$320,000",
    beds: 3,
    baths: 2,
    area: "270 m²",
    image: "/assets/island.jpg",
    description: "Apartment on Lagos Island near entertainment hotspots.",
  },
  {
    id: 18,
    title: "Modern Villa in Accra",
    location: "Accra, Ghana",
    price: "$390,000",
    beds: 4,
    baths: 3,
    area: "310 m²",
    image: "/assets/use2.jpg",
    description: "Modern villa with open plan living and tropical garden.",
  },
  {
    id: 19,
    title: "Beach Cottage in Mombasa",
    location: "Mombasa, Kenya",
    price: "$340,000",
    beds: 3,
    baths: 3,
    area: "280 m²",
    image: "/assets/cottage.jpg",
    description: "Relaxing beachside cottage with breezy balconies.",
  },
  {
    id: 20,
    title: "Countryside Home in Arusha",
    location: "Arusha, Tanzania",
    price: "$295,000",
    beds: 4,
    baths: 2,
    area: "390 m²",
    image: "/assets/countryside.jpg",
    description: "Quiet home ideal for families and nature lovers.",
  },
  {
    id: 21,
    title: "Luxury Apartment in Addis",
    location: "Addis Ababa, Ethiopia",
    price: "$300,000",
    beds: 3,
    baths: 2,
    area: "220 m²",
    image: "/assets/apart.jpg",
    description: "Elegant apartment in a secure complex with gym and pool.",
  },
  {
    id: 22,
    title: "Suburban Villa in Lusaka",
    location: "Lusaka, Zambia",
    price: "$460,000",
    beds: 5,
    baths: 4,
    area: "430 m²",
    image: "/assets/use1.webp",
    description: "Comfortable villa in quiet suburb with backyard and parking.",
  },
  {
    id: 23,
    title: "Stylish Flat in Gaborone",
    location: "Gaborone, Botswana",
    price: "$260,000",
    beds: 2,
    baths: 2,
    area: "200 m²",
    image: "/assets/product1.jpg",
    description: "Minimalist design, central location and rooftop views.",
  },
  {
    id: 24,
    title: "City Home in Abidjan",
    location: "Abidjan, Côte d’Ivoire",
    price: "$440,000",
    beds: 4,
    baths: 3,
    area: "360 m²",
    image: "/assets/cityhome.jpg",
    description: "Bright and airy home close to parks and schools.",
  }
];

const Residences = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");
  const [minPrice, setMinPrice] = useState("Any");
  const [maxPrice, setMaxPrice] = useState("Any");
  const [selected, setSelected] = useState(null);

  const uniqueLocations = ["All", ...new Set(residences.map(res => res.location))];
  const prices = residences.map(res => parseInt(res.price.replace(/[$,]/g, ""))).sort((a, b) => a - b);
  const uniquePrices = ["Any", ...new Set(prices)];

  const filteredResidences = residences.filter(res => {
    const price = parseInt(res.price.replace(/[$,]/g, ""));

    const locationMatch = selectedLocation === "All" || res.location === selectedLocation;
    const minMatch = minPrice === "Any" || price >= parseInt(minPrice);
    const maxMatch = maxPrice === "Any" || price <= parseInt(maxPrice);

    return locationMatch && minMatch && maxMatch;
  });

  return (
    <section className="residences" id="residences">
      <h2 className="section-title">Popular Residences</h2>

      <div className="filter-bar">
        <label>Filter by Location: </label>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          {uniqueLocations.map((loc, i) => (
            <option key={i} value={loc}>{loc}</option>
          ))}
        </select>

        <label>Min Price: </label>
        <select value={minPrice} onChange={(e) => setMinPrice(e.target.value)}>
          {uniquePrices.map((p, i) => (
            <option key={i} value={p}>
              {p === "Any" ? "Any" : `$${p.toLocaleString()}`}
            </option>
          ))}
        </select>

        <label>Max Price: </label>
        <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)}>
          {uniquePrices.map((p, i) => (
            <option key={i} value={p}>
              {p === "Any" ? "Any" : `$${p.toLocaleString()}`}
            </option>
          ))}
        </select>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {filteredResidences.map((property) => (
          <SwiperSlide key={property.id}>
            <div className="residence-card">
              <img src={property.image} alt={property.title} />
              <div className="residence-info">
                <h3>{property.title}</h3>
                <p>{property.location}</p>
                <p>{property.beds} beds • {property.baths} baths • {property.area}</p>
                <span className="price">{property.price}</span>
                <button className="view-btn" onClick={() => setSelected(property)}>View Details</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {selected && (
        <div className="modal-overlay" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p>{selected.description}</p>
            <p><strong>Location:</strong> {selected.location}</p>
            <p><strong>Price:</strong> {selected.price}</p>
            <p><strong>Beds:</strong> {selected.beds} | <strong>Baths:</strong> {selected.baths} | <strong>Area:</strong> {selected.area}</p>
            <button className="close-btn" onClick={() => setSelected(null)}>Close</button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Residences;