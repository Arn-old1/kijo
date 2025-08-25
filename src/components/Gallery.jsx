import React, { useState } from "react";
import Modal from "./Modal.jsx";
import "./Gallery.css";

const images = [
  "assets/gallery1.webp",
  "assets/homedesign.jpg",
  "assets/farmhouse.jpg",
  "assets/maxresdefault.jpg",
  "assets/mordenvilla.jpg",
  "assets/farmhouse06.jpg",
  "assets/gallery10.jpg",
  "assets/him.webp",
  "assets/villas2025.webp",
  "assets/private.jpg",
  "assets/manson.jpg",
  "assets/image1.webp",
  "assets/home.jpg",
  "assets/customhome.webp",
  "assets/gallery3.jpg",
  "assets/gallery4.jpg",
  "assets/gallery9.avif",
  "assets/gallery8.jpg",
  "assets/gallery11.jpg",
  "assets/galley.jpg",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="gallery" id="gallery">
      <h2 className="section-title">Property Gallery</h2>
      <div className="gallery-grid">
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Gallery ${index + 1}`}
            onClick={() => setSelectedImage(src)}
            className="gallery-image"
          />
        ))}
      </div>

      <Modal isOpen={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <img
          src={selectedImage}
          alt="Full View"
          style={{
            width: "100%",
            borderRadius: "10px",
          }}
        />
      </Modal>
    </section>
  );
};

export default Gallery;