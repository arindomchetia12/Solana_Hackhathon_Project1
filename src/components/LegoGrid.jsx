import React, { useRef, useState, useEffect } from 'react';
import './LegoGrid.css';

const legoPieces = [
  { id: 1, title: 'AI ART', size: 'standard', color: 'purple', icon: '🤖' },
  { id: 2, title: 'STORY', size: 'standard', color: 'orange', icon: '⚡' },
  { id: 3, title: 'PROD', size: 'standard', color: 'blue', icon: '🛡️' },
  { id: 4, title: 'MARKET', size: 'standard', color: 'green', icon: '⚖️' },
  { id: 5, title: 'DESIGN', size: 'standard', color: 'purple', icon: '📢' },
  { id: 6, title: 'SOCIAL', size: 'standard', color: 'orange', icon: '📊' },
  { id: 7, title: 'VAULT', size: 'standard', color: 'blue', icon: '📈' },
  { id: 8, title: 'AI GEN', size: 'standard', color: 'green', icon: '📉' }
];

export default function LegoGrid() {
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') handleScroll('left');
      if (e.key === 'ArrowRight') handleScroll('right');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleScroll = (direction) => {
    if (trackRef.current) {
      const scrollAmount = 420; // Card width (400) + gap (20)
      trackRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseUp = () => setIsDragging(false);

  const handleMouseMoveTrack = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="lego-section">
      <div className="lego-header">
        <h2>Features & Use Cases</h2>
        <p>Modular intelligence in horizontal flow.</p>
      </div>

      <div 
        className="lego-carousel-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMoveTrack}
      >
        {/* Floating Overlay Navigation */}
        <button 
          className="overlay-nav-btn prev" 
          onClick={(e) => { e.stopPropagation(); handleScroll('left'); }}
          aria-label="Previous"
        >
          <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"/></svg>
        </button>

        <div className="lego-track" ref={trackRef}>
          {legoPieces.map((piece) => (
            <div 
              key={piece.id} 
              className={`lego-piece-card piece-${piece.color}`}
            >
              {/* Decorative Studs */}
              <div className="lego-studs top-left">
                <div className="stud"></div>
                <div className="stud"></div>
              </div>

              <div className="piece-visual-zone">
                <span className="piece-icon-huge">{piece.icon}</span>
              </div>

              <div className="piece-content-bottom">
                <h3 className="piece-title-huge">{piece.title}</h3>
                <div className="piece-logo-mini">
                  {piece.logo || (
                    <svg viewBox="0 0 256 214">
                      <path d="M255.617 0V110.181L127.804 214L0 110.181V0H98.7595L127.804 109.934L156.858 0H255.617Z" fill="currentColor" />
                    </svg>
                  )}
                </div>
              </div>

              {/* Bottom Studs */}
              <div className="lego-studs bottom-right">
                <div className="stud"></div>
                <div className="stud"></div>
              </div>
            </div>
          ))}
        </div>

        <button 
          className="overlay-nav-btn next" 
          onClick={(e) => { e.stopPropagation(); handleScroll('right'); }}
          aria-label="Next"
        >
          <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"/></svg>
        </button>
      </div>
    </section>
  );
}
