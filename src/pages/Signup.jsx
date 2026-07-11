import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName]         = useState('');
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const key = email.trim().toLowerCase();
    if (!name.trim() || !key || !password) return;

    const users = JSON.parse(localStorage.getItem('dsa_users') || '{}');
    if (users[key]) {
      setError('This email is already registered. Please log in.');
      return;
    }
    users[key] = { name: name.trim(), password };
    localStorage.setItem('dsa_users', JSON.stringify(users));
    navigate('/login?registered=1');
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo">
          <div className="auth-logo-icon">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
            </svg>
          </div>
          <div>
            <div className="auth-title">Create Account</div>
            <div className="auth-subtitle">Sign up to start your DSA journey</div>
          </div>
        </div>

        {error && (
          <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.25rem', fontSize: '0.875rem', color: '#f87171' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <input className="form-input" type="text" placeholder="e.g. Pawan Kumar" value={name} onChange={e => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="Create a strong password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary btn-full" type="submit">Create Account</button>
        </form>

        <div className="auth-footer">
          Already have an account?{' '}
          <Link to="/login">Log In</Link>
        </div>
      </div>
    </div>
  );
}
