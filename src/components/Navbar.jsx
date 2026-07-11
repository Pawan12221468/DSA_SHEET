import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Navbar({ username, onLogout }) {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="navbar-brand" onClick={() => navigate('/dashboard')}>
        <div className="navbar-logo-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2"/>
            <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
          </svg>
        </div>
        <span className="navbar-brand-name">DSA Grid</span>
      </div>

      <div className="navbar-right">
        <span className="navbar-username">Hello, {username || 'Coder'} 👋</span>
        <button
          className="btn btn-ghost btn-icon"
          onClick={() => { onLogout(); navigate('/login'); }}
          title="Log Out"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
            <polyline points="16 17 21 12 16 7"/>
            <line x1="21" y1="12" x2="9" y2="12"/>
          </svg>
        </button>
      </div>
    </nav>
  );
}
