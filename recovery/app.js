// State management & LocalStorage
const STORAGE_KEY = 'dsa_grid_tracker_state';

// Default seed data if local storage is empty
const defaultSeedData = [
  {
    id: 'topic-1',
    name: 'Arrays',
    phases: [
      {
        id: 'phase-1-1',
        name: 'Phase 1: Basics & Easy Problems',
        questions: [
          { id: 'q-1', title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', difficulty: 'easy', solved: true, notes: 'Used a hashmap to store complement values. Time: O(N), Space: O(N)' },
          { id: 'q-2', title: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', difficulty: 'easy', solved: false, notes: 'One pass algorithm tracking minimum price and maximum profit.' },
          { id: 'q-3', title: 'Find the Duplicate Number', link: 'https://leetcode.com/problems/find-the-duplicate-number/', difficulty: 'medium', solved: false, notes: 'Can use Tortoise and Hare (cycle detection) or binary search.' }
        ]
      },
      {
        id: 'phase-1-2',
        name: 'Phase 2: Core Patterns',
        questions: [
          { id: 'q-4', title: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', difficulty: 'medium', solved: false, notes: 'Two pointer approach from ends inward, moving the smaller height pointer.' },
          { id: 'q-5', title: 'Maximum Subarray (Kadane)', link: 'https://leetcode.com/problems/maximum-subarray/', difficulty: 'medium', solved: true, notes: 'Kadanes Algorithm: localMax = max(nums[i], localMax + nums[i])' },
          { id: 'q-6', title: '3Sum', link: 'https://leetcode.com/problems/3sum/', difficulty: 'medium', solved: false, notes: 'Sort arrays first, then fix one element and use two pointers for the remaining sum.' }
        ]
      },
      {
        id: 'phase-1-3',
        name: 'Phase 3: Advanced Problems',
        questions: [
          { id: 'q-7', title: 'First Missing Positive', link: 'https://leetcode.com/problems/first-missing-positive/', difficulty: 'hard', solved: false, notes: 'Cyclic sort pattern: place each number at its correct index (i.e. nums[i] at nums[i]-1).' },
          { id: 'q-8', title: 'Sliding Window Maximum', link: 'https://leetcode.com/problems/sliding-window-maximum/', difficulty: 'hard', solved: false, notes: 'Use a Deque to keep indices of elements in decreasing order of value.' }
        ]
      }
    ]
  },
  {
    id: 'topic-2',
    name: 'Strings',
    phases: [
      {
        id: 'phase-2-1',
        name: 'Phase 1: Basic String Manipulation',
        questions: [
          { id: 'q-9', title: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/', difficulty: 'easy', solved: true, notes: 'Two pointers skipping non-alphanumeric characters.' },
          { id: 'q-10', title: 'Reverse String', link: 'https://leetcode.com/problems/reverse-string/', difficulty: 'easy', solved: true, notes: 'In-place reverse with two pointers.' }
        ]
      },
      {
        id: 'phase-2-2',
        name: 'Phase 2: Substrings & Patterns',
        questions: [
          { id: 'q-11', title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', difficulty: 'medium', solved: false, notes: 'Sliding window with sliding map/set to track characters.' },
          { id: 'q-12', title: 'String to Integer (atoi)', link: 'https://leetcode.com/problems/string-to-integer-atoi/', difficulty: 'medium', solved: false, notes: 'Carefully handle whitespace, signs, and overflow checks.' }
        ]
      }
    ]
  },
  {
    id: 'topic-3',
    name: 'Linked List',
    phases: [
      {
        id: 'phase-3-1',
        name: 'Phase 1: Easy Linked Lists',
        questions: [
          { id: 'q-13', title: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', difficulty: 'easy', solved: false, notes: 'Iterative with prev, curr, next pointers, or recursive.' },
          { id: 'q-14', title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', difficulty: 'easy', solved: false, notes: 'Use a dummy node to build the merged list iteratively.' },
          { id: 'q-15', title: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', difficulty: 'easy', solved: false, notes: 'Floyds cycle detection using slow and fast pointers.' }
        ]
      }
    ]
  }
];

let appState = {
  topics: [],
  activeTopicId: null,
  activePhaseId: null,
  activeFilter: 'all',
  searchQuery: ''
};

let expandedTopics = new Set();

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
  initAppState();
  setupEventListeners();
  renderApp();
});

function initAppState() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      appState.topics = JSON.parse(stored);
    } catch (e) {
      console.error('Error parsing stored state, resetting to defaults.', e);
      appState.topics = JSON.parse(JSON.stringify(defaultSeedData));
    }
  } else {
    appState.topics = JSON.parse(JSON.stringify(defaultSeedData));
    saveState();
  }

  // Set default active topic & expand it
  if (appState.topics.length > 0) {
    appState.activeTopicId = appState.topics[0].id;
    expandedTopics.add(appState.topics[0].id);
  }

  // Session login check
  const loggedInSession = sessionStorage.getItem('dsa_grid_is_logged_in') === 'true';
  appState.isLoggedIn = loggedInSession;
  appState.username = sessionStorage.getItem('dsa_grid_username') || '';
  appState.currentView = loggedInSession ? 'dashboard' : 'login';
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(appState.topics));
}

// User Accounts Helpers for Signup / Login
function getRegisteredUsers() {
  const stored = localStorage.getItem('dsa_grid_registered_users');
  return stored ? JSON.parse(stored) : {};
}

function saveRegisteredUsers(users) {
  localStorage.setItem('dsa_grid_registered_users', JSON.stringify(users));
}

// Switch View Router
function switchView(view) {
  appState.currentView = view;
  
  const viewLogin = document.getElementById('view-login');
  const appNavbar = document.getElementById('app-nav');
  const appMainLayout = document.getElementById('app-main-layout');
  const viewSidebar = document.getElementById('sidebar-layout');
  const viewStatsDashboard = document.getElementById('view-stats-dashboard');
  const viewSheetTracker = document.getElementById('view-sheet-tracker');
  
  const navBtnDashboard = document.getElementById('nav-btn-dashboard');
  const navBtnSheet = document.getElementById('nav-btn-sheet');

  if (!appState.isLoggedIn) {
    if (viewLogin) viewLogin.style.display = 'flex';
    if (appNavbar) appNavbar.style.display = 'none';
    if (appMainLayout) appMainLayout.style.display = 'none';
    return;
  }

  if (viewLogin) viewLogin.style.display = 'none';
  if (appNavbar) appNavbar.style.display = 'flex';
  if (appMainLayout) appMainLayout.style.display = 'flex';

  document.getElementById('nav-user-display').textContent = `Hello, ${escapeHtml(appState.username || 'Coder')}`;

  if (view === 'dashboard') {
    if (viewSidebar) viewSidebar.style.display = 'none'; // hide phases sidebar on topics landing dashboard
    if (viewStatsDashboard) viewStatsDashboard.style.display = 'block';
    if (viewSheetTracker) viewSheetTracker.style.display = 'none';
    
    if (navBtnDashboard) navBtnDashboard.classList.add('active');
    if (navBtnSheet) navBtnSheet.classList.remove('active');
    
    renderStatsDashboard();
  } else if (view === 'tracker') {
    if (viewSidebar) viewSidebar.style.display = 'flex'; // show phases sidebar inside topic sheets
    if (viewStatsDashboard) viewStatsDashboard.style.display = 'none';
    if (viewSheetTracker) viewSheetTracker.style.display = 'flex';
    
    if (navBtnDashboard) navBtnDashboard.classList.remove('active');
    if (navBtnSheet) navBtnSheet.classList.add('active');
    
    renderPhasesSidebar();
    renderActiveTopicSheet();
  }
}

// Render dynamic Dashboard cards
function renderStatsDashboard() {
  let totalSolved = 0;
  let totalQuestions = 0;
  let easySolved = 0;
  let mediumSolved = 0;
  let hardSolved = 0;

  const cardsGrid = document.getElementById('topic-cards-grid');
  cardsGrid.innerHTML = '';

  appState.topics.forEach(topic => {
    let topicTotal = 0;
    let topicSolved = 0;

    topic.phases.forEach(phase => {
      phase.questions.forEach(q => {
        topicTotal++;
        totalQuestions++;
        if (q.solved) {
          topicSolved++;
          totalSolved++;
          if (q.difficulty === 'easy') easySolved++;
          else if (q.difficulty === 'medium') mediumSolved++;
          else if (q.difficulty === 'hard') hardSolved++;
        }
      });
    });

    const percent = topicTotal > 0 ? Math.round((topicSolved / topicTotal) * 100) : 0;

    const card = document.createElement('div');
    card.className = 'topic-dashboard-card';
    card.innerHTML = `
      <div class="topic-card-header">
        <span class="topic-card-title">${escapeHtml(topic.name)}</span>
        <span class="topic-card-meta">${topicSolved}/${topicTotal} Solved</span>
      </div>
      <div class="progress-track" style="height: 6px; margin-top: 0.25rem;">
        <div class="progress-bar" style="width: ${percent}%;"></div>
      </div>
      <div class="topic-card-footer">
        <button class="btn btn-secondary btn-open-topic-sheet" data-topic-id="${topic.id}" style="padding: 0.4rem 1rem; font-size: 0.8rem;" type="button">Open Sheet</button>
      </div>
    `;

    card.querySelector('.btn-open-topic-sheet').addEventListener('click', () => {
      appState.activeTopicId = topic.id;
      // Auto-select the first Phase, if present
      if (topic.phases && topic.phases.length > 0) {
        appState.activePhaseId = topic.phases[0].id;
      } else {
        appState.activePhaseId = null;
      }
      appState.currentView = 'tracker';
      switchView('tracker');
      renderApp();
    });

    cardsGrid.appendChild(card);
  });

  const overallPercent = totalQuestions > 0 ? Math.round((totalSolved / totalQuestions) * 100) : 0;

  // Update Summary numbers
  document.getElementById('dash-solved-ratio').textContent = `${totalSolved}/${totalQuestions}`;
  document.getElementById('dash-solved-percent').textContent = `${overallPercent}%`;
  document.getElementById('dash-progress-bar').style.width = `${overallPercent}%`;
  
  document.getElementById('dash-solved-easy').textContent = easySolved;
  document.getElementById('dash-solved-medium').textContent = mediumSolved;
  document.getElementById('dash-solved-hard').textContent = hardSolved;
}

// Global UI Rendering Router
function renderApp() {
  if (!appState.isLoggedIn) {
    switchView('login');
    return;
  }
  
  // Toggles the view divs and triggers child rendering
  switchView(appState.currentView);
  updateOverallStats();
}


// 1. Sidebar rendering
// 1. Phase Sidebar rendering inside Tracker View
function renderPhasesSidebar() {
  const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
  const phasesListContainer = document.getElementById('phases-list-sidebar');
  const topicTitleEl = document.getElementById('sidebar-active-topic-title');

  if (!activeTopic) return;

  topicTitleEl.textContent = activeTopic.name;
  phasesListContainer.innerHTML = '';

  if (activeTopic.phases.length === 0) {
    phasesListContainer.innerHTML = `
      <div style="color: var(--text-muted); font-size: 0.8rem; font-style: italic; padding: 0.5rem 0.75rem;">
        No phases. Click Add Phase below.
      </div>
    `;
    return;
  }

  activeTopic.phases.forEach(phase => {
    // calculate solved progress count
    const totalQ = phase.questions.length;
    const solvedQ = phase.questions.filter(q => q.solved).length;
    
    const isPhaseActive = phase.id === appState.activePhaseId;
    const phaseActiveCls = isPhaseActive ? 'active' : '';

    const phaseItem = document.createElement('div');
    phaseItem.className = `sidebar-phase-item ${phaseActiveCls}`;
    phaseItem.style.display = 'flex';
    phaseItem.style.alignItems = 'center';
    phaseItem.style.justifyContent = 'space-between';
    phaseItem.style.padding = '0.65rem 0.75rem';
    phaseItem.style.borderRadius = '8px';
    phaseItem.style.cursor = 'pointer';
    phaseItem.style.transition = 'var(--transition-smooth)';
    
    phaseItem.innerHTML = `
      <div class="topic-info" style="gap: 0.5rem; flex-grow: 1; overflow: hidden; display: flex; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity: 0.8;">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <line x1="9" y1="9" x2="15" y2="9"></line>
          <line x1="9" y1="13" x2="15" y2="13"></line>
        </svg>
        <span style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap; font-size: 0.9rem; font-weight: 500;">${escapeHtml(phase.name)}</span>
      </div>
      <div class="flex gap-2 align-center" style="flex-shrink: 0; display: flex; align-items: center; gap: 0.5rem;">
        <span class="topic-count" style="font-size: 0.75rem; padding: 0.15rem 0.45rem; background: rgba(255,255,255,0.04); border-radius: 4px; color: var(--text-secondary);">${solvedQ}/${totalQ}</span>
        <button class="icon-btn btn-delete-phase-sidebar" data-phase-id="${phase.id}" title="Delete Phase" type="button" style="padding: 0.2rem; color: var(--text-muted); transition: var(--transition-smooth);">
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      </div>
    `;

    // Click handler to select phase
    phaseItem.addEventListener('click', (e) => {
      if (e.target.closest('.btn-delete-phase-sidebar')) return;
      appState.activePhaseId = phase.id;
      renderApp();
    });

    // Hover effect adjustments inside javascript for deletion hover
    const delBtn = phaseItem.querySelector('.btn-delete-phase-sidebar');
    delBtn.addEventListener('mouseover', () => {
      delBtn.style.color = 'var(--danger)';
    });
    delBtn.addEventListener('mouseout', () => {
      delBtn.style.color = 'var(--text-muted)';
    });

    // Delete Phase listener
    delBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (confirm(`Delete the phase "${phase.name}" and all its questions?`)) {
        activeTopic.phases = activeTopic.phases.filter(p => p.id !== phase.id);
        if (appState.activePhaseId === phase.id) {
          appState.activePhaseId = activeTopic.phases.length > 0 ? activeTopic.phases[0].id : null;
        }
        saveState();
        renderApp();
      }
    });

    phasesListContainer.appendChild(phaseItem);
  });
}


// 2. Active Topic Details Sheet
function renderActiveTopicSheet() {
  const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
  const phasesContainer = document.getElementById('phases-container');
  const activeTitle = document.getElementById('active-topic-title');
  const activeSubtitle = document.getElementById('active-topic-subtitle');
  const headerEl = document.querySelector('.header');
  const filtersBarEl = document.querySelector('.filters-bar');

  if (!activeTopic) {
    if (headerEl) headerEl.style.display = 'none';
    if (filtersBarEl) filtersBarEl.style.display = 'none';
    
    phasesContainer.innerHTML = `
      <div class="empty-state">
        <svg class="empty-state-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <h4 class="empty-state-title">No Active Topic</h4>
        <p class="empty-state-desc">Create a new topic in the sidebar to start tracking your DSA questions.</p>
      </div>
    `;
    return;
  }

  // 1. TOPIC VIEW (No Phase selected): Show empty dashboard directory overview
  if (!appState.activePhaseId) {
    if (headerEl) headerEl.style.display = 'none';
    if (filtersBarEl) filtersBarEl.style.display = 'none';

    phasesContainer.innerHTML = `
      <div class="empty-state" style="padding: 4rem 2rem; width: 100%; display: flex; flex-direction: column; align-items: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" style="opacity: 0.2; margin-bottom: 1.5rem; color: var(--text-secondary);">
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <h2 style="font-family: var(--font-heading); font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem; background: linear-gradient(135deg, #fff, var(--text-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
          ${escapeHtml(activeTopic.name)}
        </h2>
        <p style="color: var(--text-muted); font-size: 0.95rem; margin-bottom: 2rem; max-width: 450px; line-height: 1.5; text-align: center;">
          Select a phase under <strong>${escapeHtml(activeTopic.name)}</strong> in the sidebar folder structure to view your question board, or manage the topic and backup below.
        </p>
        
        <div class="flex gap-3 justify-center" style="flex-wrap: wrap; margin-bottom: 2.5rem;">
          <button class="btn btn-secondary" id="btn-edit-active-topic" type="button">
            Rename Topic
          </button>
          <button class="btn btn-secondary btn-danger" id="btn-delete-active-topic" style="background: rgba(239, 68, 68, 0.08); border-color: rgba(239, 68, 68, 0.2);" type="button">
            Delete Topic
          </button>
          <button class="btn btn-secondary" id="btn-export-from-empty" type="button">
            Export Sheet
          </button>
          <button class="btn btn-secondary" id="btn-import-from-empty" type="button">
            Import Sheet
          </button>
          <button class="btn btn-primary" id="btn-add-phase-from-empty" type="button">
            + Add New Phase
          </button>
        </div>

        <div style="width: 100%; max-width: 500px; text-align: left; background: rgba(255,255,255,0.015); border: 1px solid var(--border-glass); border-radius: 12px; padding: 1.5rem;">
          <h5 style="color: var(--text-muted); font-size: 0.75rem; font-weight: 700; text-transform: uppercase; margin-bottom: 1rem; border-bottom: 1px solid var(--border-glass); padding-bottom: 0.5rem; letter-spacing: 0.05em;">Phases in this Topic</h5>
          <div id="phases-list-dashboard" class="flex flex-col gap-2" style="width: 100%;">
            <!-- Loaded dynamically -->
          </div>
        </div>
      </div>
    `;

    // Render list of phases in the dashboard
    const listDashboard = document.getElementById('phases-list-dashboard');
    if (activeTopic.phases.length === 0) {
      listDashboard.innerHTML = `<span style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">No phases created yet. Click "+ Add New Phase" to create one.</span>`;
    } else {
      listDashboard.innerHTML = '';
      activeTopic.phases.forEach(p => {
        const row = document.createElement('div');
        row.className = 'flex align-center justify-between';
        row.style.padding = '0.5rem 0';
        row.style.borderBottom = '1px solid rgba(255, 255, 255, 0.03)';
        row.innerHTML = `
          <span style="font-weight: 500; font-size: 0.95rem; color: var(--text-secondary); cursor: pointer; transition: var(--transition-smooth);" class="btn-open-phase-dash" data-phase-id="${p.id}">
            📁 ${escapeHtml(p.name)}
          </span>
          <div class="flex gap-2">
            <button class="icon-btn btn-rename-phase-dash" data-phase-id="${p.id}" title="Rename Phase" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </button>
            <button class="icon-btn icon-btn-danger btn-delete-phase-dash" data-phase-id="${p.id}" title="Delete Phase" type="button">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>
        `;
        
        row.querySelector('.btn-open-phase-dash').addEventListener('mouseover', (e) => {
          e.target.style.color = 'var(--text-primary)';
        });
        row.querySelector('.btn-open-phase-dash').addEventListener('mouseout', (e) => {
          e.target.style.color = 'var(--text-secondary)';
        });

        listDashboard.appendChild(row);
      });

      listDashboard.querySelectorAll('.btn-open-phase-dash').forEach(el => {
        el.addEventListener('click', () => {
          appState.activePhaseId = el.getAttribute('data-phase-id');
          renderApp();
        });
      });

      listDashboard.querySelectorAll('.btn-rename-phase-dash').forEach(el => {
        el.addEventListener('click', () => {
          const pId = el.getAttribute('data-phase-id');
          const phase = activeTopic.phases.find(p => p.id === pId);
          if (phase) {
            const newName = prompt('Enter new phase name:', phase.name);
            if (newName && newName.trim() !== '') {
              phase.name = newName.trim();
              saveState();
              renderApp();
            }
          }
        });
      });

      listDashboard.querySelectorAll('.btn-delete-phase-dash').forEach(el => {
        el.addEventListener('click', () => {
          const pId = el.getAttribute('data-phase-id');
          const phase = activeTopic.phases.find(p => p.id === pId);
          if (phase && confirm(`Are you sure you want to delete phase "${phase.name}" and all of its questions?`)) {
            activeTopic.phases = activeTopic.phases.filter(p => p.id !== pId);
            saveState();
            renderApp();
          }
        });
      });
    }

    // Add Topic View actions listeners
    document.getElementById('btn-edit-active-topic').addEventListener('click', () => {
      const newName = prompt('Enter new topic name:', activeTopic.name);
      if (newName && newName.trim() !== '') {
        activeTopic.name = newName.trim();
        saveState();
        renderApp();
      }
    });

    document.getElementById('btn-delete-active-topic').addEventListener('click', () => {
      if (confirm(`Are you sure you want to delete the topic "${activeTopic.name}" and all its questions?`)) {
        appState.topics = appState.topics.filter(t => t.id !== activeTopic.id);
        appState.activeTopicId = appState.topics.length > 0 ? appState.topics[0].id : null;
        appState.activePhaseId = null;
        saveState();
        renderApp();
      }
    });

    document.getElementById('btn-add-phase-from-empty').addEventListener('click', () => {
      openModal(document.getElementById('modal-add-phase'));
    });

    document.getElementById('btn-export-from-empty').addEventListener('click', () => {
      document.getElementById('btn-export-data').click();
    });

    document.getElementById('btn-import-from-empty').addEventListener('click', () => {
      document.getElementById('btn-import-data').click();
    });

    return;
  }

  // 2. FOCUS PHASE VIEW: Render only minimalist sheet spanning the full dashboard width/height
  const activePhase = activeTopic.phases.find(p => p.id === appState.activePhaseId);
  if (activePhase) {
    if (headerEl) headerEl.style.display = 'none';
    if (filtersBarEl) filtersBarEl.style.display = 'none';

    phasesContainer.innerHTML = `
      <div class="focus-mode-view">
        <div class="minimal-breadcrumb">
          <a href="#" id="btn-back-to-topic" title="Back to topic overview">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" style="margin-right: 0.15rem;">
              <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
            </svg>
            ${escapeHtml(activeTopic.name)}
          </a>
          <span class="separator">/</span>
          <span class="active-node">${escapeHtml(activePhase.name)}</span>
        </div>

        <table class="minimal-table">
          <thead>
            <tr>
              <th style="width: 70px; text-align: center;">Status</th>
              <th>Question Name</th>
              <th style="width: 250px;">Practice Link</th>
            </tr>
          </thead>
          <tbody id="tbody-minimal-${activePhase.id}">
            <!-- Questions load here -->
          </tbody>
        </table>
      </div>
    `;

    const tbody = document.getElementById(`tbody-minimal-${activePhase.id}`);
    const questions = activePhase.questions;

    if (questions.length === 0) {
      const emptyRow = document.createElement('tr');
      emptyRow.innerHTML = `
        <td colspan="3" style="text-align: center; color: var(--text-muted); padding: 3rem;">
          No questions in this phase yet. Add one using the row below!
        </td>
      `;
      tbody.appendChild(emptyRow);
    } else {
      questions.forEach(question => {
        const tr = document.createElement('tr');
        if (question.solved) {
          tr.className = 'completed';
        }

        const platformInfo = detectPlatform(question.link);
        const linkBadgeClass = platformInfo.badgeClass || 'badge-custom-link';
        const linkText = platformInfo.name || 'Link';

        tr.innerHTML = `
          <td class="checkbox-cell" style="width: 70px; text-align: center;">
            <input type="checkbox" class="custom-checkbox q-checkbox-minimal" 
                   data-question-id="${question.id}" 
                   ${question.solved ? 'checked' : ''}
                   aria-label="Mark ${escapeHtml(question.title)} as solved">
          </td>
          <td>
            <span class="question-title-text" style="font-weight: 500; color: var(--text-primary); font-size: 1rem;">${escapeHtml(question.title)}</span>
          </td>
          <td>
            ${question.link ? `
              <a href="${escapeHtml(question.link)}" target="_blank" rel="noopener noreferrer" class="badge ${linkBadgeClass}" style="text-decoration: none; display: inline-flex; align-items: center; gap: 0.25rem;">
                <span>${linkText}</span>
                <svg class="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="opacity: 0.8;">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            ` : `<span style="color: var(--text-muted); font-size: 0.85rem; font-style: italic;">No Link</span>`}
          </td>
        `;
        tbody.appendChild(tr);
      });
    }

    // Minimalist Quick Add row at the bottom of the table
    const quickAddTr = document.createElement('tr');
    quickAddTr.className = 'minimal-quick-add-row';
    quickAddTr.innerHTML = `
      <td></td>
      <td>
        <input type="text" class="table-input qa-title-minimal" placeholder="Type question name..." style="width: 100%; padding: 0.5rem 0.75rem; background: rgba(15, 23, 42, 0.4);" />
      </td>
      <td>
        <div class="flex align-center gap-2" style="width: 100%;">
          <input type="url" class="table-input qa-link-minimal" placeholder="Paste practice link (optional)..." style="flex-grow: 1; padding: 0.5rem 0.75rem; background: rgba(15, 23, 42, 0.4);" />
          <button class="btn btn-primary btn-qa-add-minimal" style="padding: 0.5rem 1rem; flex-shrink: 0;" type="button">Add</button>
        </div>
      </td>
    `;
    tbody.appendChild(quickAddTr);

    // Event listener for Back Button
    document.getElementById('btn-back-to-topic').addEventListener('click', (e) => {
      e.preventDefault();
      appState.activePhaseId = null;
      renderApp();
    });

    // Checkbox listener for minimal checkboxes
    tbody.querySelectorAll('.q-checkbox-minimal').forEach(chk => {
      chk.addEventListener('change', (e) => {
        const qId = e.target.getAttribute('data-question-id');
        const question = questions.find(q => q.id === qId);
        if (question) {
          question.solved = e.target.checked;
          saveState();
          const tr = e.target.closest('tr');
          if (question.solved) {
            tr.classList.add('completed');
          } else {
            tr.classList.remove('completed');
          }
          updateOverallStats();
          renderTopicsSidebar();
        }
      });
    });

    // Quick Add logic
    const qaTitleInput = quickAddTr.querySelector('.qa-title-minimal');
    const qaLinkInput = quickAddTr.querySelector('.qa-link-minimal');
    const qaAddBtn = quickAddTr.querySelector('.btn-qa-add-minimal');

    const handleMinimalAdd = () => {
      const title = qaTitleInput.value.trim();
      const link = qaLinkInput.value.trim();
      if (!title) {
        alert('Please enter a question title.');
        qaTitleInput.focus();
        return;
      }

      const newQ = {
        id: 'q-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        title,
        link,
        difficulty: 'medium',
        solved: false,
        notes: ''
      };

      activePhase.questions.push(newQ);
      saveState();
      renderApp();
    };

    qaAddBtn.addEventListener('click', handleMinimalAdd);
    qaTitleInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleMinimalAdd();
    });
    qaLinkInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleMinimalAdd();
    });
  }
}


// 3. Overall stats calculations
function updateOverallStats() {
  let total = 0;
  let solved = 0;

  appState.topics.forEach(t => {
    t.phases.forEach(p => {
      p.questions.forEach(q => {
        total++;
        if (q.solved) solved++;
      });
    });
  });

  const percent = total > 0 ? Math.round((solved / total) * 100) : 0;
  
  document.getElementById('stat-solved-ratio').textContent = `${solved}/${total}`;
  document.getElementById('stat-percent').textContent = `${percent}%`;
}

// Event Listeners for DOM elements within rendering loops
function attachSheetEventListeners() {
  const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
  if (!activeTopic) return;

  // Toggle solved status
  document.querySelectorAll('.q-checkbox').forEach(chk => {
    chk.addEventListener('change', (e) => {
      const qId = e.target.getAttribute('data-question-id');
      const pId = e.target.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const question = phase.questions.find(q => q.id === qId);
        if (question) {
          question.solved = e.target.checked;
          saveState();
          // Update row class
          const tr = e.target.closest('tr');
          if (question.solved) {
            tr.classList.add('completed');
          } else {
            tr.classList.remove('completed');
          }
          updateOverallStats();
          // Re-render sidebar/sheet stats silently
          renderTopicsSidebar();
          
          // Re-render local phase progress
          const solvedPhaseQ = phase.questions.filter(q => q.solved).length;
          const totalPhaseQ = phase.questions.length;
          const percentPhase = totalPhaseQ > 0 ? Math.round((solvedPhaseQ / totalPhaseQ) * 100) : 0;
          const phaseSec = document.getElementById(`phase-sec-${pId}`);
          if (phaseSec) {
            phaseSec.querySelector('.progress-bar').style.width = `${percentPhase}%`;
            phaseSec.querySelector('.progress-text').textContent = `${percentPhase}%`;
          }
        }
      }
    });
  });

  // Edit Question (triggers Modal)
  document.querySelectorAll('.btn-edit-question').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const qId = btn.getAttribute('data-question-id');
      const pId = btn.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const question = phase.questions.find(q => q.id === qId);
        if (question) {
          document.getElementById('question-modal-title').textContent = "Edit Question Details";
          document.getElementById('input-question-id').value = question.id;
          document.getElementById('input-question-phase-id').value = phase.id;
          document.getElementById('input-question-title').value = question.title;
          document.getElementById('input-question-link').value = question.link || '';
          document.getElementById('input-question-difficulty').value = question.difficulty;
          document.getElementById('input-question-notes').value = question.notes || '';
          
          openModal(document.getElementById('modal-question'));
        }
      }
    });
  });

  // Add Question Button (triggers modal)
  document.querySelectorAll('.btn-show-add-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const pId = btn.getAttribute('data-phase-id');
      document.getElementById('question-modal-title').textContent = "Add New Question";
      document.getElementById('input-question-id').value = '';
      document.getElementById('input-question-phase-id').value = pId;
      document.getElementById('input-question-title').value = '';
      document.getElementById('input-question-link').value = '';
      document.getElementById('input-question-difficulty').value = 'medium';
      document.getElementById('input-question-notes').value = '';
      
      openModal(document.getElementById('modal-question'));
    });
  });

  // Delete Question
  document.querySelectorAll('.btn-delete-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const qId = btn.getAttribute('data-question-id');
      const pId = btn.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const question = phase.questions.find(q => q.id === qId);
        if (question && confirm(`Delete the question "${question.title}"?`)) {
          phase.questions = phase.questions.filter(q => q.id !== qId);
          saveState();
          renderApp();
        }
      }
    });
  });

  // View / Edit Notes Drawer
  document.querySelectorAll('.notes-trigger').forEach(trigger => {
    const handler = () => {
      const qId = trigger.getAttribute('data-question-id');
      const pId = trigger.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const question = phase.questions.find(q => q.id === qId);
        if (question) {
          document.getElementById('notes-modal-title').textContent = `Approach Notes: ${question.title}`;
          document.getElementById('notes-question-id').value = question.id;
          document.getElementById('notes-phase-id').value = phase.id;
          document.getElementById('textarea-notes').value = question.notes || '';
          
          openModal(document.getElementById('modal-notes'));
        }
      }
    };
    trigger.addEventListener('click', handler);
    trigger.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handler();
      }
    });
  });

  // Rename Phase
  document.querySelectorAll('.btn-edit-phase-title').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent collapse trigger
      const pId = btn.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const newName = prompt('Enter new phase name:', phase.name);
        if (newName && newName.trim() !== '') {
          phase.name = newName.trim();
          saveState();
          renderApp();
        }
      }
    });
  });

  // Delete Phase
  document.querySelectorAll('.btn-delete-phase').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation(); // prevent collapse trigger
      const pId = btn.getAttribute('data-phase-id');
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase && confirm(`Are you sure you want to delete "${phase.name}" and all of its questions?`)) {
        activeTopic.phases = activeTopic.phases.filter(p => p.id !== pId);
        saveState();
        renderApp();
      }
    });
  });

  // Collapse / Expand Phase Header click
  document.querySelectorAll('.phase-header').forEach(header => {
    header.addEventListener('click', (e) => {
      // Ignore click if clicking button or input
      if (e.target.closest('button') || e.target.closest('input')) return;
      
      const phaseId = header.getAttribute('data-phase-id');
      const phaseSec = document.getElementById(`phase-sec-${phaseId}`);
      if (phaseSec) {
        phaseSec.classList.toggle('collapsed');
      }
    });
  });
}

// 4. Modal Open/Close helpers
function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  // Focus first input
  const firstInput = modal.querySelector('input, select, textarea');
  if (firstInput) setTimeout(() => firstInput.focus(), 100);
}

function closeModal(modal) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
}

// 5. Global Event Listeners setup
function setupEventListeners() {
  // Add Topic Modals Trigger (from Dashboard view)
  document.getElementById('btn-add-topic-dash').addEventListener('click', () => {
    document.getElementById('input-topic-name').value = '';
    openModal(document.getElementById('modal-add-topic'));
  });

  // Close modals
  document.querySelectorAll('.modal-close, .btn-secondary[id^="btn-cancel"], .btn-close-notes, .modal-overlay').forEach(btn => {
    btn.addEventListener('click', (e) => {
      // If clicking overlay, only close if clicking the actual overlay background
      if (e.target.classList.contains('modal-overlay') || e.target.classList.contains('modal-close') || e.target.id.includes('cancel') || e.target.id === 'btn-close-notes') {
        const activeModal = document.querySelector('.modal-overlay.active');
        if (activeModal) closeModal(activeModal);
      }
    });
  });

  // Save New Topic
  document.getElementById('form-add-topic').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('input-topic-name').value.trim();
    if (name) {
      const newTopic = {
        id: 'topic-' + Date.now(),
        name,
        phases: [
          {
            id: 'phase-' + Date.now() + '-1',
            name: 'Phase 1: Basics',
            questions: []
          }
        ]
      };
      appState.topics.push(newTopic);
      appState.activeTopicId = newTopic.id;
      appState.activePhaseId = null;
      saveState();
      closeModal(document.getElementById('modal-add-topic'));
      renderApp();
    }
  });

  // Save New Phase
  document.getElementById('form-add-phase').addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('input-phase-name').value.trim();
    const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
    if (name && activeTopic) {
      const newPhase = {
        id: 'phase-' + Date.now(),
        name,
        questions: []
      };
      activeTopic.phases.push(newPhase);
      saveState();
      closeModal(document.getElementById('modal-add-phase'));
      renderApp();
      // Scroll to newly added phase
      setTimeout(() => {
        const newSec = document.getElementById(`phase-sec-${newPhase.id}`);
        if (newSec) newSec.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  });

  // Save Question (Add or Edit)
  document.getElementById('form-question').addEventListener('submit', (e) => {
    e.preventDefault();
    const qId = document.getElementById('input-question-id').value;
    const pId = document.getElementById('input-question-phase-id').value;
    const title = document.getElementById('input-question-title').value.trim();
    const link = document.getElementById('input-question-link').value.trim();
    const difficulty = document.getElementById('input-question-difficulty').value;
    const notes = document.getElementById('input-question-notes').value.trim();

    const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
    if (!activeTopic) return;

    const phase = activeTopic.phases.find(p => p.id === pId);
    if (!phase) return;

    if (qId) {
      // Editing existing question
      const question = phase.questions.find(q => q.id === qId);
      if (question) {
        question.title = title;
        question.link = link;
        question.difficulty = difficulty;
        question.notes = notes;
      }
    } else {
      // Adding new question
      const newQ = {
        id: 'q-' + Date.now(),
        title,
        link,
        difficulty,
        solved: false,
        notes
      };
      phase.questions.push(newQ);
    }

    saveState();
    closeModal(document.getElementById('modal-question'));
    renderApp();
  });

  // Save Notes (Drawer Editor)
  document.getElementById('form-notes').addEventListener('submit', (e) => {
    e.preventDefault();
    const qId = document.getElementById('notes-question-id').value;
    const pId = document.getElementById('notes-phase-id').value;
    const notes = document.getElementById('textarea-notes').value.trim();

    const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
    if (activeTopic) {
      const phase = activeTopic.phases.find(p => p.id === pId);
      if (phase) {
        const question = phase.questions.find(q => q.id === qId);
        if (question) {
          question.notes = notes;
          saveState();
          closeModal(document.getElementById('modal-notes'));
          renderActiveTopicSheet(); // refresh active view
        }
      }
    }
  });

  // Search filter box
  document.getElementById('search-input').addEventListener('input', (e) => {
    appState.searchQuery = e.target.value;
    renderActiveTopicSheet();
  });

  // Filter Pills click logic
  document.querySelectorAll('.filter-pill').forEach(pill => {
    pill.addEventListener('click', (e) => {
      document.querySelectorAll('.filter-pill').forEach(p => {
        p.classList.remove('active');
        p.setAttribute('aria-selected', 'false');
      });
      pill.classList.add('active');
      pill.setAttribute('aria-selected', 'true');
      
      appState.activeFilter = pill.getAttribute('data-filter');
      renderActiveTopicSheet();
    });
  });

  // Export JSON
  document.getElementById('btn-export-data').addEventListener('click', () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(appState.topics, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `dsa_grid_backup_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });

  // Import JSON Trigger
  document.getElementById('btn-import-data').addEventListener('click', () => {
    document.getElementById('import-file-input').click();
  });

  // Import JSON Handling
  document.getElementById('import-file-input').addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const importedData = JSON.parse(evt.target.result);
        
        // Simple verification that data is in valid format
        if (Array.isArray(importedData) && importedData.length > 0 && importedData[0].name && importedData[0].phases) {
          appState.topics = importedData;
          appState.activeTopicId = appState.topics[0].id;
          appState.activePhaseId = null;
          saveState();
          renderApp();
          alert('DSA progress sheet imported successfully!');
        } else {
          alert('Invalid file format. Please upload a JSON file exported from this app.');
        }
      } catch (err) {
        alert('Failed to parse JSON file.');
        console.error(err);
      }
    };
    reader.readAsText(file);
    // Clear input value so same file can be selected again
    e.target.value = '';
  });

  // Pressing escape closes any active modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const activeModal = document.querySelector('.modal-overlay.active');
      if (activeModal) closeModal(activeModal);
    }
  });

  // Toggle between Login and Signup screens
  document.getElementById('link-go-to-signup').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('auth-login-view').style.display = 'none';
    document.getElementById('auth-signup-view').style.display = 'block';
  });

  document.getElementById('link-go-to-login').addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('auth-signup-view').style.display = 'none';
    document.getElementById('auth-login-view').style.display = 'block';
  });

  // Signup Form Submission
  document.getElementById('form-signup').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-username').value.trim().toLowerCase();
    const password = document.getElementById('signup-password').value;
    
    if (!email || !password) return;
    
    const users = getRegisteredUsers();
    if (users[email]) {
       alert('Email already registered! Please log in.');
       return;
    }
    
    users[email] = password;
    saveRegisteredUsers(users);
    
    alert('Signup successful! Please log in.');
    // Clear signup inputs
    document.getElementById('signup-username').value = '';
    document.getElementById('signup-password').value = '';
    
    // Toggle back to login
    document.getElementById('auth-signup-view').style.display = 'none';
    document.getElementById('auth-login-view').style.display = 'block';
  });

  // Login Form Submission
  document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-username').value.trim().toLowerCase();
    const password = document.getElementById('login-password').value;
    
    if (!email || !password) return;
    
    const users = getRegisteredUsers();
    const registeredPassword = users[email];
    
    const isValidDefault = (email === 'admin@dsa.com' || email === 'admin') && password === 'dsa';
    
    if (registeredPassword === password || isValidDefault) {
      appState.isLoggedIn = true;
      appState.username = email.split('@')[0]; // take email username segment
      sessionStorage.setItem('dsa_grid_is_logged_in', 'true');
      sessionStorage.setItem('dsa_grid_username', appState.username);
      switchView('dashboard');
      renderApp();
    } else {
      alert('Incorrect email or password! Please sign up first.');
    }
  });

  // Logout Click
  document.getElementById('btn-logout').addEventListener('click', () => {
    appState.isLoggedIn = false;
    appState.username = '';
    sessionStorage.removeItem('dsa_grid_is_logged_in');
    sessionStorage.removeItem('dsa_grid_username');
    switchView('login');
  });

  // Navigation View Toggle Clicks
  document.getElementById('nav-btn-dashboard').addEventListener('click', () => {
    switchView('dashboard');
  });

  document.getElementById('nav-btn-sheet').addEventListener('click', () => {
    switchView('tracker');
  });

  // Sidebar back button (goes to dashboard)
  document.getElementById('btn-sidebar-back').addEventListener('click', () => {
    appState.activePhaseId = null;
    appState.currentView = 'dashboard';
    switchView('dashboard');
    renderApp();
  });

  // Sidebar Add Phase Trigger
  document.getElementById('btn-sidebar-add-phase').addEventListener('click', () => {
    document.getElementById('input-phase-name').value = '';
    openModal(document.getElementById('modal-add-phase'));
  });

  // Sidebar Rename Topic Trigger
  document.getElementById('btn-sidebar-edit-topic').addEventListener('click', () => {
    const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
    if (activeTopic) {
      const newName = prompt('Enter new topic name:', activeTopic.name);
      if (newName && newName.trim() !== '') {
        activeTopic.name = newName.trim();
        saveState();
        renderApp();
      }
    }
  });

  // Sidebar Delete Topic Trigger
  document.getElementById('btn-sidebar-delete-topic').addEventListener('click', () => {
    const activeTopic = appState.topics.find(t => t.id === appState.activeTopicId);
    if (activeTopic && confirm(`Are you sure you want to delete topic "${activeTopic.name}" and all its questions?`)) {
      appState.topics = appState.topics.filter(t => t.id !== activeTopic.id);
      appState.activeTopicId = appState.topics.length > 0 ? appState.topics[0].id : null;
      appState.activePhaseId = null;
      appState.currentView = 'dashboard';
      saveState();
      renderApp();
    }
  });
}

// Helper: detect platform badge styling based on URL
function detectPlatform(url) {
  if (!url) return { name: 'None', badgeClass: 'badge-custom-link' };
  
  const urlLower = url.toLowerCase();
  if (urlLower.includes('leetcode.com')) {
    return { name: 'LeetCode', badgeClass: 'badge-leetcode' };
  } else if (urlLower.includes('geeksforgeeks.org')) {
    return { name: 'GFG', badgeClass: 'badge-gfg' };
  } else if (urlLower.includes('codeforces.com')) {
    return { name: 'Codeforces', badgeClass: 'badge-codeforces' };
  } else if (urlLower.includes('hackerrank.com')) {
    return { name: 'HackerRank', badgeClass: 'badge-hackerrank' };
  } else {
    // Attempt to pull domain name
    try {
      const domain = new URL(url).hostname.replace('www.', '');
      const parts = domain.split('.');
      const name = parts[0].charAt(0).toUpperCase() + parts[0].slice(1);
      return { name: name || 'Link', badgeClass: 'badge-custom-link' };
    } catch (e) {
      return { name: 'Link', badgeClass: 'badge-custom-link' };
    }
  }
}

// Helper: Escape HTML strings to prevent XSS
function escapeHtml(unsafe) {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
