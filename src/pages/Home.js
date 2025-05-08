// pages/Home.js
import React from 'react';
import CategoryList from '../components/CategoryList';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Welcome to ShopTogether</h1>
          <p>Discover amazing products at great prices</p>
          <button className="shop-now-btn">Shop Now</button>
        </div>
      </section>

      <section className="featured-section">
        <h2>Featured Categories</h2>
        <CategoryList />
      </section>

      <section className="benefits-section">
        <div className="benefit-card">
          <i className="fas fa-truck"></i>
          <h3>Free Shipping</h3>
          <p>On orders over $50</p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-undo"></i>
          <h3>Easy Returns</h3>
          <p>30 days return policy</p>
        </div>
        <div className="benefit-card">
          <i className="fas fa-lock"></i>
          <h3>Secure Payment</h3>
          <p>100% secure checkout</p>
        </div>
      </section>
    </div>
  );
};

export default Home;