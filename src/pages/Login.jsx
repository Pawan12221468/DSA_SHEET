import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

export default function Login({ onLoginSuccess }) {
  const [email, setEmail]       = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const justRegistered = params.get('registered') === '1';

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    const key = email.trim().toLowerCase();

    const users = JSON.parse(localStorage.getItem('dsa_users') || '{}');
    const user  = users[key];

    // Allow default dev credentials
    const isDefault = (key === 'admin@dsa.com' || key === 'admin') && password === 'dsa';

    if (isDefault) {
      onLoginSuccess('Admin');
      navigate('/dashboard');
      return;
    }

    if (user && user.password === password) {
      onLoginSuccess(user.name);
      navigate('/dashboard');
    } else {
      setError('Incorrect email or password. Please try again or sign up.');
    }
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
            <div className="auth-title">DSA Grid</div>
            <div className="auth-subtitle">Sign in to your preparation board</div>
          </div>
        </div>

        {justRegistered && (
          <div style={{ background: 'rgba(52,211,153,0.1)', border: '1px solid rgba(52,211,153,0.3)', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.25rem', fontSize: '0.875rem', color: '#34d399' }}>
            ✓ Account created! Please log in with your details.
          </div>
        )}

        {error && (
          <div style={{ background: 'rgba(248,113,113,0.1)', border: '1px solid rgba(248,113,113,0.3)', borderRadius: 8, padding: '0.75rem 1rem', marginBottom: '1.25rem', fontSize: '0.875rem', color: '#f87171' }}>
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input className="form-input" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <div className="form-group" style={{ marginBottom: '1.75rem' }}>
            <label className="form-label">Password</label>
            <input className="form-input" type="password" placeholder="Your password" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary btn-full" type="submit">Sign In</button>
        </form>

        <div className="auth-footer">
          New user?{' '}
          <Link to="/signup">Create an account</Link>
        </div>
      </div>
    </div>
  );
}
