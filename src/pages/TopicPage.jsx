import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { getAutoLink } from '../utils/autoLinks';

function detectPlatform(url) {
  if (!url) return { name: '—', cls: '' };
  try {
    const host = new URL(url).hostname.replace('www.', '');
    if (host.includes('leetcode'))    return { name: 'LeetCode',   cls: 'badge-leetcode' };
    if (host.includes('geeksforgeeks') || host.includes('gfg')) return { name: 'GFG', cls: 'badge-gfg' };
    if (host.includes('codeforces'))  return { name: 'Codeforces', cls: 'badge-codeforces' };
    if (host.includes('hackerrank'))  return { name: 'HackerRank', cls: 'badge-hackerrank' };
    const label = host.split('.')[0];
    return { name: label.charAt(0).toUpperCase() + label.slice(1), cls: 'badge-link' };
  } catch {
    return { name: 'Link', cls: 'badge-link' };
  }
}

export default function TopicPage({
  topics, username, onLogout,
  onRenameTopic, onDeleteTopic,
  onAddPhase, onDeletePhase,
  onAddQuestion, onDeleteQuestion,
  onToggleSolved, onToggleRevision, onSaveNotes,
}) {
  const { topicId } = useParams();
  const navigate    = useNavigate();
  const topic       = topics.find(t => t.id === topicId);

  const [activePhaseId, setActivePhaseId] = useState(null);
  const [showAddPhase, setShowAddPhase]   = useState(false);
  const [newPhaseName, setNewPhaseName]   = useState('');
  const [notesModal, setNotesModal]       = useState(null); // { phaseId, qId, text }
  const [addRow, setAddRow]               = useState({ title: '', link: '', difficulty: 'medium' });

  // Auto-select first phase
  useEffect(() => {
    if (!topic) return;
    if (topic.phases.length === 0) { setActivePhaseId(null); return; }
    const exists = topic.phases.some(p => p.id === activePhaseId);
    if (!exists) setActivePhaseId(topic.phases[0].id);
  }, [topicId, topic]);

  if (!topic) {
    return (
      <div className="app-shell">
        <div className="empty-state" style={{ height: '100vh' }}>
          <div className="empty-state-title">Topic not found</div>
          <button className="btn btn-primary" onClick={() => navigate('/dashboard')}>Back to Dashboard</button>
        </div>
      </div>
    );
  }

  const activePhase = topic.phases.find(p => p.id === activePhaseId) || null;

  const handleAddPhase = (e) => {
    e.preventDefault();
    if (!newPhaseName.trim()) return;
    const id = onAddPhase(topic.id, newPhaseName.trim());
    setNewPhaseName('');
    setShowAddPhase(false);
    if (id) setActivePhaseId(id);
  };

  const handleDeletePhase = (pid, name) => {
    if (!window.confirm(`Delete phase "${name}"?`)) return;
    onDeletePhase(topic.id, pid);
    const rest = topic.phases.filter(p => p.id !== pid);
    setActivePhaseId(rest.length > 0 ? rest[0].id : null);
  };

  const handleAddQuestion = () => {
    if (!addRow.title.trim()) return;
    onAddQuestion(topic.id, activePhaseId, { ...addRow, title: addRow.title.trim(), solved: false, needsRevision: false, notes: '' });
    setAddRow({ title: '', link: '', difficulty: 'medium' });
  };

  const handleSaveNotes = () => {
    onSaveNotes(topic.id, notesModal.phaseId, notesModal.qId, notesModal.text);
    setNotesModal(null);
  };

  return (
    <div className="app-shell">
      <Navbar username={username} onLogout={onLogout} />

      <div className="topic-layout">

        {/* ── LEFT SIDEBAR ── */}
        <aside className="topic-sidebar">
          <div className="sidebar-head">
            <button className="sidebar-back-btn" onClick={() => navigate('/dashboard')}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="19" y1="12" x2="5" y2="12"/>
                <polyline points="12 19 5 12 12 5"/>
              </svg>
              Back to Dashboard
            </button>
            <div className="sidebar-topic-name">{topic.name}</div>
            <div className="sidebar-topic-actions">
              <button className="btn btn-ghost btn-icon btn-sm" title="Rename topic"
                onClick={() => { const n = prompt('Rename:', topic.name); if (n?.trim()) onRenameTopic(topic.id, n.trim()); }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                </svg>
              </button>
              <button className="btn btn-ghost btn-icon btn-sm" title="Delete topic" style={{ color: '#f87171' }}
                onClick={() => { if (window.confirm(`Delete "${topic.name}"?`)) { onDeleteTopic(topic.id); navigate('/dashboard'); } }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="sidebar-body">
            <div className="sidebar-section-label">Phases</div>
            {topic.phases.map(phase => {
              const solved = phase.questions.filter(q => q.solved).length;
              const total  = phase.questions.length;
              return (
                <div key={phase.id}
                     className={`phase-item ${phase.id === activePhaseId ? 'active' : ''}`}
                     onClick={() => setActivePhaseId(phase.id)}>
                  <span className="phase-item-name">{phase.name}</span>
                  <span className="phase-item-badge">{solved}/{total}</span>
                  <button className="phase-item-del"
                          onClick={e => { e.stopPropagation(); handleDeletePhase(phase.id, phase.name); }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              );
            })}
            {topic.phases.length === 0 && (
              <div className="text-muted text-sm" style={{ padding: '0.75rem 0.5rem' }}>No phases yet. Add one below.</div>
            )}
          </div>

          <div className="sidebar-foot">
            <button className="add-phase-btn" onClick={() => setShowAddPhase(true)}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
              </svg>
              Add Phase
            </button>
          </div>
        </aside>

        {/* ── RIGHT CONTENT ── */}
        <div className="topic-content">
          {activePhase ? (
            <>
              <div className="content-header">
                <div className="content-breadcrumb">
                  {topic.name} <span>/</span> {activePhase.name}
                </div>
                <div className="content-phase-title">{activePhase.name}</div>
              </div>

              <div className="content-body">
                <div className="q-table-wrap">
                  <table className="q-table">
                    <thead>
                      <tr>
                        <th className="center" style={{ width: 56 }}>Status</th>
                        <th>Question Name</th>
                        <th style={{ width: 110 }}>Difficulty</th>
                        <th style={{ width: 120 }}>Platform</th>
                        <th className="center" style={{ width: 100 }}>Practice</th>
                        <th className="center" style={{ width: 72 }}>Notes</th>
                        <th className="center" style={{ width: 88 }}>Revision</th>
                        <th className="center" style={{ width: 72 }}>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {activePhase.questions.length === 0 && (
                        <tr>
                          <td colSpan={8}>
                            <div className="empty-state" style={{ padding: '3rem' }}>
                              <div className="empty-state-title">No questions yet</div>
                              <div className="empty-state-text">Use the row below to add your first question.</div>
                            </div>
                          </td>
                        </tr>
                      )}
                      {activePhase.questions.map(q => {
                        const activeLink = q.link || getAutoLink(q.title);
                        const { name: pName, cls: pCls } = detectPlatform(activeLink);
                        return (
                          <tr key={q.id} className={q.solved ? 'solved' : ''}>
                            <td className="center">
                              <input type="checkbox" className="q-checkbox" checked={q.solved}
                                     onChange={() => onToggleSolved(topic.id, activePhase.id, q.id)} />
                            </td>
                            <td className="q-title">{q.title}</td>
                            <td>
                              <span className={`pill pill-${q.difficulty || 'medium'}`}>{q.difficulty || 'Medium'}</span>
                            </td>
                            <td>
                              {activeLink
                                ? <span className={`platform-badge ${pCls}`}>{pName}</span>
                                : <span className="text-muted text-sm">—</span>
                              }
                            </td>
                            <td className="center">
                              {activeLink
                                ? <a href={activeLink} target="_blank" rel="noopener noreferrer" className="solve-link">Solve ↗</a>
                                : <span className="text-muted text-sm">—</span>
                              }
                            </td>
                            <td className="center">
                              <button
                                className={`notes-btn ${q.notes ? 'has-notes' : ''}`}
                                title={q.notes ? 'Edit notes' : 'Add notes'}
                                onClick={() => setNotesModal({ phaseId: activePhase.id, qId: q.id, text: q.notes || '' })}>
                                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                                  <polyline points="14 2 14 8 20 8"/>
                                  <line x1="16" y1="13" x2="8" y2="13"/>
                                  <line x1="16" y1="17" x2="8" y2="17"/>
                                  <polyline points="10 9 9 9 8 9"/>
                                </svg>
                              </button>
                            </td>
                            <td className="center">
                              <input type="checkbox" className="q-checkbox" checked={q.needsRevision || false}
                                     onChange={() => onToggleRevision(topic.id, activePhase.id, q.id)} />
                            </td>
                            <td className="center">
                              <button className="btn btn-ghost btn-icon" style={{ color: '#f87171' }}
                                      onClick={() => { if (window.confirm(`Delete "${q.title}"?`)) onDeleteQuestion(topic.id, activePhase.id, q.id); }}>
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <polyline points="3 6 5 6 21 6"/>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                </svg>
                              </button>
                            </td>
                          </tr>
                        );
                      })}

                      {/* Quick Add Row */}
                      <tr className="q-add-row">
                        <td className="center">
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6366f1" strokeWidth="2.5">
                            <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
                          </svg>
                        </td>
                        <td>
                          <input className="form-input-table" type="text" placeholder="Question name..."
                                 value={addRow.title}
                                 onChange={e => setAddRow(r => ({ ...r, title: e.target.value }))}
                                 onKeyDown={e => e.key === 'Enter' && handleAddQuestion()} />
                        </td>
                        <td>
                          <select className="form-select-table" value={addRow.difficulty}
                                  onChange={e => setAddRow(r => ({ ...r, difficulty: e.target.value }))}>
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                          </select>
                        </td>
                        <td colSpan={2}>
                          <input className="form-input-table" type="url" placeholder="Practice link (optional)..."
                                 value={addRow.link}
                                 onChange={e => setAddRow(r => ({ ...r, link: e.target.value }))}
                                 onKeyDown={e => e.key === 'Enter' && handleAddQuestion()} />
                        </td>
                        <td></td>
                        <td></td>
                        <td className="center">
                          <button className="btn btn-primary btn-sm" onClick={handleAddQuestion}>Add</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </>
          ) : (
            <div className="empty-state" style={{ flex: 1 }}>
              <div className="empty-state-icon">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <rect x="3" y="3" width="18" height="18" rx="2"/>
                  <path d="M9 3v18M15 3v18M3 9h18M3 15h18"/>
                </svg>
              </div>
              <div className="empty-state-title">No phases yet</div>
              <div className="empty-state-text">Click <strong>Add Phase</strong> in the sidebar to create your first phase for {topic.name}.</div>
            </div>
          )}
        </div>
      </div>

      {/* Add Phase Modal */}
      {showAddPhase && (
        <div className="modal-backdrop" onClick={() => setShowAddPhase(false)}>
          <div className="modal-box" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <span className="modal-title">New Phase</span>
              <button className="modal-close" onClick={() => setShowAddPhase(false)}>×</button>
            </div>
            <form onSubmit={handleAddPhase}>
              <div className="modal-body">
                <div className="form-group" style={{ marginBottom: 0 }}>
                  <label className="form-label">Phase Name</label>
                  <input className="form-input" type="text" placeholder="e.g. Phase 3: Sorting" value={newPhaseName}
                         onChange={e => setNewPhaseName(e.target.value)} required autoFocus />
                </div>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" type="button" onClick={() => setShowAddPhase(false)}>Cancel</button>
                <button className="btn btn-primary" type="submit">Create Phase</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Notes Modal */}
      {notesModal && (
        <div className="modal-backdrop" onClick={() => setNotesModal(null)}>
          <div className="modal-box" onClick={e => e.stopPropagation()} style={{ maxWidth: 560 }}>
            <div className="modal-header">
              <span className="modal-title">Question Notes</span>
              <button className="modal-close" onClick={() => setNotesModal(null)}>×</button>
            </div>
            <div className="modal-body">
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label">Notes / Solution Approach</label>
                <textarea className="form-input" value={notesModal.text}
                          onChange={e => setNotesModal(m => ({ ...m, text: e.target.value }))}
                          placeholder="Write your approach, time complexity, key observations..." autoFocus />
              </div>
            </div>
            <div className="modal-footer">
              <button className="btn btn-secondary" onClick={() => setNotesModal(null)}>Cancel</button>
              <button className="btn btn-primary" onClick={handleSaveNotes}>Save Notes</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
