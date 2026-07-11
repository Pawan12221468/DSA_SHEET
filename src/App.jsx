import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup    from './pages/Signup';
import Login     from './pages/Login';
import Dashboard from './pages/Dashboard';
import TopicPage from './pages/TopicPage';

// ── Storage ──────────────────────────────────────────────
const TOPICS_KEY = 'dsa_topics_v2';

const SEED = [
  {
    id: 'topic-arrays',
    name: 'Arrays',
    phases: [
      {
        id: 'ph-arr-1',
        name: 'Phase 1 - Basic Traversal',
        questions: [
          { id: 'q-arr-1-1', title: 'Print Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-2', title: 'Print Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-3', title: 'Print Alternate Elements', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-4', title: 'Find Largest Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-5', title: 'Find Smallest Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-6', title: 'Sum of Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-7', title: 'Average of Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-8', title: 'Count Even & Odd', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-9', title: 'Linear Search', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-10', title: 'Check Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-11', title: 'Maximum Difference (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-1-12', title: 'Frequency of Element (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-2',
        name: 'Phase 2 - Min / Max Tracking',
        questions: [
          { id: 'q-arr-2-1', title: 'Largest Element (Revision)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-2', title: 'Second Largest', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-3', title: 'Third Largest', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-4', title: 'Smallest Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-5', title: 'Second Smallest', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-6', title: 'Maximum Consecutive Ones', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-7', title: 'Maximum Difference', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-8', title: 'Minimum Difference Pair', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-9', title: 'Maximum Product Pair', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-10', title: 'Peak Element (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-2-11', title: 'Leaders in Array (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-3',
        name: 'Phase 3 - Counting Pattern',
        questions: [
          { id: 'q-arr-3-1', title: 'Count Positive Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-2', title: 'Count Negative Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-3', title: 'Count Zeroes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-4', title: 'Count Even Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-5', title: 'Count Odd Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-6', title: 'Count Prime Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-7', title: 'Count Duplicate Elements', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-8', title: 'Count Distinct Elements (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-9', title: 'Majority Element (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-10', title: 'Missing Number (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-11', title: 'Frequency Count (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-3-12', title: 'Pair With Given Sum (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-4',
        name: 'Phase 4 - Nested Loop Pattern',
        questions: [
          { id: 'q-arr-4-1', title: 'Pair Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-2', title: 'Triplet Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-3', title: 'Four Sum (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-4', title: 'Count Inversions (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-5', title: 'Equilibrium Index (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-6', title: 'Leaders in Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-7', title: 'Trapping Rain Water (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-8', title: 'Container With Most Water (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-9', title: 'Stock Buy & Sell (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-10', title: 'Maximum Product', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-11', title: 'Pair Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-12', title: 'Common Elements of Two Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-13', title: 'Duplicate Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-14', title: 'Missing Numbers', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-15', title: 'Union of Two Arrays (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-4-16', title: 'Intersection of Two Arrays (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-5',
        name: 'Phase 5 - Prefix Sum Pattern',
        questions: [
          { id: 'q-arr-5-1', title: 'Running Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-2', title: 'Prefix Sum Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-3', title: 'Range Sum Query', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-4', title: 'Left Sum Right Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-5', title: 'Pivot Index', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-6', title: 'Equilibrium Index', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-7', title: 'Count Prefix Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-8', title: 'Subarray Sum (Brute using Prefix)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-9', title: 'Prefix Maximum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-5-10', title: 'Prefix Minimum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-6',
        name: 'Phase 6 - Prefix + Suffix Pattern',
        questions: [
          { id: 'q-arr-6-1', title: 'Product Except Self', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-2', title: 'Left Maximum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-3', title: 'Right Maximum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-4', title: 'Trapping Rain Water', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-5', title: 'Equilibrium Index', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-6', title: 'Maximum Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-7', title: 'Prefix Maximum Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-6-8', title: 'Suffix Maximum Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-7',
        name: 'Phase 7 - Kadane Pattern',
        questions: [
          { id: 'q-arr-7-1', title: 'Maximum Subarray Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-2', title: 'Maximum Circular Subarray', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-3', title: 'Best Time to Buy & Sell Stock', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-4', title: 'Maximum Prefix Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-5', title: 'Maximum Suffix Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-6', title: 'Maximum Product Subarray (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-7', title: 'Maximum Sum Increasing Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-7-8', title: 'Largest Sum Contiguous Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-8',
        name: 'Phase 8 - Rearrangement Pattern',
        questions: [
          { id: 'q-arr-8-1', title: 'Move Zeroes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-2', title: 'Push Negative Left', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-3', title: 'Positive Negative Alternate', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-4', title: 'Segregate Even & Odd', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-5', title: 'Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-6', title: 'Rotate Left', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-7', title: 'Rotate Right', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-8', title: 'Rotate by K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-9', title: 'Reverse in Groups', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-10', title: 'Rearrange Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-11', title: 'Wave Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-12', title: 'Dutch National Flag (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-13', title: 'Rearrange by Sign', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-14', title: 'Shift Zeroes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-8-15', title: 'Alternate Positive & Negative', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-9',
        name: 'Phase 9 - Matrix Pattern',
        questions: [
          { id: 'q-arr-9-1', title: 'Matrix Addition', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-2', title: 'Matrix Multiplication', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-3', title: 'Transpose Matrix', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-4', title: 'Rotate Matrix (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-5', title: 'Spiral Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-6', title: 'Boundary Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-7', title: 'Row Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-8', title: 'Column Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-9', title: 'Diagonal Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-10', title: 'Search in Matrix (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-11', title: 'Print Snake Pattern', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-9-12', title: 'Print Wave Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-10',
        name: 'Phase 10 - Subarray Pattern',
        questions: [
          { id: 'q-arr-10-1', title: 'Print All Subarrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-2', title: 'Count Subarrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-3', title: 'Maximum Sum Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-4', title: 'Minimum Sum Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-5', title: 'Longest Subarray (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-6', title: 'Smallest Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-7', title: 'Subarray With Given Sum (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-8', title: 'Count Subarrays Equal K (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-9', title: 'Maximum Average Subarray (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-10', title: 'Fixed Window Sum (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-11', title: 'Largest Product', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-12', title: 'Largest Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-13', title: 'Maximum XOR (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-14', title: 'Equal Sum Subarrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-10-15', title: 'Longest Increasing Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-11',
        name: 'Phase 11 - Basic Two Pointer',
        questions: [
          { id: 'q-arr-11-1', title: 'Remove Duplicates', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-2', title: 'Merge Sorted Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-3', title: 'Two Sum (Sorted Array - Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-4', title: 'Remove Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-5', title: 'Move Zeroes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-6', title: 'Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-7', title: 'Squares of Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-8', title: 'Pair Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-9', title: 'Closest Pair', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-11-10', title: 'Sort Colors (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-12',
        name: 'Phase 12 - Basic Greedy Arrays',
        questions: [
          { id: 'q-arr-12-1', title: 'Stock Buy & Sell (Single Transaction)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-12-2', title: 'Gas Station (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-12-3', title: 'Jump Game (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-12-4', title: 'Candy (Brute)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-12-5', title: 'Maximum Meetings (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-13',
        name: '🔓 Unlocked after HashMap',
        questions: [
          { id: 'q-arr-13-1', title: 'Two Sum (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-2', title: 'Majority Element (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-3', title: 'Contains Duplicate', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-4', title: 'Longest Consecutive Sequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-5', title: 'Missing Number (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-6', title: 'Intersection of Arrays (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-7', title: 'Subarray Sum Equals K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-8', title: 'Count Equal 0 & 1', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-9', title: 'Zero Sum Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-13-10', title: 'Top K Frequent Elements (optimal later with Heap)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-14',
        name: '🔓 Unlocked after Two Pointer',
        questions: [
          { id: 'q-arr-14-1', title: 'Two Sum II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-2', title: 'Container With Most Water (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-3', title: 'Sort Colors', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-4', title: 'Remove Duplicates (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-5', title: 'Move Zeroes (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-6', title: 'Merge Sorted Arrays (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-14-7', title: 'Squares of Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-15',
        name: '🔓 Unlocked after Sliding Window',
        questions: [
          { id: 'q-arr-15-1', title: 'Maximum Sum of Size K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-2', title: 'First Negative in Every Window', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-3', title: 'Maximum Average Subarray', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-4', title: 'Fruits Into Baskets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-5', title: 'Longest Ones', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-6', title: 'Max Consecutive Ones III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-15-7', title: 'Minimum Size Subarray Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-16',
        name: '🔓 Unlocked after Binary Search',
        questions: [
          { id: 'q-arr-16-1', title: 'Binary Search', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-2', title: 'Search Insert Position', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-3', title: 'First & Last Occurrence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-4', title: 'Search in Rotated Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-5', title: 'Find Peak Element (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-6', title: 'Single Element in Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-7', title: 'Koko Eating Bananas', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-8', title: 'Capacity to Ship Packages', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-9', title: 'Aggressive Cows', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-16-10', title: 'Allocate Books', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-17',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-arr-17-1', title: 'K Largest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-17-2', title: 'K Smallest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-17-3', title: 'Kth Largest Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-17-4', title: 'Top K Frequent Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-17-5', title: 'K Closest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-17-6', title: 'Merge K Sorted Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-arr-18',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-arr-18-1', title: 'House Robber', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-2', title: 'Jump Game (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-3', title: 'Jump Game II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-4', title: 'Maximum Product Subarray (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-5', title: 'Maximum Sum Increasing Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-6', title: 'Longest Increasing Subsequence (LIS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-7', title: 'Partition Equal Subset Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-8', title: 'Coin Change (Array DP)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-arr-18-9', title: 'Target Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-strings',
    name: 'Strings',
    phases: [
      {
        id: 'ph-str-1',
        name: 'Phase 1 - Basic Traversal',
        questions: [
          { id: 'q-str-1-1', title: 'Print Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-2', title: 'Print Reverse String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-3', title: 'Print Alternate Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-4', title: 'Count Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-5', title: 'Count Vowels', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-6', title: 'Count Consonants', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-7', title: 'Count Digits', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-8', title: 'Count Spaces', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-9', title: 'Count Uppercase Letters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-10', title: 'Count Lowercase Letters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-11', title: 'Count Special Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-1-12', title: 'Sum of Digits in String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-2',
        name: 'Phase 2 - Reverse Pattern',
        questions: [
          { id: 'q-str-2-1', title: 'Reverse String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-2', title: 'Reverse Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-3', title: 'Reverse Each Word', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-4', title: 'Reverse Sentence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-5', title: 'Reverse Using StringBuilder', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-6', title: 'Reverse Only Alphabets (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-2-7', title: 'Reverse String Without Built-in Functions', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-3',
        name: 'Phase 3 - Palindrome Pattern',
        questions: [
          { id: 'q-str-3-1', title: 'Check Palindrome', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-2', title: 'Check Palindrome (Ignore Case)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-3', title: 'Check Palindrome (Ignore Spaces)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-4', title: 'Check Palindrome (Ignore Special Characters)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-5', title: 'Longest Palindrome (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-6', title: 'Count Palindrome Substrings (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-7', title: 'Palindrome Prefix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-3-8', title: 'Palindrome Suffix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-4',
        name: 'Phase 4 - Character Counting / Frequency (Brute)',
        questions: [
          { id: 'q-str-4-1', title: 'Frequency of Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-2', title: 'Most Frequent Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-3', title: 'Least Frequent Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-4', title: 'First Repeating Character (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-5', title: 'First Non-Repeating Character (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-6', title: 'Count Occurrences of Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-7', title: 'Duplicate Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-8', title: 'Remove Duplicate Characters (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-9', title: 'Print Unique Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-4-10', title: 'Character Histogram', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-5',
        name: 'Phase 5 - String Comparison Pattern',
        questions: [
          { id: 'q-str-5-1', title: 'Compare Two Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-2', title: 'Check Equality', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-3', title: 'Lexicographical Comparison', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-4', title: 'Check Rotation (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-5', title: 'Common Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-6', title: 'Difference Between Two Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-5-7', title: 'Compare Version Strings (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-6',
        name: 'Phase 6 - Substring Pattern',
        questions: [
          { id: 'q-str-6-1', title: 'Print All Substrings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-2', title: 'Count Substrings', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-3', title: 'Longest Word', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-4', title: 'Smallest Word', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-5', title: 'Longest Common Prefix (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-6', title: 'Count Occurrences of Substring', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-7', title: 'Replace Substring', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-8', title: 'Remove Substring', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-9', title: 'Check Prefix', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-10', title: 'Check Suffix', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-11', title: 'First Occurrence of Substring', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-6-12', title: 'Last Occurrence of Substring', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-7',
        name: 'Phase 7 - StringBuilder Pattern',
        questions: [
          { id: 'q-str-7-1', title: 'Reverse Using StringBuilder', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-2', title: 'Append Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-3', title: 'Insert Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-4', title: 'Delete Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-5', title: 'Replace Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-6', title: 'String Compression (Basic)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-7-7', title: 'Efficient String Construction', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-8',
        name: 'Phase 8 - Character Conversion Pattern',
        questions: [
          { id: 'q-str-8-1', title: 'Uppercase to Lowercase', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-2', title: 'Lowercase to Uppercase', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-3', title: 'Toggle Case', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-4', title: 'Character to Integer', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-5', title: 'Integer to Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-6', title: 'ASCII Value', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-7', title: 'Digit to Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-8-8', title: 'Character to Digit', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-9',
        name: 'Phase 9 - Sorting Pattern',
        questions: [
          { id: 'q-str-9-1', title: 'Sort Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-9-2', title: 'Sort String Alphabetically', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-9-3', title: 'Rearrange Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-9-4', title: 'Rearrange by ASCII', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-9-5', title: 'Sort by Frequency (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-9-6', title: 'Custom Character Sort (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-10',
        name: 'Phase 10 - Basic Two Pointer on Strings',
        questions: [
          { id: 'q-str-10-1', title: 'Reverse String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-2', title: 'Reverse Vowels (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-3', title: 'Valid Palindrome', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-4', title: 'Remove Spaces', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-5', title: 'Remove Extra Spaces', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-6', title: 'Reverse Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-7', title: 'Reverse Only Letters (Brute)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-8', title: 'Merge Strings Alternately', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-9', title: 'Compare Two Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-10-10', title: 'Compress Consecutive Characters (Basic)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-11',
        name: '🔓 Unlocked after HashMap',
        questions: [
          { id: 'q-str-11-1', title: 'Valid Anagram', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-2', title: 'Group Anagrams', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-3', title: 'First Unique Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-4', title: 'Isomorphic Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-5', title: 'Ransom Note', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-6', title: 'Word Pattern', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-7', title: 'Find Duplicate Characters (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-8', title: 'Character Frequency (Optimal)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-9', title: 'Longest Palindrome (HashMap)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-11-10', title: 'Find Common Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-12',
        name: '🔓 Unlocked after Two Pointer',
        questions: [
          { id: 'q-str-12-1', title: 'Reverse Vowels', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-12-2', title: 'Reverse Only Letters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-12-3', title: 'Valid Palindrome II', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-12-4', title: 'Backspace String Compare', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-12-5', title: 'Append Characters to Make Subsequence', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-13',
        name: '🔓 Unlocked after Sliding Window',
        questions: [
          { id: 'q-str-13-1', title: 'Longest Substring Without Repeating Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-2', title: 'Longest Repeating Character Replacement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-3', title: 'Minimum Window Substring', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-4', title: 'Find All Anagrams', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-5', title: 'Permutation in String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-6', title: 'Maximum Vowels in a Substring', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-13-7', title: 'Minimum Size Window', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-14',
        name: '🔓 Unlocked after Binary Search',
        questions: [
          { id: 'q-str-14-1', title: 'Longest Duplicate Substring (Binary Search + Hashing)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-14-2', title: 'Search Suggestions System', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-14-3', title: 'Minimum Time to Remove Characters (BS Based)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-15',
        name: '🔓 Unlocked after Recursion',
        questions: [
          { id: 'q-str-15-1', title: 'Reverse String Recursively', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-15-2', title: 'Palindrome Recursively', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-15-3', title: 'Remove Adjacent Duplicates', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-15-4', title: 'Print Subsequences', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-15-5', title: 'Generate Binary Strings', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-15-6', title: 'Generate Subsequences of String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-16',
        name: '🔓 Unlocked after Backtracking',
        questions: [
          { id: 'q-str-16-1', title: 'Letter Combinations of Phone Number', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-2', title: 'Generate Parentheses', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-3', title: 'Palindrome Partitioning', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-4', title: 'Word Search', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-5', title: 'Restore IP Addresses', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-6', title: 'Permutations of String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-7', title: 'Combination of Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-16-8', title: 'Split String into Unique Parts', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-17',
        name: '🔓 Unlocked after Stack',
        questions: [
          { id: 'q-str-17-1', title: 'Valid Parentheses', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-2', title: 'Decode String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-3', title: 'Simplify Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-4', title: 'Remove Adjacent Duplicates II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-5', title: 'Remove All Adjacent Duplicates', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-6', title: 'Infix to Postfix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-7', title: 'Postfix Evaluation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-17-8', title: 'Basic Calculator', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-18',
        name: '🔓 Unlocked after Trie',
        questions: [
          { id: 'q-str-18-1', title: 'Implement Trie', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-2', title: 'Search Word', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-3', title: 'Starts With Prefix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-4', title: 'Word Dictionary', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-5', title: 'Replace Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-6', title: 'Longest Word in Dictionary', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-18-7', title: 'Word Search II', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-19',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-str-19-1', title: 'Longest Common Subsequence (LCS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-2', title: 'Longest Common Substring', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-3', title: 'Edit Distance', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-4', title: 'Distinct Subsequences', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-5', title: 'Word Break', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-6', title: 'Interleaving String', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-7', title: 'Longest Palindromic Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-8', title: 'Palindrome Partitioning II', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-19-9', title: 'Regular Expression Matching', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-str-20',
        name: '🔓 Unlocked after Advanced String Algorithms',
        questions: [
          { id: 'q-str-20-1', title: 'KMP Pattern Matching', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-20-2', title: 'Rabin-Karp', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-20-3', title: 'Z Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-20-4', title: 'Manacher\'s Algorithm', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-20-5', title: 'Suffix Array', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-str-20-6', title: 'Rolling Hash', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-hashmap',
    name: 'HashMap / HashSet',
    phases: [
      {
        id: 'ph-hm-1',
        name: 'Phase 1 - Frequency Pattern',
        questions: [
          { id: 'q-hm-1-1', title: 'Frequency of Elements in Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-2', title: 'Frequency of Characters in String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-3', title: 'Count Duplicate Elements', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-4', title: 'Count Distinct Elements', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-5', title: 'Most Frequent Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-6', title: 'Least Frequent Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-7', title: 'First Repeating Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-8', title: 'First Non-Repeating Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-9', title: 'Second Most Frequent Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-1-10', title: 'Character Histogram', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-2',
        name: 'Phase 2 - Lookup Pattern',
        questions: [
          { id: 'q-hm-2-1', title: 'Contains Duplicate', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-2', title: 'Contains Nearby Duplicate', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-3', title: 'Missing Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-4', title: 'Find Duplicate Number', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-5', title: 'Find All Duplicates', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-6', title: 'Single Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-7', title: 'Two Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-8', title: 'Find Difference of Two Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-9', title: 'Intersection of Two Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-2-10', title: 'Union of Two Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-3',
        name: 'Phase 3 - Prefix Sum + HashMap',
        questions: [
          { id: 'q-hm-3-1', title: 'Subarray Sum Equals K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-2', title: 'Zero Sum Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-3', title: 'Largest Zero Sum Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-4', title: 'Count Equal 0 & 1', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-5', title: 'Continuous Subarray Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-6', title: 'Longest Subarray With Given Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-7', title: 'Count Prefix Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-3-8', title: 'Equal Prefix & Suffix Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-4',
        name: 'Phase 4 - Counting + HashMap',
        questions: [
          { id: 'q-hm-4-1', title: 'Majority Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-4-2', title: 'Majority Element II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-4-3', title: 'Top K Frequent Elements (Heap se aur optimize hoga)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-4-4', title: 'Top K Frequent Words (Heap baad me)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-4-5', title: 'Sort Characters by Frequency (Heap baad me)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-5',
        name: 'Phase 5 - String Hashing Pattern',
        questions: [
          { id: 'q-hm-5-1', title: 'Valid Anagram', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-2', title: 'Group Anagrams', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-3', title: 'Isomorphic Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-4', title: 'Ransom Note', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-5', title: 'Word Pattern', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-6', title: 'Find Common Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-7', title: 'Keyboard Row', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-5-8', title: 'Happy Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-6',
        name: 'Phase 6 - HashSet Pattern',
        questions: [
          { id: 'q-hm-6-1', title: 'Contains Duplicate', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-2', title: 'Happy Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-3', title: 'Longest Consecutive Sequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-4', title: 'Intersection Using Set', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-5', title: 'Difference of Two Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-6', title: 'Remove Duplicates', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-7', title: 'Unique Morse Code Words', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-6-8', title: 'Jewels and Stones', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-7',
        name: 'Phase 7 - Design Pattern',
        questions: [
          { id: 'q-hm-7-1', title: 'Design HashMap', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-7-2', title: 'Design HashSet', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-7-3', title: 'LRU Cache (Optimal after Linked List)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-7-4', title: 'Randomized Set', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-7-5', title: 'TinyURL Encoder (Basic Mapping Idea)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-8',
        name: '🔓 Unlocked after Two Pointer',
        questions: [
          { id: 'q-hm-8-1', title: 'Longest Substring Without Repeating Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-8-2', title: 'Longest Substring with K Distinct Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-8-3', title: 'Minimum Window Substring (partial understanding)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-9',
        name: '🔓 Unlocked after Sliding Window',
        questions: [
          { id: 'q-hm-9-1', title: 'Longest Substring Without Repeating Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-2', title: 'Longest Repeating Character Replacement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-3', title: 'Find All Anagrams in a String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-4', title: 'Permutation in String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-5', title: 'Minimum Window Substring', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-6', title: 'Fruit Into Baskets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-9-7', title: 'Subarrays with K Distinct Integers', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-10',
        name: '🔓 Unlocked after Linked List',
        questions: [
          { id: 'q-hm-10-1', title: 'Copy List with Random Pointer', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-10-2', title: 'LRU Cache (Optimal)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-10-3', title: 'Linked List Cycle (HashMap Approach)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-10-4', title: 'Intersection of Linked Lists (HashMap)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-11',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-hm-11-1', title: 'Top K Frequent Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-11-2', title: 'Top K Frequent Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-11-3', title: 'Sort Characters by Frequency', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-11-4', title: 'Reorganize String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-11-5', title: 'Frequency Sort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-12',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-hm-12-1', title: 'Vertical Order Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-12-2', title: 'Top View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-12-3', title: 'Bottom View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-12-4', title: 'Diagonal Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-12-5', title: 'Path Sum Count', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-13',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-hm-13-1', title: 'Clone Graph', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-13-2', title: 'Alien Dictionary', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-13-3', title: 'Evaluate Division', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-13-4', title: 'Accounts Merge', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-13-5', title: 'Reconstruct Itinerary', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hm-14',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-hm-14-1', title: 'Longest Arithmetic Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-14-2', title: 'Target Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-14-3', title: 'Word Break', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-14-4', title: 'Decode Ways (Memoization + Map)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hm-14-5', title: 'Fibonacci using Memoization', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-two-pointer',
    name: 'Two Pointer',
    phases: [
      {
        id: 'ph-tp-1',
        name: 'Phase 1 - Opposite Direction Two Pointer',
        questions: [
          { id: 'q-tp-1-1', title: 'Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-2', title: 'Reverse String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-3', title: 'Valid Palindrome', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-4', title: 'Reverse Only Letters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-5', title: 'Reverse Vowels of a String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-6', title: 'Move All Zeros to End (Swap Method)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-7', title: 'Segregate Even & Odd', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-1-8', title: 'Segregate Positive & Negative', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-2',
        name: 'Phase 2 - Same Direction Two Pointer (Fast & Slow)',
        questions: [
          { id: 'q-tp-2-1', title: 'Remove Duplicates from Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-2-2', title: 'Remove Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-2-3', title: 'Move Zeroes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-2-4', title: 'Remove Duplicates from String (Basic)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-2-5', title: 'Compress Characters (Basic)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-2-6', title: 'Merge Sorted Arrays (In-place)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-3',
        name: 'Phase 3 - Two Sum Pattern',
        questions: [
          { id: 'q-tp-3-1', title: 'Two Sum II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-3-2', title: 'Pair With Given Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-3-3', title: 'Pair Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-3-4', title: 'Closest Pair', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-3-5', title: 'Count Valid Pairs (Brute + TP)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-3-6', title: 'Count Pair Less Than Target', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-4',
        name: 'Phase 4 - Three Pointer / Multi Pointer',
        questions: [
          { id: 'q-tp-4-1', title: 'Sort Colors (Dutch National Flag)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-4-2', title: 'Merge Three Sorted Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-4-3', title: 'Rearrange by Sign', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-4-4', title: 'Alternate Positive & Negative', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-4-5', title: 'Partition Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-5',
        name: 'Phase 5 - Merge Pattern',
        questions: [
          { id: 'q-tp-5-1', title: 'Merge Two Sorted Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-5-2', title: 'Merge Two Strings Alternately', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-5-3', title: 'Compare Two Strings', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-5-4', title: 'Intersection of Two Sorted Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-5-5', title: 'Union of Two Sorted Arrays', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-6',
        name: 'Phase 6 - Partition Pattern',
        questions: [
          { id: 'q-tp-6-1', title: 'Partition Array Around Pivot', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-6-2', title: 'Sort 0s & 1s', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-6-3', title: 'Sort 0s,1s,2s', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-6-4', title: 'Push Negatives Left', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-6-5', title: 'Push Positives Right', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-7',
        name: 'Phase 7 - Container Pattern',
        questions: [
          { id: 'q-tp-7-1', title: 'Container With Most Water', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-7-2', title: 'Trapping Rain Water (Two Pointer)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-7-3', title: 'Max Distance Between Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-7-4', title: 'Closest Pair From Two Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-8',
        name: 'Phase 8 - String Two Pointer',
        questions: [
          { id: 'q-tp-8-1', title: 'Backspace String Compare', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-8-2', title: 'Append Characters to Make Subsequence', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-8-3', title: 'Is Subsequence', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-8-4', title: 'Reverse Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-8-5', title: 'Reverse Each Word', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-9',
        name: '🔓 Unlocked after Sliding Window',
        questions: [
          { id: 'q-tp-9-1', title: 'Longest Substring Without Repeating Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-2', title: 'Longest Repeating Character Replacement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-3', title: 'Minimum Window Substring', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-4', title: 'Fruit Into Baskets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-5', title: 'Minimum Size Subarray Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-6', title: 'Maximum Consecutive Ones III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-9-7', title: 'Subarrays with K Distinct Integers', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-10',
        name: '🔓 Unlocked after Linked List',
        questions: [
          { id: 'q-tp-10-1', title: 'Middle of Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-2', title: 'Linked List Cycle', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-3', title: 'Detect Cycle II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-4', title: 'Remove Nth Node From End', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-5', title: 'Intersection of Linked Lists', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-6', title: 'Palindrome Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-10-7', title: 'Reorder List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-11',
        name: '🔓 Unlocked after Binary Search',
        questions: [
          { id: 'q-tp-11-1', title: 'Two Sum Less Than K', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-11-2', title: 'K Closest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-11-3', title: 'Search Pair in Sorted Array Variants', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-12',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-tp-12-1', title: 'Smallest Range Covering Elements', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-12-2', title: 'K Smallest Pair Sums', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tp-13',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-tp-13-1', title: 'Longest Palindromic Subsequence (Optimization Ideas)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-13-2', title: 'Edit Distance (Space Optimization)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tp-13-3', title: 'Merge Operations DP Variants', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-sliding-window',
    name: 'Sliding Window',
    phases: [
      {
        id: 'ph-sw-1',
        name: 'Phase 1 - Fixed Size Sliding Window',
        questions: [
          { id: 'q-sw-1-1', title: 'Maximum Sum Subarray of Size K', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-2', title: 'Minimum Sum Subarray of Size K', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-3', title: 'Average of Every Window of Size K', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-4', title: 'First Negative Number in Every Window', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-5', title: 'Count Distinct Elements in Every Window', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-6', title: 'Maximum Average Subarray I', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-7', title: 'Sliding Window Maximum (Brute)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-1-8', title: 'Minimum Difference Between Max & Min (Fixed Window)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-2',
        name: 'Phase 2 - Variable Size Sliding Window',
        questions: [
          { id: 'q-sw-2-1', title: 'Longest Subarray With Sum ≤ K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-2', title: 'Smallest Subarray With Sum ≥ K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-3', title: 'Longest Ones', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-4', title: 'Max Consecutive Ones III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-5', title: 'Fruits Into Baskets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-6', title: 'Longest Repeating Character Replacement (Logic)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-2-7', title: 'Binary Subarrays With Sum (Basic Understanding)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-3',
        name: 'Phase 3 - String Sliding Window',
        questions: [
          { id: 'q-sw-3-1', title: 'Longest Substring Without Repeating Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-2', title: 'Longest Substring With K Distinct Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-3', title: 'Longest Repeating Character Replacement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-4', title: 'Maximum Vowels in a Substring', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-5', title: 'Find All Anagrams in a String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-6', title: 'Permutation in String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-3-7', title: 'Count Occurrences of Anagrams', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-4',
        name: 'Phase 4 - Frequency Based Window',
        questions: [
          { id: 'q-sw-4-1', title: 'Minimum Window Substring', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-4-2', title: 'Subarrays With K Distinct Integers', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-4-3', title: 'Longest Substring With At Most K Distinct Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-4-4', title: 'Longest Substring With Exactly K Distinct Characters', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-4-5', title: 'Character Replacement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-4-6', title: 'Minimum Window Containing Pattern', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-5',
        name: 'Phase 5 - Deque Based Sliding Window',
        questions: [
          { id: 'q-sw-5-1', title: 'Sliding Window Maximum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-5-2', title: 'Sliding Window Minimum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-5-3', title: 'Longest Continuous Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-5-4', title: 'Constrained Subsequence Sum (Introduction)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-6',
        name: 'Phase 6 - Prefix Sum + Sliding Window',
        questions: [
          { id: 'q-sw-6-1', title: 'Binary Subarrays With Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-6-2', title: 'Count Nice Subarrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-6-3', title: 'Subarrays Divisible by K (HashMap + Prefix ka revision bhi hai)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-6-4', title: 'Continuous Subarray Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-7',
        name: 'Phase 7 - Advanced Sliding Window',
        questions: [
          { id: 'q-sw-7-1', title: 'Minimum Window Substring', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-7-2', title: 'Subarrays With K Different Integers', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-7-3', title: 'Longest Turbulent Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-7-4', title: 'Grumpy Bookstore Owner', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-7-5', title: 'Maximum Erasure Value', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-8',
        name: '🔓 Unlocked after Queue / Deque',
        questions: [
          { id: 'q-sw-8-1', title: 'Sliding Window Maximum (Optimal)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-8-2', title: 'Sliding Window Minimum (Optimal)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-8-3', title: 'Longest Continuous Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-8-4', title: 'Shortest Subarray With Sum At Least K', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-9',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-sw-9-1', title: 'Sliding Window Median', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-9-2', title: 'Kth Largest in Every Window', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-9-3', title: 'Maximum Performance of a Team (Hybrid Concept)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-10',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-sw-10-1', title: 'Generally direct combination is very rare', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-sw-11',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-sw-11-1', title: 'Maximum Sum of Non-Overlapping Subarrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-11-2', title: 'Partition Array for Maximum Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-sw-11-3', title: 'Advanced Window Optimization Problems', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-binary-search',
    name: 'Binary Search',
    phases: [
      {
        id: 'ph-bs-1',
        name: 'Phase 1 - Basic Binary Search',
        questions: [
          { id: 'q-bs-1-1', title: 'Binary Search', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-2', title: 'Search Insert Position', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-3', title: 'Floor of an Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-4', title: 'Ceil of an Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-5', title: 'Lower Bound', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-6', title: 'Upper Bound', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-7', title: 'Count Occurrences of an Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-8', title: 'First Occurrence', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-1-9', title: 'Last Occurrence', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-2',
        name: 'Phase 2 - Variants of Binary Search',
        questions: [
          { id: 'q-bs-2-1', title: 'Search in Rotated Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-2', title: 'Search in Rotated Sorted Array II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-3', title: 'Find Minimum in Rotated Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-4', title: 'Find Rotation Count', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-5', title: 'Single Element in Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-6', title: 'Find Peak Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-7', title: 'Peak Index in Mountain Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-2-8', title: 'Search in Nearly Sorted Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-3',
        name: 'Phase 3 - Binary Search on Answer',
        questions: [
          { id: 'q-bs-3-1', title: 'Koko Eating Bananas', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-2', title: 'Capacity to Ship Packages Within D Days', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-3', title: 'Split Array Largest Sum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-4', title: 'Aggressive Cows', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-5', title: 'Allocate Minimum Number of Pages', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-6', title: 'Painter\'s Partition Problem', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-7', title: 'Minimum Days to Make M Bouquets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-8', title: 'Magnetic Force Between Two Balls', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-3-9', title: 'Minimize Maximum Distance to Gas Station', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-4',
        name: 'Phase 4 - Matrix Binary Search',
        questions: [
          { id: 'q-bs-4-1', title: 'Search a 2D Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-4-2', title: 'Search a 2D Matrix II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-4-3', title: 'Row With Maximum Ones', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-4-4', title: 'Median in a Row Wise Sorted Matrix', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-4-5', title: 'Find Peak Element in Matrix', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-5',
        name: 'Phase 5 - Binary Search + Math',
        questions: [
          { id: 'q-bs-5-1', title: 'Sqrt(x)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-5-2', title: 'Nth Root of a Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-5-3', title: 'Perfect Square', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-5-4', title: 'Arrange Coins', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-5-5', title: 'Guess Number Higher or Lower', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-6',
        name: 'Phase 6 - Binary Search + Arrays',
        questions: [
          { id: 'q-bs-6-1', title: 'Find K Closest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-6-2', title: 'Kth Missing Positive Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-6-3', title: 'Median of Two Sorted Arrays', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-6-4', title: 'Missing Number in Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-6-5', title: 'Find First Bad Version (concept based)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-7',
        name: 'Phase 7 - Advanced Binary Search',
        questions: [
          { id: 'q-bs-7-1', title: 'Minimize Maximum Pair Difference', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-7-2', title: 'Maximum Candies Allocated to K Children', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-7-3', title: 'Maximum Value at a Given Index', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-7-4', title: 'Divide Chocolate', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-7-5', title: 'Minimized Maximum of Products Distributed to Any Store', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-8',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-bs-8-1', title: 'Find K Closest Elements (Heap Approach)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-8-2', title: 'Kth Smallest Element in Sorted Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-8-3', title: 'Kth Largest Element in Sorted Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-9',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-bs-9-1', title: 'Path With Minimum Effort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-9-2', title: 'Swim in Rising Water', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-9-3', title: 'Minimum Maximum Edge Weight Problems', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-10',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-bs-10-1', title: 'Longest Increasing Subsequence (Binary Search Optimization)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-10-2', title: 'Russian Doll Envelopes', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-10-3', title: 'Weighted Job Scheduling (Binary Search + DP)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-10-4', title: 'Maximum Profit in Job Scheduling', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-bs-11',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-bs-11-1', title: 'Search in BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-11-2', title: 'Floor in BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-11-3', title: 'Ceil in BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-11-4', title: 'Closest Value in BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-bs-11-5', title: 'Kth Smallest in BST (BST traversal bhi required hai)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-recursion',
    name: 'Recursion',
    phases: [
      {
        id: 'ph-rec-1',
        name: 'Phase 1 - Basic Recursion',
        questions: [
          { id: 'q-rec-1-1', title: 'Print Numbers from 1 to N', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-2', title: 'Print Numbers from N to 1', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-3', title: 'Print Even Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-4', title: 'Print Odd Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-5', title: 'Sum of First N Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-6', title: 'Factorial of N', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-7', title: 'Power of a Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-8', title: 'Fibonacci Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-9', title: 'Count Digits', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-10', title: 'Sum of Digits', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-11', title: 'Product of Digits', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-1-12', title: 'Reverse a Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-2',
        name: 'Phase 2 - Recursion on Arrays',
        questions: [
          { id: 'q-rec-2-1', title: 'Print Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-2', title: 'Print Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-3', title: 'Sum of Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-4', title: 'Find Maximum Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-5', title: 'Find Minimum Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-6', title: 'Linear Search', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-7', title: 'Count Even Numbers', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-8', title: 'Check Sorted Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-9', title: 'Reverse Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-10', title: 'First Occurrence of Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-2-11', title: 'Last Occurrence of Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-3',
        name: 'Phase 3 - Recursion on Strings',
        questions: [
          { id: 'q-rec-3-1', title: 'Print Characters', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-2', title: 'Reverse String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-3', title: 'Check Palindrome', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-4', title: 'Count Vowels', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-5', title: 'Count Consonants', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-6', title: 'Remove Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-7', title: 'Replace Character', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-8', title: 'Count Occurrences', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-9', title: 'Remove Spaces', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-3-10', title: 'Toggle Case', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-4',
        name: 'Phase 4 - Multiple Recursive Calls',
        questions: [
          { id: 'q-rec-4-1', title: 'Fibonacci (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-4-2', title: 'Climbing Stairs (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-4-3', title: 'Count Ways to Reach N', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-4-4', title: 'Count Binary Strings', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-4-5', title: 'Count Paths in a Grid (Recursive)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-5',
        name: 'Phase 5 - Subsequence Pattern',
        questions: [
          { id: 'q-rec-5-1', title: 'Print All Subsequences of Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-2', title: 'Print All Subsequences of String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-3', title: 'Count Subsequences', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-4', title: 'Subsequence With Given Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-5', title: 'Count Subsequences With Given Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-6', title: 'Print One Valid Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-5-7', title: 'Check if Subsequence Exists', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-6',
        name: 'Phase 6 - Recursive Sorting Ideas',
        questions: [
          { id: 'q-rec-6-1', title: 'Bubble Sort (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-6-2', title: 'Selection Sort (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-6-3', title: 'Insertion Sort (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-7',
        name: 'Phase 7 - Mathematical Recursion',
        questions: [
          { id: 'q-rec-7-1', title: 'GCD (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-7-2', title: 'LCM (Using GCD)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-7-3', title: 'Decimal to Binary', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-7-4', title: 'Binary to Decimal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-7-5', title: 'Fast Power (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-8',
        name: '🔓 Unlocked after Backtracking',
        questions: [
          { id: 'q-rec-8-1', title: 'Generate Parentheses', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-2', title: 'Letter Combinations of Phone Number', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-3', title: 'Combination Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-4', title: 'Combination Sum II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-5', title: 'Subsets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-6', title: 'Subsets II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-7', title: 'Permutations', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-8', title: 'Permutations II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-9', title: 'Palindrome Partitioning', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-10', title: 'Word Search', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-11', title: 'N-Queens', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-12', title: 'Rat in a Maze', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-8-13', title: 'Sudoku Solver', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-9',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-rec-9-1', title: 'Inorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-2', title: 'Preorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-3', title: 'Postorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-4', title: 'Maximum Depth of Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-5', title: 'Same Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-6', title: 'Symmetric Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-7', title: 'Path Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-8', title: 'Diameter of Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-9', title: 'Balanced Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-9-10', title: 'Lowest Common Ancestor', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-10',
        name: '🔓 Unlocked after Linked List',
        questions: [
          { id: 'q-rec-10-1', title: 'Reverse Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-2', title: 'Merge Two Sorted Lists', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-3', title: 'Swap Nodes in Pairs', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-4', title: 'Delete Node Recursively', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-rec-11',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-rec-11-1', title: 'Fibonacci (Memoization)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-2', title: 'Climbing Stairs', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
{ id: 'q-rec-11-3', title: 'House Robber', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-4', title: 'Coin Change', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-5', title: 'Target Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-6', title: 'Longest Common Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-7', title: 'Edit Distance', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-8', title: 'Word Break', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-11-9', title: 'Partition Equal Subset Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-linked-list',
    name: 'Linked List',
    phases: [
      {
        id: 'ph-ll-1',
        name: 'Phase 1 - Linked List Basics',
        questions: [
          { id: 'q-ll-1-1', title: 'Create a Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-2', title: 'Print Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-3', title: 'Count Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-4', title: 'Search an Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-5', title: 'Find Length', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-6', title: 'Print Reverse (Using Recursion)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-7', title: 'Find Sum of Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-8', title: 'Find Maximum Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-9', title: 'Find Minimum Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-1-10', title: 'Check if Linked List is Empty', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-2',
        name: 'Phase 2 - Insertion Pattern',
        questions: [
          { id: 'q-ll-2-1', title: 'Insert at Beginning', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-2', title: 'Insert at End', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-3', title: 'Insert at Given Position', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-4', title: 'Insert After Given Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-5', title: 'Insert Before Given Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-6', title: 'Insert in Sorted Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-2-7', title: 'Insert in Circular Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-3',
        name: 'Phase 3 - Deletion Pattern',
        questions: [
          { id: 'q-ll-3-1', title: 'Delete First Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-2', title: 'Delete Last Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-3', title: 'Delete Node by Value', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-4', title: 'Delete Node by Position', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-5', title: 'Delete Middle Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-6', title: 'Delete Duplicates from Sorted List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-3-7', title: 'Remove Elements', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-4',
        name: 'Phase 4 - Reversal Pattern',
        questions: [
          { id: 'q-ll-4-1', title: 'Reverse Linked List (Iterative)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-4-2', title: 'Reverse Linked List (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-4-3', title: 'Reverse First K Nodes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-4-4', title: 'Reverse Nodes in K Group', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-4-5', title: 'Reverse Between Positions', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-4-6', title: 'Reverse Doubly Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-5',
        name: 'Phase 5 - Fast & Slow Pointer Pattern',
        questions: [
          { id: 'q-ll-5-1', title: 'Middle of Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-5-2', title: 'Linked List Cycle', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-5-3', title: 'Detect Cycle II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-5-4', title: 'Happy Number (Cycle Detection)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-5-5', title: 'Remove Nth Node From End', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-5-6', title: 'Find Length of Cycle', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-6',
        name: 'Phase 6 - Merge Pattern',
        questions: [
          { id: 'q-ll-6-1', title: 'Merge Two Sorted Lists', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-6-2', title: 'Merge K Sorted Lists (Optimal after Heap)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-6-3', title: 'Sort Linked List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-6-4', title: 'Partition List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-6-5', title: 'Add Two Numbers', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-7',
        name: 'Phase 7 - Pointer Manipulation Pattern',
        questions: [
          { id: 'q-ll-7-1', title: 'Swap Nodes in Pairs', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-7-2', title: 'Odd Even Linked List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-7-3', title: 'Rotate List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-7-4', title: 'Reorder List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-7-5', title: 'Split Linked List into Parts', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-7-6', title: 'Remove Duplicates II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-8',
        name: 'Phase 8 - Doubly & Circular Linked List',
        questions: [
          { id: 'q-ll-8-1', title: 'Create Doubly Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-8-2', title: 'Insert in Doubly Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-8-3', title: 'Delete in Doubly Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-8-4', title: 'Reverse Doubly Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-8-5', title: 'Create Circular Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-8-6', title: 'Detect Circular Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-9',
        name: '🔓 Unlocked after HashMap',
        questions: [
          { id: 'q-ll-9-1', title: 'Copy List with Random Pointer', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-9-2', title: 'LRU Cache (Optimal after Doubly Linked List)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-9-3', title: 'Linked List Cycle (HashMap Approach)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-9-4', title: 'Intersection of Linked Lists (HashMap)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-9-5', title: 'Remove Duplicates Using HashSet', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-10',
        name: '🔓 Unlocked after Stack',
        questions: [
          { id: 'q-ll-10-1', title: 'Palindrome Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-10-2', title: 'Reverse Print Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-10-3', title: 'Next Greater Node in Linked List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-11',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-ll-11-1', title: 'Merge K Sorted Lists', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-11-2', title: 'Kth Largest Node', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-11-3', title: 'Priority Queue Based Merge Problems', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-12',
        name: '🔓 Unlocked after Recursion',
        questions: [
          { id: 'q-rec-10-1', title: 'Reverse Linked List (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-2', title: 'Merge Two Lists (Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-3', title: 'Swap Nodes in Pairs (Recursive)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-rec-10-4', title: 'Delete Node Recursively', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-ll-13',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-ll-13-1', title: 'Convert Sorted List to BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-ll-13-2', title: 'Flatten Binary Tree to Linked List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-stack',
    name: 'Stack',
    phases: [
      {
        id: 'ph-st-1',
        name: 'Phase 1 - Stack Basics',
        questions: [
          { id: 'q-st-1-1', title: 'Implement Stack using Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-2', title: 'Implement Stack using Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-3', title: 'Push Operation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-4', title: 'Pop Operation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-5', title: 'Peek / Top Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-6', title: 'Is Stack Empty', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-1-7', title: 'Stack Size', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-2',
        name: 'Phase 2 - Parentheses Pattern',
        questions: [
          { id: 'q-st-2-1', title: 'Valid Parentheses', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-2', title: 'Balanced Brackets', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-3', title: 'Minimum Add to Make Parentheses Valid', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-4', title: 'Remove Outermost Parentheses', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-5', title: 'Maximum Nesting Depth', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-6', title: 'Check Redundant Brackets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-2-7', title: 'Longest Valid Parentheses (Brute First)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-3',
        name: 'Phase 3 - Expression Evaluation',
        questions: [
          { id: 'q-st-3-1', title: 'Infix to Postfix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-2', title: 'Infix to Prefix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-3', title: 'Postfix Evaluation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-4', title: 'Prefix Evaluation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-5', title: 'Evaluate Reverse Polish Notation', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-6', title: 'Basic Calculator I', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-3-7', title: 'Basic Calculator II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-4',
        name: 'Phase 4 - Monotonic Stack (Introduction)',
        questions: [
          { id: 'q-st-4-1', title: 'Next Greater Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-4-2', title: 'Next Greater Element II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-4-3', title: 'Next Smaller Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-4-4', title: 'Previous Greater Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-4-5', title: 'Previous Smaller Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-4-6', title: 'Stock Span Problem', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-5',
        name: 'Phase 5 - String + Stack',
        questions: [
          { id: 'q-st-5-1', title: 'Remove Adjacent Duplicates', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-2', title: 'Remove All Adjacent Duplicates II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-3', title: 'Decode String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-4', title: 'Simplify Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-5', title: 'Make The String Great', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-6', title: 'Remove Stars From String', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-5-7', title: 'Backspace String Compare (Stack Approach)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-6',
        name: 'Phase 6 - Stack Design Pattern',
        questions: [
          { id: 'q-st-6-1', title: 'Min Stack', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-6-2', title: 'Max Stack (Concept)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-6-3', title: 'Implement Queue using Stacks', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-6-4', title: 'Design Browser History', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-6-5', title: 'Design Text Editor (Basic)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-7',
        name: 'Phase 7 - Histogram & Matrix Pattern',
        questions: [
          { id: 'q-st-7-1', title: 'Largest Rectangle in Histogram', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-7-2', title: 'Maximal Rectangle', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-7-3', title: 'Trapping Rain Water (Stack Approach)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-7-4', title: 'Sum of Subarray Minimums', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-7-5', title: 'Sum of Subarray Ranges', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-8',
        name: '🔓 Unlocked after Queue',
        questions: [
          { id: 'q-st-8-1', title: 'Implement Stack using Queues', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-8-2', title: 'Implement Queue using Stacks', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-8-3', title: 'Circular Tour (Related Concepts)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-9',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-st-9-1', title: 'Iterative Inorder Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-9-2', title: 'Iterative Preorder Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-9-3', title: 'Iterative Postorder Traversal', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-9-4', title: 'BST Iterator', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-9-5', title: 'Flatten Binary Tree (Iterative)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-10',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-st-10-1', title: 'DFS using Stack', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-10-2', title: 'Topological Sort (Stack Based)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-10-3', title: 'Kosaraju Algorithm', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-10-4', title: 'Strongly Connected Components', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-11',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-st-11-1', title: 'Merge Patterns (Rare)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-11-2', title: 'Advanced Scheduling Problems', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-11-3', title: 'Direct Stack + Heap Combinations Note', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-st-12',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-st-12-1', title: 'Longest Valid Parentheses (Optimal)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-st-12-3', title: 'DP + Monotonic Stack Variants', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-queue',
    name: 'Queue',
    phases: [
      {
        id: 'ph-qu-1',
        name: 'Phase 1 - Queue Basics',
        questions: [
          { id: 'q-qu-1-1', title: 'Implement Queue using Array', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-2', title: 'Implement Queue using Linked List', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-3', title: 'Enqueue Operation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-4', title: 'Dequeue Operation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-5', title: 'Front Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-6', title: 'Rear Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-7', title: 'Is Queue Empty', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-1-8', title: 'Queue Size', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-2',
        name: 'Phase 2 - Circular Queue',
        questions: [
          { id: 'q-qu-2-1', title: 'Design Circular Queue', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-2-2', title: 'Design Circular Deque', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-2-3', title: 'Implement Circular Queue using Array', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-2-4', title: 'First Circular Tour (Basic)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-2-5', title: 'Gas Station (Queue Simulation)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-3',
        name: 'Phase 3 - Queue + Stack Design',
        questions: [
          { id: 'q-qu-3-1', title: 'Implement Stack using Queues', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-3-2', title: 'Implement Queue using Stacks', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-3-3', title: 'Design Front-Middle-Back Queue', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-3-4', title: 'Recent Counter', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-3-5', title: 'Moving Average from Data Stream', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-4',
        name: 'Phase 4 - Queue + Arrays',
        questions: [
          { id: 'q-qu-4-1', title: 'First Non-Repeating Character in a Stream', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-4-2', title: 'Number of Recent Calls', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-4-3', title: 'Time Needed to Buy Tickets', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-4-4', title: 'Reveal Cards in Increasing Order', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-4-5', title: 'Dota2 Senate (Simulation)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-5',
        name: 'Phase 5 - Deque Pattern',
        questions: [
          { id: 'q-qu-5-1', title: 'Design Deque', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-5-2', title: 'Sliding Window Maximum (Optimal)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-5-3', title: 'Sliding Window Minimum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-5-4', title: 'Longest Continuous Subarray', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-5-5', title: 'Shortest Subarray with Sum at Least K', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-5-6', title: 'Constrained Subsequence Sum (Introduction)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-6',
        name: 'Phase 6 - Monotonic Queue',
        questions: [
          { id: 'q-qu-6-1', title: 'Sliding Window Maximum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-6-2', title: 'Sliding Window Minimum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-6-3', title: 'Maximum of All Subarrays of Size K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-6-4', title: 'Minimum of All Subarrays of Size K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-6-5', title: 'Jump Game VI (Advanced Introduction)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-7',
        name: 'Phase 7 - Scheduling & Simulation Pattern',
        questions: [
          { id: 'q-qu-7-1', title: 'Task Scheduler', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-7-2', title: 'CPU Scheduling (Simulation)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-7-3', title: 'Rotten Oranges (BFS Concept Intro)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-7-4', title: 'Number of Students Unable to Eat Lunch', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-7-5', title: 'Reveal Cards in Increasing Order', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-8',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-qu-8-1', title: 'Binary Tree Level Order Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-2', title: 'Zigzag Level Order Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-3', title: 'Right Side View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-4', title: 'Left Side View', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-5', title: 'Average of Levels', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-6', title: 'Maximum Width of Binary Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-8-7', title: 'Bottom-Up Level Order Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-9',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-qu-9-1', title: 'Breadth First Search (BFS)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-2', title: 'Number of Islands', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-3', title: 'Flood Fill', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-4', title: 'Rotting Oranges', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-5', title: '01 Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-6', title: 'Walls and Gates', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-7', title: 'Shortest Path in Unweighted Graph', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-8', title: 'Word Ladder', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-9-9', title: 'Open the Lock', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-10',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-qu-10-1', title: 'Merge K Sorted Lists', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-10-2', title: 'Merge K Sorted Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-10-3', title: 'Task Scheduling Variants', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-10-4', title: 'Priority Based Scheduling', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-qu-11',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-qu-11-1', title: 'Jump Game VI', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-11-2', title: 'Constrained Subsequence Sum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-qu-11-3', title: 'Advanced Window Optimization Problems', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-trees',
    name: 'Trees',
    phases: [
      {
        id: 'ph-tr-1',
        name: 'Phase 1 - Tree Basics',
        questions: [
          { id: 'q-tr-1-1', title: 'Create Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-2', title: 'Count Total Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-3', title: 'Count Leaf Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-4', title: 'Count Internal Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-5', title: 'Find Height of Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-6', title: 'Find Depth of Node', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-7', title: 'Maximum Element in Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-8', title: 'Minimum Element in Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-9', title: 'Sum of All Nodes', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-1-10', title: 'Search an Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-2',
        name: 'Phase 2 - DFS Traversals',
        questions: [
          { id: 'q-tr-2-1', title: 'Preorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-2-2', title: 'Inorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-2-3', title: 'Postorder Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-2-4', title: 'Preorder (Iterative)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-2-5', title: 'Inorder (Iterative)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-2-6', title: 'Postorder (Iterative)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-3',
        name: 'Phase 3 - BFS Traversals',
        questions: [
          { id: 'q-tr-3-1', title: 'Level Order Traversal', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-2', title: 'Level Order Bottom', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-3', title: 'Zigzag Level Order', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-4', title: 'Average of Levels', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-5', title: 'Maximum Width of Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-6', title: 'Right Side View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-3-7', title: 'Left Side View', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-4',
        name: 'Phase 4 - Tree Properties',
        questions: [
          { id: 'q-tr-4-1', title: 'Same Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-2', title: 'Symmetric Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-3', title: 'Balanced Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-4', title: 'Check Complete Binary Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-5', title: 'Check Full Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-6', title: 'Check Perfect Binary Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-7', title: 'Diameter of Binary Tree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-8', title: 'Maximum Depth', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-4-9', title: 'Minimum Depth', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-5',
        name: 'Phase 5 - Path Pattern',
        questions: [
          { id: 'q-tr-5-1', title: 'Path Sum', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-2', title: 'Path Sum II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-3', title: 'Binary Tree Paths', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-4', title: 'Sum Root to Leaf Numbers', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-5', title: 'Maximum Path Sum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-6', title: 'Longest Root to Leaf Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-5-7', title: 'Count Good Nodes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-6',
        name: 'Phase 6 - Lowest Common Ancestor (LCA)',
        questions: [
          { id: 'q-tr-6-1', title: 'Lowest Common Ancestor of Binary Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-6-2', title: 'Lowest Common Ancestor of BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-6-3', title: 'Distance Between Two Nodes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-6-4', title: 'Kth Ancestor', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-6-5', title: 'Smallest Subtree with All Deepest Nodes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-7',
        name: 'Phase 7 - Tree Construction',
        questions: [
          { id: 'q-tr-7-1', title: 'Construct Tree from Preorder & Inorder', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-7-2', title: 'Construct Tree from Inorder & Postorder', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-7-3', title: 'Sorted Array to BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-7-4', title: 'Sorted List to BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-7-5', title: 'Serialize & Deserialize Binary Tree', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-8',
        name: 'Phase 8 - Views of Tree',
        questions: [
          { id: 'q-tr-8-1', title: 'Top View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-8-2', title: 'Bottom View', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-8-3', title: 'Vertical Order Traversal', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-8-4', title: 'Vertical Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-8-5', title: 'Boundary Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-8-6', title: 'Diagonal Traversal', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-9',
        name: 'Phase 9 - Binary Search Tree (BST)',
        questions: [
          { id: 'q-tr-9-1', title: 'Search in BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-2', title: 'Insert into BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-3', title: 'Delete Node in BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-4', title: 'Validate BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-5', title: 'Kth Smallest Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-6', title: 'Kth Largest Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-7', title: 'Floor in BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-8', title: 'Ceil in BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-9', title: 'Lowest Common Ancestor in BST', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-9-10', title: 'Recover Binary Search Tree', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-10',
        name: 'Phase 10 - Advanced Tree Pattern',
        questions: [
          { id: 'q-tr-10-1', title: 'Flatten Binary Tree to Linked List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-2', title: 'Convert BST to Greater Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-3', title: 'Convert Sorted List to BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-4', title: 'House Robber III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-5', title: 'Binary Tree Cameras', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-6', title: 'Maximum Product of Split Binary Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-7', title: 'All Nodes Distance K', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-10-8', title: 'Burn a Binary Tree', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-11',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-tr-11-1', title: 'Kth Largest in BST (Heap Approach)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-11-2', title: 'Merge BST Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-11-3', title: 'Priority Queue Tree Problems', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-12',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-tr-12-1', title: 'Minimum Height Trees', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-12-2', title: 'Tree Diameter (Graph Version)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-12-3', title: 'Tree as Graph', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-12-4', title: 'Centroid of Tree', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-12-5', title: 'Tree BFS Problems', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-tr-13',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-tr-13-1', title: 'House Robber III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-2', title: 'Binary Tree Maximum Path Sum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-3', title: 'Diameter Optimization', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-4', title: 'Longest Zigzag Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-5', title: 'Maximum Sum BST', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-6', title: 'Count Unique BSTs', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-tr-13-7', title: 'Binary Tree Coloring Game', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-heap',
    name: 'Heap (Priority Queue)',
    phases: [
      {
        id: 'ph-hp-1',
        name: 'Phase 1 - Heap Basics',
        questions: [
          { id: 'q-hp-1-1', title: 'Implement Min Heap', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-2', title: 'Implement Max Heap', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-3', title: 'Heap Insert', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-4', title: 'Heap Delete', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-5', title: 'Peek Element', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-6', title: 'Heapify', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-7', title: 'Build Heap', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-1-8', title: 'Heap Sort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-2',
        name: 'Phase 2 - Kth Element Pattern',
        questions: [
          { id: 'q-hp-2-1', title: 'Kth Largest Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-2-2', title: 'Kth Smallest Element', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-2-3', title: 'K Closest Numbers', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-2-4', title: 'K Closest Points to Origin', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-2-5', title: 'K Weakest Rows in Matrix', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-2-6', title: 'Kth Largest in Stream', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-3',
        name: 'Phase 3 - Top K Pattern',
        questions: [
          { id: 'q-hp-3-1', title: 'Top K Frequent Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-3-2', title: 'Top K Frequent Words', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-3-3', title: 'Sort Characters by Frequency', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-3-4', title: 'Reorganize String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-3-5', title: 'High Five', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-3-6', title: 'Frequency Sort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-4',
        name: 'Phase 4 - Merge Pattern',
        questions: [
          { id: 'q-hp-4-1', title: 'Merge K Sorted Lists', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-4-2', title: 'Merge K Sorted Arrays', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-4-3', title: 'Merge Sorted Streams', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-4-4', title: 'Smallest Range Covering K Lists', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-4-5', title: 'K Pairs with Smallest Sums', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-5',
        name: 'Phase 5 - Scheduling Pattern',
        questions: [
          { id: 'q-hp-5-1', title: 'Task Scheduler', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-5-2', title: 'Meeting Rooms II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-5-3', title: 'Minimum Number of Platforms', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-5-4', title: 'Maximum Events That Can Be Attended', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-5-5', title: 'IPO', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-5-6', title: 'Course Schedule III', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-6',
        name: 'Phase 6 - Running Stream Pattern',
        questions: [
          { id: 'q-hp-6-1', title: 'Find Median from Data Stream', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-6-2', title: 'Kth Largest in Stream', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-6-3', title: 'Moving Average from Data Stream', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-6-4', title: 'Sliding Window Median', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-6-5', title: 'Smallest Infinite Set', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-7',
        name: 'Phase 7 - Advanced Heap Pattern',
        questions: [
          { id: 'q-hp-7-1', title: 'Maximum Performance of a Team', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-7-2', title: 'Minimum Cost to Connect Sticks', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-7-3', title: 'Last Stone Weight', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-7-4', title: 'Furthest Building You Can Reach', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-7-5', title: 'Maximum Subsequence Score', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-7-6', title: 'Swim in Rising Water (Heap + Graph)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-8',
        name: '🔓 Unlocked after Graph',
        questions: [
          { id: 'q-hp-8-1', title: 'Dijkstra\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-8-2', title: 'Network Delay Time', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-8-3', title: 'Path With Minimum Effort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-8-4', title: 'Minimum Cost to Reach Destination', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-8-5', title: 'Swim in Rising Water', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-8-6', title: 'Minimum Effort Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-9',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-hp-9-1', title: 'Super Ugly Number', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-9-2', title: 'Merge Stones', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-9-3', title: 'Advanced Scheduling Optimization', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-10',
        name: '🔓 Unlocked after Binary Search',
        questions: [
          { id: 'q-hp-10-1', title: 'Kth Smallest Element in Sorted Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-10-2', title: 'Find K Closest Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-10-3', title: 'Minimize Maximum Difference Variants', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-hp-11',
        name: '🔓 Unlocked after Trees',
        questions: [
          { id: 'q-hp-11-1', title: 'Heap Validation', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-11-2', title: 'Convert BST to Heap', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-11-3', title: 'Merge BST Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-hp-11-4', title: 'Kth Largest in BST (Heap Approach)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-graph',
    name: 'Graph',
    phases: [
      {
        id: 'ph-gr-1',
        name: 'Phase 1 - Graph Basics',
        questions: [
          { id: 'q-gr-1-1', title: 'Implement Graph using Adjacency Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-2', title: 'Implement Graph using Adjacency List', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-3', title: 'Print Graph', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-4', title: 'Count Vertices', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-5', title: 'Count Edges', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-6', title: 'Degree of Vertex', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-7', title: 'In-Degree & Out-Degree', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-1-8', title: 'Check Edge Exists', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-2',
        name: 'Phase 2 - Graph Traversal',
        questions: [
          { id: 'q-gr-2-1', title: 'Breadth First Search (BFS)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-2', title: 'Depth First Search (DFS - Recursive)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-3', title: 'Depth First Search (DFS - Iterative)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-4', title: 'Number of Connected Components', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-5', title: 'Count Provinces', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-6', title: 'Number of Islands', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-7', title: 'Flood Fill', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-2-8', title: 'Max Area of Island', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-3',
        name: 'Phase 3 - Cycle Detection',
        questions: [
          { id: 'q-gr-3-1', title: 'Detect Cycle in Undirected Graph (BFS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-3-2', title: 'Detect Cycle in Undirected Graph (DFS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-3-3', title: 'Detect Cycle in Directed Graph (DFS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-3-4', title: 'Detect Cycle using Kahn\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-3-5', title: 'Redundant Connection', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-4',
        name: 'Phase 4 - Topological Sort (DAG)',
        questions: [
          { id: 'q-gr-4-1', title: 'Topological Sort (DFS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-4-2', title: 'Topological Sort (BFS / Kahn\'s Algorithm)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-4-3', title: 'Course Schedule', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-4-4', title: 'Course Schedule II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-4-5', title: 'Alien Dictionary', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-4-6', title: 'Eventual Safe States', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-5',
        name: 'Phase 5 - Shortest Path',
        questions: [
          { id: 'q-gr-5-1', title: 'Shortest Path in Unweighted Graph', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-5-2', title: 'Dijkstra\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-5-3', title: 'Network Delay Time', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-5-4', title: 'Path With Minimum Effort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-5-5', title: 'Cheapest Flights Within K Stops', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-5-6', title: 'Minimum Cost Path', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-6',
        name: 'Phase 6 - Minimum Spanning Tree (MST)',
        questions: [
          { id: 'q-gr-6-1', title: 'Prim\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-6-2', title: 'Kruskal\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-6-3', title: 'Connecting Cities With Minimum Cost', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-6-4', title: 'Min Cost to Connect All Points', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-6-5', title: 'Optimize Water Distribution', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-7',
        name: 'Phase 7 - Union Find (Disjoint Set Union)',
        questions: [
          { id: 'q-gr-7-1', title: 'Implement Disjoint Set', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-7-2', title: 'Number of Provinces (DSU)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-7-3', title: 'Redundant Connection', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-7-4', title: 'Number of Connected Components', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-7-5', title: 'Accounts Merge', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-7-6', title: 'Number of Operations to Make Network Connected', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-8',
        name: 'Phase 8 - Grid Graph Pattern',
        questions: [
          { id: 'q-gr-8-1', title: 'Number of Islands', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-2', title: 'Rotten Oranges', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-3', title: '01 Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-4', title: 'Walls and Gates', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-5', title: 'Surrounded Regions', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-6', title: 'Pacific Atlantic Water Flow', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-7', title: 'Shortest Path in Binary Matrix', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-8-8', title: 'As Far from Land as Possible', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-9',
        name: 'Phase 9 - Advanced Graph Pattern',
        questions: [
          { id: 'q-gr-9-1', title: 'Bellman-Ford Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-2', title: 'Floyd-Warshall Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-3', title: 'Strongly Connected Components (Kosaraju)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-4', title: 'Tarjan\'s Algorithm', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-5', title: 'Bridges in Graph', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-6', title: 'Articulation Points', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-7', title: 'Euler Path & Circuit', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-9-8', title: 'Reconstruct Itinerary', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-10',
        name: '🔓 Unlocked after Dynamic Programming',
        questions: [
          { id: 'q-gr-10-1', title: 'Longest Increasing Path in Matrix', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-10-2', title: 'Cherry Pickup', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-10-3', title: 'Minimum Falling Path Sum (Graph Interpretation)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-10-4', title: 'DP on DAG', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-10-5', title: 'Longest Path in DAG', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-11',
        name: '🔓 Unlocked after Backtracking',
        questions: [
          { id: 'q-gr-11-1', title: 'Word Search', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-11-2', title: 'Word Search II', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-11-3', title: 'Rat in a Maze', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-11-4', title: 'All Paths from Source to Target', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-11-5', title: 'Unique Paths III', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-12',
        name: '🔓 Unlocked after Binary Search',
        questions: [
          { id: 'q-gr-12-1', title: 'Swim in Rising Water', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-12-2', title: 'Path With Minimum Effort', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-12-3', title: 'Minimum Maximum Edge Weight', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-12-4', title: 'Maximum Minimum Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-gr-13',
        name: '🔓 Unlocked after Heap',
        questions: [
          { id: 'q-gr-13-1', title: 'Dijkstra\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-13-2', title: 'Prim\'s Algorithm', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-13-3', title: 'Network Delay Time', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-13-4', title: 'Minimum Cost Path', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-gr-13-5', title: 'Cheapest Flights Within K Stops', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  },
  {
    id: 'topic-dp',
    name: 'Dynamic Programming (DP)',
    phases: [
      {
        id: 'ph-dp-1',
        name: 'Phase 1 - DP Basics (1D DP)',
        questions: [
          { id: 'q-dp-1-1', title: 'Fibonacci Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-2', title: 'Climbing Stairs', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-3', title: 'Min Cost Climbing Stairs', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-4', title: 'House Robber', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-5', title: 'House Robber II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-6', title: 'Tribonacci Number', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-7', title: 'Decode Ways', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-1-8', title: 'Maximum Sum of Non-Adjacent Elements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-2',
        name: 'Phase 2 - Knapsack Pattern',
        questions: [
          { id: 'q-dp-2-1', title: '0/1 Knapsack', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-2', title: 'Subset Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-3', title: 'Equal Sum Partition', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-4', title: 'Count Subsets with Given Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-5', title: 'Target Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-6', title: 'Partition Equal Subset Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-7', title: 'Minimum Subset Sum Difference', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-2-8', title: 'Ones and Zeroes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-3',
        name: 'Phase 3 - Unbounded Knapsack Pattern',
        questions: [
          { id: 'q-dp-3-1', title: 'Coin Change', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-3-2', title: 'Coin Change II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-3-3', title: 'Rod Cutting', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-3-4', title: 'Minimum Coins', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-3-5', title: 'Integer Break', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-3-6', title: 'Perfect Squares', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-4',
        name: 'Phase 4 - Longest Increasing Subsequence (LIS) Pattern',
        questions: [
          { id: 'q-dp-4-1', title: 'Longest Increasing Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-4-2', title: 'Number of LIS', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-4-3', title: 'Russian Doll Envelopes', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-4-4', title: 'Maximum Length Pair Chain', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-4-5', title: 'Longest Bitonic Subsequence', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-4-6', title: 'Largest Divisible Subset', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-5',
        name: 'Phase 5 - String DP',
        questions: [
          { id: 'q-dp-5-1', title: 'Longest Common Subsequence (LCS)', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-2', title: 'Longest Common Substring', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-3', title: 'Edit Distance', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-4', title: 'Delete Operation for Two Strings', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-5', title: 'Distinct Subsequences', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-6', title: 'Interleaving String', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-5-7', title: 'Shortest Common Supersequence', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-6',
        name: 'Phase 6 - Palindrome DP',
        questions: [
          { id: 'q-dp-6-1', title: 'Longest Palindromic Subsequence', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-6-2', title: 'Longest Palindromic Substring', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-6-3', title: 'Palindrome Partitioning II', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-6-4', title: 'Count Palindromic Substrings', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-6-5', title: 'Minimum Insertions to Make Palindrome', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-6-6', title: 'Strange Printer', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-7',
        name: 'Phase 7 - Grid DP',
        questions: [
          { id: 'q-dp-7-1', title: 'Unique Paths', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-2', title: 'Unique Paths II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-3', title: 'Minimum Path Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-4', title: 'Triangle', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-5', title: 'Dungeon Game', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-6', title: 'Cherry Pickup', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-7-7', title: 'Minimum Falling Path Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-8',
        name: 'Phase 8 - Stock Buy & Sell Pattern',
        questions: [
          { id: 'q-dp-8-1', title: 'Best Time to Buy and Sell Stock I', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-8-2', title: 'Best Time to Buy and Sell Stock II', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-8-3', title: 'Best Time to Buy and Sell Stock III', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-8-4', title: 'Best Time to Buy and Sell Stock IV', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-8-5', title: 'Stock with Cooldown', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-8-6', title: 'Stock with Transaction Fee', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-9',
        name: 'Phase 9 - Partition DP',
        questions: [
          { id: 'q-dp-9-1', title: 'Matrix Chain Multiplication', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-9-2', title: 'Burst Balloons', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-9-3', title: 'Boolean Parenthesization', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-9-4', title: 'Minimum Cost Tree from Leaf Values', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-9-5', title: 'Partition Array for Maximum Sum', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-10',
        name: 'Phase 10 - Tree DP',
        questions: [
          { id: 'q-dp-10-1', title: 'House Robber III', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-10-2', title: 'Binary Tree Maximum Path Sum', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-10-3', title: 'Diameter of Binary Tree (DP View)', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-10-4', title: 'Longest ZigZag Path', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-10-5', title: 'Maximum Sum BST', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-10-6', title: 'Count Good Nodes', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-11',
        name: 'Phase 11 - Graph DP',
        questions: [
          { id: 'q-dp-11-1', title: 'Longest Increasing Path in Matrix', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-11-2', title: 'DP on DAG', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-11-3', title: 'Shortest Path in DAG', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-11-4', title: 'Maximum Gold', link: '', difficulty: 'easy', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-11-5', title: 'Out of Boundary Paths', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-12',
        name: 'Phase 12 - Digit DP (Advanced)',
        questions: [
          { id: 'q-dp-12-1', title: 'Count Numbers with Unique Digits', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-12-2', title: 'Numbers At Most N Given Digit Set', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-12-3', title: 'Count Special Integers', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-12-4', title: 'Digit DP Introduction', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-13',
        name: 'Phase 13 - Bitmask DP (Advanced)',
        questions: [
          { id: 'q-dp-13-1', title: 'Traveling Salesman Problem (TSP)', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-13-2', title: 'Partition to K Equal Sum Subsets', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-13-3', title: 'Can I Win', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-13-4', title: 'Beautiful Arrangement', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-14',
        name: '🔓 Unlocked after Advanced Mathematics',
        questions: [
          { id: 'q-dp-14-1', title: 'Catalan Numbers', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-14-2', title: 'Unique BST', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-14-3', title: 'Derangements', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-14-4', title: 'Integer Partitions', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' }
        ]
      },
      {
        id: 'ph-dp-15',
        name: '🔓 Unlocked after Advanced Graph',
        questions: [
          { id: 'q-dp-15-1', title: 'DP on DAG Variants', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-15-2', title: 'Longest Path in DAG', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-15-3', title: 'Shortest Path Variants', link: '', difficulty: 'medium', solved: false, needsRevision: false, notes: '' },
          { id: 'q-dp-15-4', title: 'Tree DP Extensions', link: '', difficulty: 'hard', solved: false, needsRevision: false, notes: '' }
        ]
      }
    ]
  }
];

function loadTopics() {
  try {
    const raw = localStorage.getItem(TOPICS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      const arraysTopic = parsed.find(t => t.id === 'topic-arrays');
      const stringsTopic = parsed.find(t => t.id === 'topic-strings');
      const hashmapTopic = parsed.find(t => t.id === 'topic-hashmap');
      const tpTopic = parsed.find(t => t.id === 'topic-two-pointer');
      const swTopic = parsed.find(t => t.id === 'topic-sliding-window');
      const bsTopic = parsed.find(t => t.id === 'topic-binary-search');
      const recTopic = parsed.find(t => t.id === 'topic-recursion');
      const llTopic = parsed.find(t => t.id === 'topic-linked-list');
      const stackTopic = parsed.find(t => t.id === 'topic-stack');
      const queueTopic = parsed.find(t => t.id === 'topic-queue');
      const treesTopic = parsed.find(t => t.id === 'topic-trees');
      const heapTopic = parsed.find(t => t.id === 'topic-heap');
      const graphTopic = parsed.find(t => t.id === 'topic-graph');
      const dpTopic = parsed.find(t => t.id === 'topic-dp');
      // Migrates Arrays, Strings, HashMaps, Two Pointers, Sliding Windows, Binary Searches, Recursion, Linked Lists, Stacks, Queues, Trees, Heaps, Graphs and DP to new SEED configurations if they have fewer than the required phases or if any is missing
      if (
        (arraysTopic && arraysTopic.phases.length < 18) || 
        (stringsTopic && stringsTopic.phases.length < 20) || 
        !hashmapTopic || 
        (hashmapTopic && hashmapTopic.phases.length < 14) ||
        !tpTopic ||
        (tpTopic && tpTopic.phases.length < 13) ||
        !swTopic ||
        (swTopic && swTopic.phases.length < 11) ||
        !bsTopic ||
        (bsTopic && bsTopic.phases.length < 11) ||
        !recTopic ||
        (recTopic && recTopic.phases.length < 11) ||
        !llTopic ||
        (llTopic && llTopic.phases.length < 13) ||
        !stackTopic ||
        (stackTopic && stackTopic.phases.length < 12) ||
        !queueTopic ||
        (queueTopic && queueTopic.phases.length < 11) ||
        !treesTopic ||
        (treesTopic && treesTopic.phases.length < 13) ||
        !heapTopic ||
        (heapTopic && heapTopic.phases.length < 11) ||
        !graphTopic ||
        (graphTopic && graphTopic.phases.length < 13) ||
        !dpTopic ||
        (dpTopic && dpTopic.phases.length < 15)
      ) {
        return SEED;
      }
      return parsed;
    }
  } catch { /* ignore */ }
  return SEED;
}

function saveTopics(topics) {
  localStorage.setItem(TOPICS_KEY, JSON.stringify(topics));
}

// ── State helpers (pure functions) ───────────────────────
const genId = (prefix = 'id') => `${prefix}-${Date.now()}-${Math.floor(Math.random() * 9999)}`;

export default function App() {
  const [topics,   setTopics  ] = useState(loadTopics);
  const [loggedIn, setLoggedIn] = useState(() => sessionStorage.getItem('dsa_login') === '1');
  const [username, setUsername] = useState(() => sessionStorage.getItem('dsa_user') || '');

  // Persist topics to localStorage whenever they change
  useEffect(() => { saveTopics(topics); }, [topics]);

  // Auth
  const handleLogin = (name) => {
    setLoggedIn(true); setUsername(name);
    sessionStorage.setItem('dsa_login', '1');
    sessionStorage.setItem('dsa_user', name);
  };
  const handleLogout = () => {
    setLoggedIn(false); setUsername('');
    sessionStorage.removeItem('dsa_login');
    sessionStorage.removeItem('dsa_user');
  };

  // ── Topics ──
  const onAddTopic = (name) => {
    const t = { id: genId('topic'), name, phases: [{ id: genId('ph'), name: 'Phase 1: Basics', questions: [] }] };
    setTopics(prev => [...prev, t]);
  };
  const onRenameTopic = (id, name)  => setTopics(prev => prev.map(t => t.id === id ? { ...t, name } : t));
  const onDeleteTopic = (id)        => setTopics(prev => prev.filter(t => t.id !== id));

  // ── Phases ──
  const onAddPhase = (topicId, name) => {
    const id = genId('ph');
    setTopics(prev => prev.map(t => t.id === topicId
      ? { ...t, phases: [...t.phases, { id, name, questions: [] }] }
      : t));
    return id;
  };
  const onDeletePhase = (topicId, phaseId) =>
    setTopics(prev => prev.map(t => t.id === topicId
      ? { ...t, phases: t.phases.filter(p => p.id !== phaseId) }
      : t));

  // ── Questions ──
  const updateQ = (topicId, phaseId, qId, patch) =>
    setTopics(prev => prev.map(t => t.id !== topicId ? t : {
      ...t,
      phases: t.phases.map(p => p.id !== phaseId ? p : {
        ...p,
        questions: p.questions.map(q => q.id !== qId ? q : {
          ...q,
          ...(typeof patch === 'function' ? patch(q) : patch),
        }),
      }),
    }));

  const onAddQuestion = (topicId, phaseId, qObj) => {
    const q = { id: genId('q'), ...qObj };
    setTopics(prev => prev.map(t => t.id !== topicId ? t : {
      ...t,
      phases: t.phases.map(p => p.id !== phaseId ? p : { ...p, questions: [...p.questions, q] }),
    }));
  };
  const onDeleteQuestion  = (tid, pid, qid)         => setTopics(prev => prev.map(t => t.id !== tid ? t : { ...t, phases: t.phases.map(p => p.id !== pid ? p : { ...p, questions: p.questions.filter(q => q.id !== qid) }) }));
  const onToggleSolved    = (tid, pid, qid)         => updateQ(tid, pid, qid, q => ({ solved: !q.solved }));
  const onToggleRevision  = (tid, pid, qid)         => updateQ(tid, pid, qid, q => ({ needsRevision: !q.needsRevision }));
  const onSaveNotes       = (tid, pid, qid, notes)  => updateQ(tid, pid, qid, { notes });

  // Shared props for topic page
  const topicProps = {
    topics, username, onLogout: handleLogout,
    onRenameTopic, onDeleteTopic,
    onAddPhase, onDeletePhase,
    onAddQuestion, onDeleteQuestion,
    onToggleSolved, onToggleRevision, onSaveNotes,
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/signup"            element={<Signup />} />
        <Route path="/login"             element={<Login onLoginSuccess={handleLogin} />} />
        <Route path="/dashboard"         element={loggedIn ? <Dashboard topics={topics} username={username} onLogout={handleLogout} onAddTopic={onAddTopic} onRenameTopic={onRenameTopic} onDeleteTopic={onDeleteTopic} /> : <Navigate to="/login" replace />} />
        <Route path="/topic/:topicId"    element={loggedIn ? <TopicPage {...topicProps} /> : <Navigate to="/login" replace />} />
        <Route path="*"                  element={<Navigate to={loggedIn ? '/dashboard' : '/login'} replace />} />
      </Routes>
    </HashRouter>
  );
}
