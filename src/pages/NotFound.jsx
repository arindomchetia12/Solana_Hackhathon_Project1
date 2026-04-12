import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="error-container active-os">
      {/* Scanline Overlay */}
      <div className="scanlines"></div>
      <div className="vignette"></div>

      {/* Layered Glitch Background */}
      <div className="bg-text-container">
        <div className="glitch-wrapper">
          <h1 className="bg-404" data-text="404">404</h1>
          <h1 className="bg-404 glitch-layer" data-text="404">404</h1>
          <h1 className="bg-404 glitch-layer-2" data-text="404">404</h1>
        </div>
      </div>

      {/* Foreground Content */}
      <div className="error-content">

        <h2 className="error-title">THIS PAGE IS NOT FOUND</h2>

        <Link to="/" className="back-btn-os">
          <span className="btn-glitch"></span>
          Back to Home
        </Link>
      </div>
    </div>
  );
}
