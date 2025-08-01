import React, { useState } from "react";
import Banner from "../components/Banner";
import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";

import LanguageSelector from "../components/LanguageSelector";
import SearchBar from "../components/SearchBar";
import "../pages/Home.css";
import imgi from "../components/assets/img1.jpg";
import PrescriptionScanner from "../components/PrescriptionScanner";


function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const products = [
    {
      id: 1,
      name: "Paracetamol 500mg",
      description: "Pain reliever",
      price: 40,
      image: imgi,
    },
    {
      id: 2,
      name: "Thermometer",
      description: "Fast temperature reading",
      price: 299,
      image: imgi,
    },
    {
      id: 3,
      name: "Sanitizer 500ml",
      description: "Kills 99.9% germs",
      price: 120,
      image: imgi,
    },
    {
      id: 4,
      name: "Vitamin C",
      description: "Boost immunity",
      price: 150,
      image: imgi,
    },
  ];

  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      <PrescriptionScanner />
      <LanguageSelector />
      <Banner />
      <Carousel />
      <SearchBar onSearch={setSearchTerm} />

      <section className="products-section">
        <h2>Our Products</h2>
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="info-section">
        <h3>Why Choose Us?</h3>
        <ul>
          <li>Trusted Healthcare Partner</li>
          <li>Fast Delivery</li>
          <li>Affordable Prices</li>
          <li>24/7 Support</li>
        </ul>
      </section>
      <div className="emergency-support">
        <h2>Emergency Contacts</h2>
        <p>
          📞 Call Support: <a href="tel:1800123456">1800-123-456</a>
        </p>
        <p>
          🚑 Ambulance: <a href="tel:102">102</a> / <a href="tel:108">108</a>
        </p>
      </div>

      <footer className="footer">
        <p>© 2025 SK Healthcare. All rights reserved.</p>
        <p>
          Contact us:{" "}
          <a href="mailto:support@skhealth.com">support@skhealth.com</a>
        </p>
      </footer>
    </div>
  );
}

export default Home;
