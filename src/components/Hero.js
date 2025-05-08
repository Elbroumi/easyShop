// components/Hero.js
import React from 'react';
import heroImage from '../assests/images/hero-image.jpg'; // Make sure this path is correct

function Hero() {
  return (
    <div style={{ 
      position: 'relative', 
      height: '80vh',
      width: '100%',
      overflow: 'hidden'
    }}>
      {/* Background Image */}
      <img 
        src={heroImage} 
        alt="E-commerce hero banner"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
      
      {/* Overlay Content */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        color: 'white',
        textAlign: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: '0 20px'
      }}>
        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 4rem)', // Responsive font size
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
        }}>
          Together.
        </h1>
        <p style={{ 
          fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
          marginBottom: '2rem',
          textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
        }}>
          Shop your favorite brands!
        </p>
        <button style={{
          backgroundColor: '#3f51b5',
          color: 'white',
          border: 'none',
          padding: '12px 30px',
          fontSize: '1.1rem',
          borderRadius: '30px',
          cursor: 'pointer',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease'
        }}>
          Shop Now
        </button>
      </div>
    </div>
  );
}

export default Hero;