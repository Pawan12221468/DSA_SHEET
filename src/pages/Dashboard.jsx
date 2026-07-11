import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Dashboard({ topics, username, onLogout, onAddTopic, onRenameTopic, onDeleteTopic }) {
  const [showAddModal, setShowAddModal] = useState(false);
  const [newTopicName, setNewTopicName] = useState('');
  const navigate = useNavigate();

  // Aggregate stats
  let totalQ = 0, totalSolved = 0, easySolved = 0, mediumSolved = 0, hardSolved = 0;
  topics.forEach(t => t.phases.forEach(p => {
    if (p.name && p.name.includes('🔓')) return;
    p.questions.forEach(q => {
      totalQ++;
      if (q.solved) {
        totalSolved++;
        if (q.difficulty === 'easy')   easySolved++;
        else if (q.difficulty === 'medium') mediumSolved++;
        else if (q.difficulty === 'hard')   hardSolved++;
      }
    });
  }));
  const remaining = totalQ - totalSolved;
  const pct = totalQ > 0 ? Math.round((totalSolved / totalQ) * 100) : 0;

  const handleAddTopic = (e) => {
    e.preventDefault();
    if (!newTopicName.trim()) return;
    onAddTopic(newTopicName.trim());
    setNewTopicName('');
    setShowAddModal(false);
  };

  const handleRename = (id, currentName) => {
    const n = prompt('Rename topic:', currentName);
    if (n && n.trim()) onRenameTopic(id, n.trim());
  };

  const handleDelete = (id, name) => {
    if (window.confirm(`Delete "${name}" and all its data?`)) onDeleteTopic(id);
  };

  return (
    <div className="app-shell">
      <Navbar username={username} onLogout={onLogout} />

      <div className="dashboard-page">
        {/* Header */}
        <div className="page-header">
          <div>
            <h1 className="page-title">Preparation Dashboard</h1>
            <p className="page-subtitle">Your DSA roadmap at a glance</p>
          </div>
          <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
            </svg>
            Add Topic
          </button>
        </div>

        {/* Stats Row */}
        <div className="stats-row">
          <div className="stat-card">
            <div className="stat-label">Total Questions</div>
            <div className="stat-value">{totalQ}</div>
            <div className="stat-sub">Across all topics</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Solved</div>
            <div className="stat-value" style={{ color: '#34d399' }}>{totalSolved}</div>
            <div className="stat-sub">Questions completed</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Remaining</div>
            <div className="stat-value" style={{ color: '#f87171' }}>{remaining}</div>
            <div className="stat-sub">Questions left</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Overall Progress</div>
            <div className="stat-value" style={{ color: '#6366f1' }}>{pct}%</div>
            <div className="stat-progress">
              <div className="stat-progress-fill" style={{ width: `${pct}%` }} />
            </div>
          </div>
        </div>

        {/* Topics Section */}
        <div className="section-header">
          <h2 className="section-title">Topics</h2>
        </div>

        {topics.length === 0 ? (
          <div className="empty-state">
            <div className="empty-state-icon">
              <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                <rect x="3" y="3" width="18" height="18" rx="2"/>
                <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
              </svg>
            </div>
            <div className="empty-state-title">No Topics Yet</div>
            <div className="empty-state-text">Click "Add Topic" to create your first DSA topic like Arrays, Strings, or Dynamic Programming.</div>
            <button className="btn btn-primary" onClick={() => setShowAddModal(true)}>+ Add First Topic</button>
          </div>
        ) : (
          <div className="q-table-wrap">
            <table className="topics-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>Questions</th>
                  <th>Solved</th>
                  <th>Progress</th>
                  <th style={{ textAlign: 'right' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {topics.map(topic => {
                  let tQ = 0, tS = 0;
                  topic.phases.forEach(p => {
                    if (p.name && p.name.includes('🔓')) return;
                    p.questions.forEach(q => {
                      tQ++;
                      if (q.solved) tS++;
                    });
                  });
                  const tPct = tQ > 0 ? Math.round((tS / tQ) * 100) : 0;
                  return (
                    <tr key={topic.id}>
                      <td className="topic-name-cell">{topic.name}</td>
                      <td className="topic-count-cell">{tQ} Questions</td>
                      <td className="topic-solved-cell">{tS} Solved</td>
                      <td className="topic-progress-cell">
                        <div className="progress-bar-wrap">
                          <div className="progress-bar-track">
                            <div className="progress-bar-fill" style={{ width: `${tPct}%` }} />
                          </div>
                          <span className="progress-pct">{tPct}%</span>
                        </div>
                      </td>
                      <td className="topic-actions-cell">
                        <div className="flex gap-2 items-center" style={{ justifyContent: 'flex-end' }}>
                          <button className="btn btn-ghost btn-icon btn-sm" title="Rename" onClick={() => handleRename(topic.id, topic.name)}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                            </svg>
                          </button>
                          <button className="btn btn-ghost btn-icon btn-sm" title="Delete" onClick={() => handleDelete(topic.id, topic.name)} style={{ color: '#f87171' }}>
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <polyline points="3 6 5 6 21 6"/>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                            </svg>
                          </button>
                          <button className="btn btn-primary btn-sm" onClick={() => navigate(`/topic/${topic.id}`)}>
                            Open Sheet →
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add Topic Modal */}
      {showAddModal && (
        <div className="modal-backdrop" onClick={() => setShowAddModal(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">New Topic</span>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form onSubmit={handleAddTopic}>
              <div className="modal-body">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Topic Name</label>
                  <input className="form-input" type="text" placeholder="e.g. Dynamic Programming" value={newTopicName} onChange={e => setNewTopicName(e.target.value)} required autoFocus />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" onClick={() => setShowAddModal(false)}>Cancel</button>
                <button className="btn btn-primary" type="submit">Create Topic</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
