const AUTO_LINKS = {
  // Phase 1
  'find largest element': 'https://www.geeksforgeeks.org/problems/largest-element-in-array1302/1',
  'find smallest element': 'https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4101/1',
  'sum of array': 'https://www.geeksforgeeks.org/problems/sum-of-array-elements2502/1',
  'count even/odd': 'https://www.geeksforgeeks.org/problems/count-odd-even/1',
  'linear search': 'https://www.geeksforgeeks.org/problems/search-an-element-in-an-array-1587115621/1',
  'check sorted array': 'https://leetcode.com/problems/check-if-array-is-sorted-and-rotated/',
  'reverse array': 'https://www.geeksforgeeks.org/problems/reverse-an-array/1',
  'print alternate elements': 'https://www.geeksforgeeks.org/problems/print-alternate-elements-of-an-array/1',
  'find maximum difference': 'https://leetcode.com/problems/maximum-difference-between-increasing-elements/',
  'frequency of element (nested loop)': 'https://www.geeksforgeeks.org/problems/find-frequency/1',

  // Phase 2
  'largest element': 'https://www.geeksforgeeks.org/problems/largest-element-in-array1302/1',
  'second largest': 'https://www.geeksforgeeks.org/problems/second-largest3735/1',
  'third largest': 'https://www.geeksforgeeks.org/problems/third-largest-element/1',
  'smallest': 'https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4101/1',
  'second smallest': 'https://www.geeksforgeeks.org/problems/find-minimum-and-maximum-element-in-an-array4101/1',
  'max consecutive ones': 'https://leetcode.com/problems/max-consecutive-ones/',
  'maximum product pair': 'https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/',
  'minimum difference pair': 'https://www.geeksforgeeks.org/problems/minimum-difference-pair5429/1',
  'leaders in array (brute force)': 'https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1',
  'peak element (brute)': 'https://leetcode.com/problems/find-peak-element/',

  // Phase 3
  'count positive': 'https://www.geeksforgeeks.org/problems/count-of-many-elements/0',
  'count negative': 'https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/',
  'count zeros': 'https://www.geeksforgeeks.org/problems/count-the-zeros1820/1',
  'majority element (brute)': 'https://leetcode.com/problems/majority-element/',
  'missing number (brute)': 'https://leetcode.com/problems/missing-number/',
  'duplicate count': 'https://leetcode.com/problems/find-all-duplicates-in-an-array/',
  'distinct elements (brute)': 'https://www.geeksforgeeks.org/problems/distinct-elements1212/0',
  'frequency count (brute)': 'https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1',
  'pair with given sum (brute)': 'https://leetcode.com/problems/two-sum/',

  // Phase 4
  'pair sum': 'https://leetcode.com/problems/two-sum/',
  'triplet sum': 'https://leetcode.com/problems/3sum/',
  'four sum (brute)': 'https://leetcode.com/problems/4sum/',
  'count inversions (brute)': 'https://www.geeksforgeeks.org/problems/inversion-of-array-1587115620/1',
  'equilibrium index (brute)': 'https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1',
  'leaders': 'https://www.geeksforgeeks.org/problems/leaders-in-an-array-1587115620/1',
  'trapping rain water (brute)': 'https://leetcode.com/problems/trapping-rain-water/',
  'container with most water (brute)': 'https://leetcode.com/problems/container-with-most-water/',
  'stock buy sell (brute)': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  'maximum difference': 'https://leetcode.com/problems/maximum-difference-between-increasing-elements/',
  'maximum product': 'https://leetcode.com/problems/maximum-product-subarray/',
  'pair difference': 'https://www.geeksforgeeks.org/problems/find-pair-given-difference1559/1',
  'common elements': 'https://www.geeksforgeeks.org/problems/common-elements1132/1',
  'duplicate elements': 'https://leetcode.com/problems/contains-duplicate/',
  'missing numbers': 'https://leetcode.com/problems/missing-number/',

  // Phase 5
  'range sum query': 'https://leetcode.com/problems/range-sum-query-immutable/',
  'equilibrium index': 'https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1',
  'pivot index': 'https://leetcode.com/problems/find-pivot-index/',
  'left sum right sum': 'https://leetcode.com/problems/find-the-distinct-difference-array/',
  'running sum': 'https://leetcode.com/problems/running-sum-of-1d-array/',
  'find middle index': 'https://leetcode.com/problems/find-the-middle-index-in-array/',
  'subarray sum': 'https://leetcode.com/problems/subarray-sum-equals-k/',
  'count prefix sum': 'https://leetcode.com/problems/subarray-sum-equals-k/',

  // Phase 6
  'product except self': 'https://leetcode.com/problems/product-of-array-except-self/',
  'trapping rain water': 'https://leetcode.com/problems/trapping-rain-water/',
  'left maximum': 'https://www.geeksforgeeks.org/problems/max-value-after-m-range-operations/0',
  'right maximum': 'https://www.geeksforgeeks.org/problems/max-value-after-m-range-operations/0',
  'equilibrium': 'https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1',

  // Phase 7
  'maximum subarray sum': 'https://leetcode.com/problems/maximum-subarray/',
  'maximum circular subarray': 'https://leetcode.com/problems/maximum-sum-circular-subarray/',
  'maximum sum increasing': 'https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1',
  'maximum prefix sum': 'https://www.geeksforgeeks.org/problems/maximum-prefix-sum-for-a-given-range0527/1',
  'maximum suffix sum': 'https://www.geeksforgeeks.org/problems/maximum-suffix-sum-for-a-given-range/1',
  'maximum product (brute)': 'https://leetcode.com/problems/maximum-product-subarray/',
  'best time to buy and sell stock': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',

  // Phase 8
  'move zeroes': 'https://leetcode.com/problems/move-zeroes/',
  'push negative left': 'https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1',
  'positive negative alternate': 'https://www.geeksforgeeks.org/problems/alternate-positive-and-negative-numbers5408/1',
  'segregate even odd': 'https://www.geeksforgeeks.org/problems/segregate-even-and-odd-numbers4622/1',
  'reverse array': 'https://www.geeksforgeeks.org/problems/reverse-an-array/1',
  'rotate left': 'https://www.geeksforgeeks.org/problems/reversal-algorithm-of-array-rotation/0',
  'rotate right': 'https://leetcode.com/problems/rotate-array/',
  'reverse in groups': 'https://www.geeksforgeeks.org/problems/reverse-array-in-groups4624/1',
  'rearrange sorted': 'https://www.geeksforgeeks.org/problems/rearrange-array-alternately-1587115620/1',
  'wave array': 'https://www.geeksforgeeks.org/problems/wave-array-1587115621/1',
  'dutch national flag (brute)': 'https://leetcode.com/problems/sort-colors/',
  'alternate positive negative': 'https://leetcode.com/problems/rearrange-array-elements-by-sign/',
  'rearrange by sign': 'https://leetcode.com/problems/rearrange-array-elements-by-sign/',
  'shift zeros': 'https://leetcode.com/problems/move-zeroes/',
  'rotate k times (brute)': 'https://leetcode.com/problems/rotate-array/',

  // Phase 9
  'matrix addition': 'https://www.geeksforgeeks.org/problems/addition-of-two-square-matrices4616/1',
  'matrix multiplication': 'https://www.geeksforgeeks.org/problems/multiply-matrices/1',
  'transpose': 'https://leetcode.com/problems/transpose-matrix/',
  'spiral matrix': 'https://leetcode.com/problems/spiral-matrix/',
  'boundary traversal': 'https://www.geeksforgeeks.org/problems/boundary-traversal-of-matrix-1587115620/1',
  'row sum': 'https://www.geeksforgeeks.org/problems/row-sum-in-a-2d-array/1',
  'column sum': 'https://www.geeksforgeeks.org/problems/column-sum-in-a-2d-array/1',
  'diagonal sum': 'https://leetcode.com/problems/matrix-diagonal-sum/',
  'search in matrix (brute)': 'https://leetcode.com/problems/search-a-2d-matrix/',
  'rotate matrix': 'https://leetcode.com/problems/rotate-image/',

  // Phase 10
  'print all subarrays': 'https://www.geeksforgeeks.org/problems/subarrays-with-equal-1s-and-0s-1587115621/1',
  'maximum sum subarray': 'https://leetcode.com/problems/maximum-subarray/',
  'minimum sum subarray': 'https://leetcode.com/problems/minimum-size-subarray-sum/',
  'count subarrays': 'https://leetcode.com/problems/subarray-sum-equals-k/',
  'longest subarray (brute)': 'https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0809/1',
  'smallest subarray': 'https://leetcode.com/problems/minimum-size-subarray-sum/',
  'subarray with given sum (brute)': 'https://www.geeksforgeeks.org/problems/subarray-with-given-sum-1587115621/1',
  'count subarrays equal k (brute)': 'https://leetcode.com/problems/subarray-sum-equals-k/',
  'maximum average': 'https://leetcode.com/problems/maximum-average-subarray-i/',
  'fixed window sum (brute)': 'https://leetcode.com/problems/maximum-average-subarray-i/',
  'largest product': 'https://leetcode.com/problems/maximum-product-subarray/',
  'largest difference': 'https://leetcode.com/problems/maximum-difference-between-increasing-elements/',
  'maximum xor (brute)': 'https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/',
  'equal sum subarrays': 'https://www.geeksforgeeks.org/problems/equal-sum-subarrays/1',
  'longest increasing subarray': 'https://leetcode.com/problems/longest-continuous-increasing-subsequence/',

  // Phase 11
  'remove duplicates': 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
  'merge sorted arrays': 'https://leetcode.com/problems/merge-sorted-array/',
  'two sum sorted': 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
  'remove element': 'https://leetcode.com/problems/remove-element/',
  'squares of sorted array': 'https://leetcode.com/problems/squares-of-sorted-array/',
  'closest pair': 'https://www.geeksforgeeks.org/problems/find-closest-pair-from-two-arrays3512/1',
  'sort colors (brute)': 'https://leetcode.com/problems/sort-colors/',

  // Phase 12
  'stock buy sell': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  'gas station (brute)': 'https://leetcode.com/problems/gas-station/',
  'jump game (brute)': 'https://leetcode.com/problems/jump-game/',
  'candy (brute)': 'https://leetcode.com/problems/candy/',
  'maximum meetings (brute)': 'https://www.geeksforgeeks.org/problems/n-meetings-in-one-room-1587115620/1',

  // Strings Phase 1
  'print characters': 'https://www.geeksforgeeks.org/problems/print-each-character-of-a-string/1',
  'count vowels': 'https://www.geeksforgeeks.org/problems/vowels-count/1',
  'count consonants': 'https://www.geeksforgeeks.org/problems/consonants-count/1',
  'count digits': 'https://www.geeksforgeeks.org/problems/count-digits5714/1',
  'count spaces': 'https://www.geeksforgeeks.org/problems/count-spaces/1',
  'count uppercase': 'https://www.geeksforgeeks.org/problems/uppercase-count/1',
  'count lowercase': 'https://www.geeksforgeeks.org/problems/lowercase-count/1',
  'character frequency (brute)': 'https://www.geeksforgeeks.org/problems/frequency-of-characters/1',

  // Strings Phase 2
  'reverse words': 'https://leetcode.com/problems/reverse-words-in-a-string/',
  'reverse each word': 'https://leetcode.com/problems/reverse-words-in-a-string-iii/',
  'reverse only alphabets': 'https://leetcode.com/problems/reverse-only-letters/',
  'reverse vowels': 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
  'check reverse equality': 'https://www.geeksforgeeks.org/problems/check-reverse-equality/1',

  // Strings Phase 3
  'ignore special characters': 'https://leetcode.com/problems/valid-palindrome/',
  'longest palindrome (brute)': 'https://leetcode.com/problems/longest-palindromic-substring/',
  'palindrome count (brute)': 'https://leetcode.com/problems/palindromic-substrings/',
  'palindrome substring (brute)': 'https://leetcode.com/problems/palindromic-substrings/',
  'palindrome prefix': 'https://www.geeksforgeeks.org/problems/shortest-palindrome/1',
  'palindrome suffix': 'https://www.geeksforgeeks.org/problems/shortest-palindrome/1',
  'make palindrome (brute)': 'https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/',

  // Strings Phase 4
  'frequency of characters': 'https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1',
  'most frequent character': 'https://www.geeksforgeeks.org/problems/maximum-occurring-character-1587115620/1',
  'least frequent character': 'https://www.geeksforgeeks.org/problems/least-frequent-character/1',
  'first non-repeating character (brute)': 'https://leetcode.com/problems/first-unique-character-in-a-string/',
  'first repeating character': 'https://www.geeksforgeeks.org/problems/repeated-character2058/1',
  'duplicate characters': 'https://www.geeksforgeeks.org/problems/duplicate-characters/1',
  'count occurrences': 'https://www.geeksforgeeks.org/problems/count-occurrences-of-char/1',
  'remove duplicate characters': 'https://www.geeksforgeeks.org/problems/remove-all-duplicates-from-a-given-string4321/1',
  'print unique characters': 'https://www.geeksforgeeks.org/problems/unique-characters/1',
  'character histogram': 'https://www.geeksforgeeks.org/problems/histogram-of-char/1',

  // Strings Phase 5
  'compare two strings': 'https://www.geeksforgeeks.org/problems/compare-two-strings/1',
  'check equality': 'https://www.geeksforgeeks.org/problems/check-equality/1',
  'lexicographical comparison': 'https://www.geeksforgeeks.org/problems/lexicographical-comparison/1',
  'anagram (sorting method)': 'https://leetcode.com/problems/valid-anagram/',
  'rotation check (brute)': 'https://leetcode.com/problems/rotate-string/',
  'isomorphic (brute)': 'https://leetcode.com/problems/isomorphic-strings/',
  'common characters': 'https://leetcode.com/problems/find-common-characters/',
  'difference between strings': 'https://leetcode.com/problems/find-the-difference/',

  // Strings Phase 6
  'print all substrings': 'https://www.geeksforgeeks.org/problems/print-all-substrings/1',
  'longest word': 'https://leetcode.com/problems/longest-word-in-dictionary/',
  'smallest word': 'https://www.geeksforgeeks.org/problems/smallest-word-in-a-string/1',
  'longest common prefix': 'https://leetcode.com/problems/longest-common-prefix/',
  'longest unique substring (brute)': 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  'longest repeating substring (brute)': 'https://leetcode.com/problems/longest-repeating-substring/',
  'count substrings': 'https://leetcode.com/problems/number-of-substrings-with-only-1s/',
  'substring search': 'https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/',
  'count occurrences of substring': 'https://www.geeksforgeeks.org/problems/count-occurrences-of-substring/1',
  'remove substring': 'https://www.geeksforgeeks.org/problems/remove-substring/1',
  'replace substring': 'https://www.geeksforgeeks.org/problems/replace-substring/1',
  'check prefix/suffix': 'https://www.geeksforgeeks.org/problems/check-prefix-suffix/1',

  // Strings Phase 7
  'reverse using stringbuilder': 'https://leetcode.com/problems/reverse-string/',
  'append characters': 'https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/',
  'delete characters': 'https://leetcode.com/problems/delete-columns-to-make-sorted/',
  'insert characters': 'https://www.geeksforgeeks.org/problems/insert-character/1',
  'replace characters': 'https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/',
  'efficient string construction': 'https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram/',

  // Strings Phase 8
  'string to integer': 'https://leetcode.com/problems/string-to-integer-atoi/',
  'integer to string': 'https://leetcode.com/problems/fizz-buzz/',
  'uppercase to lowercase': 'https://leetcode.com/problems/to-lower-case/',
  'lowercase to uppercase': 'https://www.geeksforgeeks.org/problems/lower-case-to-upper-case3410/1',
  'toggle case': 'https://www.geeksforgeeks.org/problems/toggle-case/1',
  'ascii conversion': 'https://www.geeksforgeeks.org/problems/ascii-conversion/1',
  'character to digit': 'https://www.geeksforgeeks.org/problems/char-to-digit/1',
  'digit to character': 'https://www.geeksforgeeks.org/problems/digit-to-char/1',

  // Strings Phase 9
  'sort characters': 'https://www.geeksforgeeks.org/problems/sort-a-string2905/1',
  'sort words': 'https://www.geeksforgeeks.org/problems/sort-words/1',
  'rearrange characters': 'https://leetcode.com/problems/reorganize-string/',
  'group same characters': 'https://leetcode.com/problems/group-anagrams/',
  'sort by frequency (brute)': 'https://leetcode.com/problems/sort-characters-by-frequency/',
  'custom sort (brute)': 'https://leetcode.com/problems/custom-sort-string/',

  // Strings Phase 10
  'merge strings': 'https://leetcode.com/problems/merge-strings-alternately/',
  'compare backspace strings': 'https://leetcode.com/problems/backspace-string-compare/',
  'remove adjacent duplicates': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  'remove spaces': 'https://www.geeksforgeeks.org/problems/remove-spaces/1',
  'compress string': 'https://leetcode.com/problems/string-compression/',
  'reverse sentence': 'https://leetcode.com/problems/reverse-words-in-a-string/',

  // Unlocked after HashMap
  'two sum (optimal)': 'https://leetcode.com/problems/two-sum/',
  'majority element (optimal)': 'https://leetcode.com/problems/majority-element/',
  'contains duplicate': 'https://leetcode.com/problems/contains-duplicate/',
  'longest consecutive sequence': 'https://leetcode.com/problems/longest-consecutive-sequence/',
  'missing number (optimal)': 'https://leetcode.com/problems/missing-number/',
  'intersection of arrays (optimal)': 'https://leetcode.com/problems/intersection-of-two-arrays/',
  'subarray sum equals k': 'https://leetcode.com/problems/subarray-sum-equals-k/',
  'count equal 0 & 1': 'https://leetcode.com/problems/contiguous-array/',
  'zero sum subarray': 'https://www.geeksforgeeks.org/problems/subarrays-with-sum-1587115621/1',
  'top k frequent elements (optimal later with heap)': 'https://leetcode.com/problems/top-k-frequent-elements/',

  // Unlocked after Two Pointer
  'two sum ii': 'https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/',
  'container with most water (optimal)': 'https://leetcode.com/problems/container-with-most-water/',
  'sort colors': 'https://leetcode.com/problems/sort-colors/',
  'remove duplicates (optimal)': 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
  'move zeroes (optimal)': 'https://leetcode.com/problems/move-zeroes/',
  'merge sorted arrays (optimal)': 'https://leetcode.com/problems/merge-sorted-array/',

  // Unlocked after Sliding Window
  'maximum sum of size k': 'https://leetcode.com/problems/maximum-sum-of-distinct-subarrays-with-length-k/',
  'first negative in every window': 'https://www.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3351/1',
  'maximum average subarray': 'https://leetcode.com/problems/maximum-average-subarray-i/',
  'fruits into baskets': 'https://leetcode.com/problems/fruit-into-baskets/',
  'longest ones': 'https://leetcode.com/problems/max-consecutive-ones-iii/',
  'max consecutive ones iii': 'https://leetcode.com/problems/max-consecutive-ones-iii/',
  'minimum size subarray sum': 'https://leetcode.com/problems/minimum-size-subarray-sum/',

  // Unlocked after Binary Search
  'search insert position': 'https://leetcode.com/problems/search-insert-position/',
  'first & last occurrence': 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
  'search in rotated sorted array': 'https://leetcode.com/problems/search-in-rotated-sorted-array/',
  'find peak element (optimal)': 'https://leetcode.com/problems/find-peak-element/',
  'single element in sorted array': 'https://leetcode.com/problems/single-element-in-a-sorted-array/',
  'koko eating bananas': 'https://leetcode.com/problems/koko-eating-bananas/',
  'capacity to ship packages': 'https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/',
  'aggressive cows': 'https://www.geeksforgeeks.org/problems/aggressive-cows/1',
  'allocate books': 'https://www.geeksforgeeks.org/problems/allocate-minimum-number-of-pages0937/1',

  // Unlocked after Heap
  'k largest elements': 'https://www.geeksforgeeks.org/problems/k-largest-elements4206/1',
  'k smallest elements': 'https://www.geeksforgeeks.org/problems/kth-smallest-element5635/1',
  'kth largest element': 'https://leetcode.com/problems/kth-largest-element-in-an-array/',
  'k closest elements': 'https://leetcode.com/problems/find-k-closest-elements/',
  'merge k sorted arrays': 'https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1',

  // Unlocked after DP
  'house robber': 'https://leetcode.com/problems/house-robber/',
  'jump game (optimal)': 'https://leetcode.com/problems/jump-game/',
  'jump game ii': 'https://leetcode.com/problems/jump-game-ii/',
  'maximum product subarray (optimal)': 'https://leetcode.com/problems/maximum-product-subarray/',
  'maximum sum increasing subsequence': 'https://www.geeksforgeeks.org/problems/maximum-sum-increasing-subsequence4749/1',
  'longest increasing subsequence (lis)': 'https://leetcode.com/problems/longest-increasing-subsequence/',
  'partition equal subset sum': 'https://leetcode.com/problems/partition-equal-subset-sum/',
  'coin change (array dp)': 'https://leetcode.com/problems/coin-change/',
  'target sum': 'https://leetcode.com/problems/target-sum/',

  // Strings Phase 3 Additional
  'check palindrome': 'https://leetcode.com/problems/valid-palindrome/',
  'check palindrome (ignore case)': 'https://leetcode.com/problems/valid-palindrome/',
  'check palindrome (ignore spaces)': 'https://leetcode.com/problems/valid-palindrome/',
  'check palindrome (ignore special characters)': 'https://leetcode.com/problems/valid-palindrome/',

  // Strings Unlocked after HashMap
  'valid anagram': 'https://leetcode.com/problems/valid-anagram/',
  'group anagrams': 'https://leetcode.com/problems/group-anagrams/',
  'first unique character': 'https://leetcode.com/problems/first-unique-character-in-a-string/',
  'isomorphic strings': 'https://leetcode.com/problems/isomorphic-strings/',
  'ransom note': 'https://leetcode.com/problems/ransom-note/',
  'word pattern': 'https://leetcode.com/problems/word-pattern/',
  'find duplicate characters (optimal)': 'https://www.geeksforgeeks.org/problems/duplicate-characters/1',
  'character frequency (optimal)': 'https://www.geeksforgeeks.org/problems/frequency-of-characters/1',
  'longest palindrome (hashmap)': 'https://leetcode.com/problems/longest-palindrome/',

  // Strings Unlocked after Two Pointer
  'valid palindrome ii': 'https://leetcode.com/problems/valid-palindrome-ii/',
  'backspace string compare': 'https://leetcode.com/problems/backspace-string-compare/',
  'append characters to make subsequence': 'https://leetcode.com/problems/append-characters-to-string-to-make-subsequence/',

  // Strings Unlocked after Sliding Window
  'longest substring without repeating characters': 'https://leetcode.com/problems/longest-substring-without-repeating-characters/',
  'longest repeating character replacement': 'https://leetcode.com/problems/longest-repeating-character-replacement/',
  'minimum window substring': 'https://leetcode.com/problems/minimum-window-substring/',
  'find all anagrams': 'https://leetcode.com/problems/find-all-anagrams-in-a-string/',
  'permutation in string': 'https://leetcode.com/problems/permutation-in-string/',
  'maximum vowels in a substring': 'https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/',
  'minimum size window': 'https://leetcode.com/problems/minimum-window-substring/',

  // Strings Unlocked after Binary Search
  'longest duplicate substring (binary search + hashing)': 'https://leetcode.com/problems/longest-duplicate-substring/',
  'search suggestions system': 'https://leetcode.com/problems/search-suggestions-system/',
  'minimum time to remove characters (bs based)': 'https://leetcode.com/problems/minimum-time-to-remove-all-occurrences-of-a-character/',

  // Strings Unlocked after Recursion
  'reverse string recursively': 'https://leetcode.com/problems/reverse-string/',
  'palindrome recursively': 'https://leetcode.com/problems/valid-palindrome/',
  'remove adjacent duplicates': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  'print subsequences': 'https://www.geeksforgeeks.org/problems/subsequences/1',
  'generate binary strings': 'https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1',
  'generate subsequences of string': 'https://www.geeksforgeeks.org/problems/subsequences-of-string/1',

  // Strings Unlocked after Backtracking
  'letter combinations of phone number': 'https://leetcode.com/problems/letter-combinations-of-a-phone-number/',
  'generate parentheses': 'https://leetcode.com/problems/generate-parentheses/',
  'palindrome partitioning': 'https://leetcode.com/problems/palindrome-partitioning/',
  'word search': 'https://leetcode.com/problems/word-search/',
  'restore ip addresses': 'https://leetcode.com/problems/restore-ip-addresses/',
  'permutations of string': 'https://leetcode.com/problems/permutations/',
  'combination of characters': 'https://leetcode.com/problems/combinations/',
  'split string into unique parts': 'https://leetcode.com/problems/split-a-string-into-the-max-number-of-unique-substrings/',

  // Strings Unlocked after Stack
  'valid parentheses': 'https://leetcode.com/problems/valid-parentheses/',
  'decode string': 'https://leetcode.com/problems/decode-string/',
  'simplify path': 'https://leetcode.com/problems/simplify-path/',
  'remove adjacent duplicates ii': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/',
  'remove all adjacent duplicates': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  'infix to postfix': 'https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1',
  'postfix evaluation': 'https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1',
  'basic calculator': 'https://leetcode.com/problems/basic-calculator/',

  // Strings Unlocked after Trie
  'implement trie': 'https://leetcode.com/problems/implement-trie-prefix-tree/',
  'search word': 'https://leetcode.com/problems/implement-trie-prefix-tree/',
  'starts with prefix': 'https://leetcode.com/problems/implement-trie-prefix-tree/',
  'word dictionary': 'https://leetcode.com/problems/design-add-and-search-words-data-structure/',
  'replace words': 'https://leetcode.com/problems/replace-words/',
  'longest word in dictionary': 'https://leetcode.com/problems/longest-word-in-dictionary/',
  'word search ii': 'https://leetcode.com/problems/word-search-ii/',

  // Strings Unlocked after DP
  'longest common subsequence (lcs)': 'https://leetcode.com/problems/longest-common-subsequence/',
  'longest common substring': 'https://www.geeksforgeeks.org/problems/longest-common-substring1452/1',
  'edit distance': 'https://leetcode.com/problems/edit-distance/',
  'distinct subsequences': 'https://leetcode.com/problems/distinct-subsequences/',
  'word break': 'https://leetcode.com/problems/word-break/',
  'interleaving string': 'https://leetcode.com/problems/interleaving-string/',
  'longest palindromic subsequence': 'https://leetcode.com/problems/longest-palindromic-subsequence/',
  'palindrome partitioning ii': 'https://leetcode.com/problems/palindrome-partitioning-ii/',
  'regular expression matching': 'https://leetcode.com/problems/regular-expression-matching/',

  // Strings Unlocked after Advanced
  'kmp pattern matching': 'https://www.geeksforgeeks.org/problems/search-pattern-kmp-algorithm-1587115621/1',
  'rabin-karp': 'https://www.geeksforgeeks.org/problems/search-pattern-rabin-karp-algorithm-1587115621/1',
  'z algorithm': 'https://www.geeksforgeeks.org/problems/search-pattern-z-algorithm-1587115621/1',
  'manacher\'s algorithm': 'https://www.geeksforgeeks.org/problems/longest-palindromic-subsequence-1612341800/1',
  'suffix array': 'https://www.geeksforgeeks.org/problems/suffix-array/1',
  'rolling hash': 'https://www.geeksforgeeks.org/problems/rolling-hash/1',

  // HashMap / HashSet Phase 1
  'frequency of elements in array': 'https://www.geeksforgeeks.org/problems/frequency-of-array-elements-1587115620/1',
  'frequency of characters in string': 'https://www.geeksforgeeks.org/problems/frequency-of-characters/1',
  'count duplicate elements': 'https://www.geeksforgeeks.org/problems/count-duplicates-in-array/1',
  'count distinct elements': 'https://www.geeksforgeeks.org/problems/count-distinct-elements/1',
  'most frequent element': 'https://leetcode.com/problems/majority-element/',
  'least frequent element': 'https://www.geeksforgeeks.org/problems/least-frequent-element/1',
  'first repeating element': 'https://www.geeksforgeeks.org/problems/first-repeating-element4004/1',
  'first non-repeating element': 'https://www.geeksforgeeks.org/problems/non-repeating-element3958/1',
  'second most frequent element': 'https://www.geeksforgeeks.org/problems/second-most-repeated-string-in-a-sequence0511/1',
  'character histogram': 'https://www.geeksforgeeks.org/problems/character-histogram/1',

  // HashMap / HashSet Phase 2
  'contains nearby duplicate': 'https://leetcode.com/problems/contains-duplicate-ii/',
  'find duplicate number': 'https://leetcode.com/problems/find-the-duplicate-number/',
  'find all duplicates': 'https://leetcode.com/problems/find-all-duplicates-in-an-array/',
  'single number': 'https://leetcode.com/problems/single-number/',
  'find difference of two arrays': 'https://leetcode.com/problems/find-the-difference-of-two-arrays/',
  'union of two arrays': 'https://www.geeksforgeeks.org/problems/union-of-two-arrays3505/1',

  // HashMap / HashSet Phase 3
  'zero sum subarray': 'https://www.geeksforgeeks.org/problems/subarrays-with-sum-1587115621/1',
  'largest zero sum subarray': 'https://www.geeksforgeeks.org/problems/largest-subarray-with-0-sum/1',
  'continuous subarray sum': 'https://leetcode.com/problems/continuous-subarray-sum/',
  'longest subarray with given sum': 'https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0824/1',
  'equal prefix & suffix sum': 'https://www.geeksforgeeks.org/problems/equilibrium-point-1587115620/1',

  // HashMap / HashSet Phase 4
  'majority element ii': 'https://leetcode.com/problems/majority-element-ii/',
  'top k frequent words': 'https://leetcode.com/problems/top-k-frequent-words/',
  'sort characters by frequency': 'https://leetcode.com/problems/sort-characters-by-frequency/',

  // HashMap / HashSet Phase 5
  'keyboard row': 'https://leetcode.com/problems/keyboard-row/',
  'happy number': 'https://leetcode.com/problems/happy-number/',

  // HashMap / HashSet Phase 6
  'unique morse code words': 'https://leetcode.com/problems/unique-morse-code-words/',
  'jewels and stones': 'https://leetcode.com/problems/jewels-and-stones/',

  // HashMap / HashSet Phase 7
  'design hashmap': 'https://leetcode.com/problems/design-hashmap/',
  'design hashset': 'https://leetcode.com/problems/design-hashset/',
  'lru cache': 'https://leetcode.com/problems/lru-cache/',
  'randomized set': 'https://leetcode.com/problems/insert-delete-getrandom-o1/',
  'tinyurl encoder (basic mapping idea)': 'https://leetcode.com/problems/encode-and-decode-tinyurl/',

  // HashMap / HashSet Unlocked after Two Pointer
  'longest substring with k distinct characters': 'https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1',

  // HashMap / HashSet Unlocked after Sliding Window
  'subarrays with k distinct integers': 'https://leetcode.com/problems/subarrays-with-k-different-integers/',

  // HashMap / HashSet Unlocked after Linked List
  'copy list with random pointer': 'https://leetcode.com/problems/copy-list-with-random-pointer/',
  'lru cache (optimal)': 'https://leetcode.com/problems/lru-cache/',
  'linked list cycle (hashmap approach)': 'https://leetcode.com/problems/linked-list-cycle/',
  'intersection of linked lists (hashmap)': 'https://leetcode.com/problems/intersection-of-two-linked-lists/',

  // HashMap / HashSet Unlocked after Heap
  'reorganize string': 'https://leetcode.com/problems/reorganize-string/',
  'frequency sort': 'https://leetcode.com/problems/sort-array-by-increasing-frequency/',

  // HashMap / HashSet Unlocked after Trees
  'vertical order traversal': 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
  'top view': 'https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1',
  'bottom view': 'https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1',
  'diagonal traversal': 'https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1',
  'path sum count': 'https://leetcode.com/problems/path-sum-iii/',

  // HashMap / HashSet Unlocked after Graph
  'clone graph': 'https://leetcode.com/problems/clone-graph/',
  'alien dictionary': 'https://www.geeksforgeeks.org/problems/alien-dictionary/1',
  'evaluate division': 'https://leetcode.com/problems/evaluate-division/',
  'accounts merge': 'https://leetcode.com/problems/accounts-merge/',
  'reconstruct itinerary': 'https://leetcode.com/problems/reconstruct-itinerary/',

  // HashMap / HashSet Unlocked after DP
  'longest arithmetic subsequence': 'https://leetcode.com/problems/longest-arithmetic-subsequence/',
  'decode ways (memoization + map)': 'https://leetcode.com/problems/decode-ways/',
  'fibonacci using memoization': 'https://leetcode.com/problems/fibonacci-number/',
  
  // Two Pointer Phase 1
  'reverse vowels of a string': 'https://leetcode.com/problems/reverse-vowels-of-a-string/',
  'move all zeros to end (swap method)': 'https://leetcode.com/problems/move-zeroes/',
  'segregate even & odd': 'https://www.geeksforgeeks.org/problems/segregate-even-and-odd-numbers4629/1',
  'segregate positive & negative': 'https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1',

  // Two Pointer Phase 2
  'remove duplicates from sorted array': 'https://leetcode.com/problems/remove-duplicates-from-sorted-array/',
  'remove duplicates from string (basic)': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  'compress characters (basic)': 'https://leetcode.com/problems/string-compression/',
  'merge sorted arrays (in-place)': 'https://leetcode.com/problems/merge-sorted-array/',

  // Two Pointer Phase 3
  'pair with given sum': 'https://www.geeksforgeeks.org/problems/pair-sum-in-sorted-array/1',
  'count valid pairs (brute + tp)': 'https://www.geeksforgeeks.org/problems/count-pairs-with-given-sum--150253/1',
  'count pair less than target': 'https://leetcode.com/problems/count-pairs-whose-sum-is-less-than-target/',

  // Two Pointer Phase 4
  'sort colors (dutch national flag)': 'https://leetcode.com/problems/sort-colors/',
  'merge three sorted arrays': 'https://www.geeksforgeeks.org/problems/merge-three-sorted-arrays/1',

  // Two Pointer Phase 5
  'union of two sorted arrays': 'https://www.geeksforgeeks.org/problems/union-of-two-sorted-arrays-1587115621/1',

  // Two Pointer Phase 6
  'partition array around pivot': 'https://leetcode.com/problems/partition-array-according-to-given-pivot/',
  'sort 0s & 1s': 'https://www.geeksforgeeks.org/problems/segregate-0s-and-1s5106/1',
  'sort 0s,1s,2s': 'https://leetcode.com/problems/sort-colors/',
  'push negatives left': 'https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1',
  'push positives right': 'https://www.geeksforgeeks.org/problems/move-all-negative-elements-to-end1813/1',

  // Two Pointer Phase 7
  'trapping rain water (two pointer)': 'https://leetcode.com/problems/trapping-rain-water/',
  'max distance between elements': 'https://leetcode.com/problems/maximum-distance-between-a-pair-of-values/',
  'closest pair from two arrays': 'https://www.geeksforgeeks.org/problems/find-the-closest-pair-from-two-arrays4215/1',

  // Two Pointer Phase 8
  'is subsequence': 'https://leetcode.com/problems/is-subsequence/',

  // Two Pointer Unlocked after Linked List
  'middle of linked list': 'https://leetcode.com/problems/middle-of-the-linked-list/',
  'detect cycle ii': 'https://leetcode.com/problems/linked-list-cycle-ii/',
  'remove nth node from end': 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/',
  'palindrome linked list': 'https://leetcode.com/problems/palindrome-linked-list/',
  'reorder list': 'https://leetcode.com/problems/reorder-list/',

  // Two Pointer Unlocked after Binary Search
  'two sum less than k': 'https://leetcode.com/problems/two-sum-less-than-k/',
  'search pair in sorted array variants': 'https://www.geeksforgeeks.org/problems/pair-sum-in-sorted-array/1',

  // Two Pointer Unlocked after Heap
  'smallest range covering elements': 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/',
  'k smallest pair sums': 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',

  // Sliding Window Phase 1
  'maximum sum subarray of size k': 'https://www.geeksforgeeks.org/problems/max-sum-subarray-of-size-k5313/1',
  'minimum sum subarray of size k': 'https://www.geeksforgeeks.org/problems/minimum-sum-subarray-of-size-k/1',
  'average of every window of size k': 'https://www.geeksforgeeks.org/problems/average-of-every-window-of-size-k/1',
  'count distinct elements in every window': 'https://www.geeksforgeeks.org/problems/count-distinct-elements-in-every-window/1',
  'maximum average subarray i': 'https://leetcode.com/problems/maximum-average-subarray-i/',
  'sliding window maximum (brute)': 'https://leetcode.com/problems/sliding-window-maximum/',
  'minimum difference between max & min (fixed window)': 'https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/',

  // Sliding Window Phase 2
  'longest subarray with sum ≤ k': 'https://www.geeksforgeeks.org/problems/longest-sub-array-with-sum-k0824/1',
  'smallest subarray with sum ≥ k': 'https://leetcode.com/problems/minimum-size-subarray-sum/',
  'longest repeating character replacement (logic)': 'https://leetcode.com/problems/longest-repeating-character-replacement/',
  'binary subarrays with sum (basic understanding)': 'https://leetcode.com/problems/binary-subarrays-with-sum/',

  // Sliding Window Phase 3
  'longest substring with k distinct characters': 'https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1',
  'count occurrences of anagrams': 'https://www.geeksforgeeks.org/problems/count-occurences-of-anagrams5603/1',

  // Sliding Window Phase 4
  'longest substring with at most k distinct characters': 'https://leetcode.com/problems/longest-substring-with-at-most-k-distinct-characters/',
  'longest substring with exactly k distinct characters': 'https://www.geeksforgeeks.org/problems/longest-k-unique-characters-substring0853/1',
  'character replacement': 'https://leetcode.com/problems/longest-repeating-character-replacement/',
  'minimum window containing pattern': 'https://leetcode.com/problems/minimum-window-substring/',

  // Sliding Window Phase 5
  'sliding window maximum': 'https://leetcode.com/problems/sliding-window-maximum/',
  'sliding window minimum': 'https://www.geeksforgeeks.org/problems/sliding-window-minimum/1',
  'longest continuous subarray': 'https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/',
  'constrained subsequence sum (introduction)': 'https://leetcode.com/problems/constrained-subsequence-sum/',

  // Sliding Window Phase 6
  'count nice subarrays': 'https://leetcode.com/problems/count-number-of-nice-subarrays/',
  'subarrays divisible by k (hashmap + prefix ka revision bhi hai)': 'https://leetcode.com/problems/subarray-sums-divisible-by-k/',

  // Sliding Window Phase 7
  'longest turbulent subarray': 'https://leetcode.com/problems/longest-turbulent-subarray/',
  'grumpy bookstore owner': 'https://leetcode.com/problems/grumpy-bookstore-owner/',
  'maximum erasure value': 'https://leetcode.com/problems/maximum-erasure-value/',

  // Sliding Window Unlocked after Queue / Deque
  'sliding window maximum (optimal)': 'https://leetcode.com/problems/sliding-window-maximum/',
  'sliding window minimum (optimal)': 'https://www.geeksforgeeks.org/problems/sliding-window-minimum/1',
  'shortest subarray with sum at least k': 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',

  // Sliding Window Unlocked after Heap
  'sliding window median': 'https://leetcode.com/problems/sliding-window-median/',
  'kth largest in every window': 'https://www.geeksforgeeks.org/problems/kth-largest-in-every-window/1',
  'maximum performance of a team (hybrid concept)': 'https://leetcode.com/problems/maximum-performance-of-a-team/',

  // Sliding Window Unlocked after DP
  'maximum sum of non-overlapping subarrays': 'https://leetcode.com/problems/maximum-sum-of-two-non-overlapping-subarrays/',
  'partition array for maximum sum': 'https://leetcode.com/problems/partition-array-for-maximum-sum/',
  'advanced window optimization problems': 'https://leetcode.com/problems/shortest-subarray-with-sum-at-least-k/',

  // Binary Search Phase 1
  'floor of an element': 'https://www.geeksforgeeks.org/problems/floor-in-a-sorted-array-1587115620/1',
  'ceil of an element': 'https://www.geeksforgeeks.org/problems/ceil-in-a-sorted-array/1',
  'lower bound': 'https://www.geeksforgeeks.org/problems/implement-lower-bound/1',
  'upper bound': 'https://www.geeksforgeeks.org/problems/implement-upper-bound/1',
  'count occurrences of an element': 'https://www.geeksforgeeks.org/problems/count-occurences-of-a-given-number-in-a-sorted-array/1',
  'first occurrence': 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',
  'last occurrence': 'https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/',

  // Binary Search Phase 2
  'search in rotated sorted array ii': 'https://leetcode.com/problems/search-in-rotated-sorted-array-ii/',
  'find minimum in rotated sorted array': 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/',
  'find rotation count': 'https://www.geeksforgeeks.org/problems/rotation4755/1',
  'peak index in mountain array': 'https://leetcode.com/problems/peak-index-in-a-mountain-array/',
  'search in nearly sorted array': 'https://www.geeksforgeeks.org/problems/search-in-a-nearly-sorted-array/1',

  // Binary Search Phase 3
  'split array largest sum': 'https://leetcode.com/problems/split-array-largest-sum/',
  'painter\'s partition problem': 'https://www.geeksforgeeks.org/problems/the-painters-partition-problem1353/1',
  'minimum days to make m bouquets': 'https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/',
  'magnetic force between two balls': 'https://leetcode.com/problems/magnetic-force-between-two-balls/',
  'minimize maximum distance to gas station': 'https://leetcode.com/problems/minimize-max-distance-to-gas-station/',

  // Binary Search Phase 4
  'search a 2d matrix': 'https://leetcode.com/problems/search-a-2d-matrix/',
  'search a 2d matrix ii': 'https://leetcode.com/problems/search-a-2d-matrix-ii/',
  'row with maximum ones': 'https://www.geeksforgeeks.org/problems/row-with-max-1s0023/1',
  'median in a row wise sorted matrix': 'https://www.geeksforgeeks.org/problems/median-in-a-row-wise-sorted-matrix1527/1',
  'find peak element in matrix': 'https://leetcode.com/problems/find-a-peak-element-ii/',

  // Binary Search Phase 5
  'sqrt(x)': 'https://leetcode.com/problems/sqrtx/',
  'nth root of a number': 'https://www.geeksforgeeks.org/problems/find-nth-root-of-m5843/1',
  'perfect square': 'https://leetcode.com/problems/valid-perfect-square/',
  'arrange coins': 'https://leetcode.com/problems/arranging-coins/',
  'guess number higher or lower': 'https://leetcode.com/problems/guess-number-higher-or-lower/',

  // Binary Search Phase 6
  'kth missing positive number': 'https://leetcode.com/problems/kth-missing-positive-number/',
  'median of two sorted arrays': 'https://leetcode.com/problems/median-of-two-sorted-arrays/',
  'missing number in sorted array': 'https://www.geeksforgeeks.org/problems/missing-number-in-array1416/1',
  'find first bad version (concept based)': 'https://leetcode.com/problems/first-bad-version/',

  // Binary Search Phase 7
  'minimize maximum pair difference': 'https://leetcode.com/problems/minimize-the-maximum-difference-of-pairs/',
  'maximum candies allocated to k children': 'https://leetcode.com/problems/maximum-candies-allocated-to-k-children/',
  'maximum value at a given index': 'https://leetcode.com/problems/maximum-value-at-a-given-index-in-a-bounded-array/',
  'divide chocolate': 'https://www.geeksforgeeks.org/problems/divide-chocolate/1',
  'minimized maximum of products distributed to any store': 'https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/',

  // Binary Search Unlocked after Heap
  'find k closest elements (heap approach)': 'https://leetcode.com/problems/find-k-closest-elements/',
  'kth smallest element in sorted matrix': 'https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/',
  'kth largest element in sorted matrix': 'https://www.geeksforgeeks.org/problems/kth-largest-element-in-a-2d-sorted-matrix/1',

  // Binary Search Unlocked after Graph
  'path with minimum effort': 'https://leetcode.com/problems/path-with-minimum-effort/',
  'swim in rising water': 'https://leetcode.com/problems/swim-in-rising-water/',
  'minimum maximum edge weight problems': 'https://www.geeksforgeeks.org/problems/minimum-maximum-edge-weight/1',

  // Binary Search Unlocked after DP
  'longest-increasing-subsequence (binary search optimization)': 'https://leetcode.com/problems/longest-increasing-subsequence/',
  'russian doll envelopes': 'https://leetcode.com/problems/russian-doll-envelopes/',
  'weighted job scheduling (binary search + dp)': 'https://www.geeksforgeeks.org/problems/weighted-job-scheduling/1',
  'maximum profit in job scheduling': 'https://leetcode.com/problems/maximum-profit-in-job-scheduling/',

  // Binary Search Unlocked after Trees
  'search in bst': 'https://leetcode.com/problems/search-in-a-binary-search-tree/',
  'floor in bst': 'https://www.geeksforgeeks.org/problems/floor-in-bst/1',
  'ceil in bst': 'https://www.geeksforgeeks.org/problems/ceil-in-bst/1',
  'closest value in bst': 'https://leetcode.com/problems/closest-binary-search-tree-value/',
  'kth smallest in bst (bst traversal bhi required hai)': 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',

  // Recursion Phase 1
  'print numbers from 1 to n': 'https://www.geeksforgeeks.org/problems/print-1-to-n-without-loop/1',
  'print numbers from n to 1': 'https://www.geeksforgeeks.org/problems/print-n-to-1-without-loop/1',
  'print even numbers': 'https://www.geeksforgeeks.org/problems/print-even-numbers-without-loop/1',
  'print odd numbers': 'https://www.geeksforgeeks.org/problems/print-odd-numbers-without-loop/1',
  'sum of first n numbers': 'https://www.geeksforgeeks.org/problems/sum-of-first-n-terms1152/1',
  'factorial of n': 'https://www.geeksforgeeks.org/problems/factorial5739/1',
  'power of a number': 'https://www.geeksforgeeks.org/problems/power-of-numbers-1587115620/1',
  'fibonacci number': 'https://leetcode.com/problems/fibonacci-number/',
  'count digits': 'https://www.geeksforgeeks.org/problems/count-digits5716/1',
  'sum of digits': 'https://www.geeksforgeeks.org/problems/sum-of-digits1712/1',
  'product of digits': 'https://www.geeksforgeeks.org/problems/product-of-digits/1',
  'reverse a number': 'https://www.geeksforgeeks.org/problems/reverse-a-number/1',

  // Recursion Phase 4
  'fibonacci (recursive)': 'https://leetcode.com/problems/fibonacci-number/',
  'climbing stairs (recursive)': 'https://leetcode.com/problems/climbing-stairs/',
  'count ways to reach n': 'https://leetcode.com/problems/climbing-stairs/',
  'count binary strings': 'https://www.geeksforgeeks.org/problems/generate-all-binary-strings/1',
  'count paths in a grid (recursive)': 'https://leetcode.com/problems/unique-paths/',

  // Recursion Phase 6
  'bubble sort (recursive)': 'https://www.geeksforgeeks.org/problems/recursive-bubble-sort/1',
  'selection sort (recursive)': 'https://www.geeksforgeeks.org/problems/recursive-selection-sort/1',
  'insertion sort (recursive)': 'https://www.geeksforgeeks.org/problems/recursive-insertion-sort/1',

  // Recursion Phase 7
  'gcd (recursive)': 'https://www.geeksforgeeks.org/problems/gcd-of-two-numbers3459/1',
  'lcm (using gcd)': 'https://www.geeksforgeeks.org/problems/lcm-and-gcd1513/1',
  'decimal to binary': 'https://www.geeksforgeeks.org/problems/decimal-to-binary-converter/1',
  'binary to decimal': 'https://www.geeksforgeeks.org/problems/binary-to-decimal-converter/1',
  'fast power (recursive)': 'https://leetcode.com/problems/powx-n/',

  // Recursion Unlocked after Backtracking
  'combination sum': 'https://leetcode.com/problems/combination-sum/',
  'combination sum ii': 'https://leetcode.com/problems/combination-sum-ii/',
  'subsets': 'https://leetcode.com/problems/subsets/',
  'subsets ii': 'https://leetcode.com/problems/subsets-ii/',
  'permutations': 'https://leetcode.com/problems/permutations/',
  'permutations ii': 'https://leetcode.com/problems/permutations-ii/',
  'rat in a maze': 'https://www.geeksforgeeks.org/problems/rat-in-a-maze-problem/1',
  'sudoku solver': 'https://leetcode.com/problems/sudoku-solver/',

  // Recursion Unlocked after Trees
  'inorder traversal': 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
  'preorder traversal': 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
  'postorder traversal': 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
  'maximum depth of tree': 'https://leetcode.com/problems/maximum-depth-of-binary-tree/',
  'same tree': 'https://leetcode.com/problems/same-tree/',
  'symmetric tree': 'https://leetcode.com/problems/symmetric-tree/',
  'path sum': 'https://leetcode.com/problems/path-sum/',
  'diameter of binary tree': 'https://leetcode.com/problems/diameter-of-binary-tree/',
  'balanced binary tree': 'https://leetcode.com/problems/balanced-binary-tree/',
  'lowest common ancestor': 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',

  // Recursion Unlocked after Linked List
  'swap nodes in pairs': 'https://leetcode.com/problems/swap-nodes-in-pairs/',
  'delete node recursively': 'https://www.geeksforgeeks.org/problems/delete-node-in-linked-list/1',

  // Recursion Unlocked after Dynamic Programming
  'fibonacci (memoization)': 'https://leetcode.com/problems/fibonacci-number/',

  // Linked List Phase 4
  'reverse nodes in k group': 'https://leetcode.com/problems/reverse-nodes-in-k-group/',
  'reverse between positions': 'https://leetcode.com/problems/reverse-linked-list-ii/',
  'reverse doubly linked list': 'https://www.geeksforgeeks.org/problems/reverse-a-doubly-linked-list/1',

  // Linked List Phase 5
  'find length of cycle': 'https://www.geeksforgeeks.org/problems/find-length-of-loop/1',

  // Linked List Phase 6
  'merge k sorted lists': 'https://leetcode.com/problems/merge-k-sorted-lists/',
  'sort linked list': 'https://leetcode.com/problems/sort-list/',
  'partition list': 'https://leetcode.com/problems/partition-list/',
  'add two numbers': 'https://leetcode.com/problems/add-two-numbers/',

  // Linked List Phase 7
  'odd even linked list': 'https://leetcode.com/problems/odd-even-linked-list/',
  'rotate list': 'https://leetcode.com/problems/rotate-list/',
  'split linked list into parts': 'https://leetcode.com/problems/split-linked-list-in-parts/',
  'remove duplicates ii': 'https://leetcode.com/problems/remove-duplicates-from-sorted-list-ii/',

  // Linked List Unlocked after HashMap
  'remove duplicates using hashset': 'https://www.geeksforgeeks.org/problems/remove-duplicates-from-an-unsorted-linked-list/1',

  // Linked List Unlocked after Stack
  'next greater node in linked list': 'https://leetcode.com/problems/next-greater-node-in-linked-list/',

  // Linked List Unlocked after Trees
  'convert sorted list to bst': 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/',
  'flatten binary tree to linked list': 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',

  // Stack Phase 1
  'implement stack using array': 'https://www.geeksforgeeks.org/problems/implement-stack-using-array/1',
  'implement stack using linked list': 'https://www.geeksforgeeks.org/problems/implement-stack-using-linked-list/1',

  // Stack Phase 2
  'valid parentheses': 'https://leetcode.com/problems/valid-parentheses/',
  'minimum add to make parentheses valid': 'https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/',
  'remove outermost parentheses': 'https://leetcode.com/problems/remove-outermost-parentheses/',
  'maximum nesting depth': 'https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/',
  'longest valid parentheses (brute first)': 'https://leetcode.com/problems/longest-valid-parentheses/',

  // Stack Phase 3
  'infix to postfix': 'https://www.geeksforgeeks.org/problems/infix-to-postfix-1587115620/1',
  'infix to prefix': 'https://www.geeksforgeeks.org/problems/infix-to-prefix/1',
  'postfix evaluation': 'https://www.geeksforgeeks.org/problems/evaluation-of-postfix-expression1735/1',
  'prefix evaluation': 'https://www.geeksforgeeks.org/problems/prefix-evaluation/1',
  'evaluate reverse polish notation': 'https://leetcode.com/problems/evaluate-reverse-polish-notation/',
  'basic calculator i': 'https://leetcode.com/problems/basic-calculator/',
  'basic calculator ii': 'https://leetcode.com/problems/basic-calculator-ii/',

  // Stack Phase 4
  'next greater element': 'https://leetcode.com/problems/next-greater-element-i/',
  'next greater element ii': 'https://leetcode.com/problems/next-greater-element-ii/',
  'next smaller element': 'https://www.geeksforgeeks.org/problems/help-classmates--141631/1',
  'previous greater element': 'https://www.geeksforgeeks.org/problems/previous-greater-element/1',
  'previous smaller element': 'https://www.geeksforgeeks.org/problems/previous-smaller-element/1',
  'stock span problem': 'https://www.geeksforgeeks.org/problems/stock-span-problem-1587115621/1',

  // Stack Phase 5
  'remove adjacent duplicates': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/',
  'remove all adjacent duplicates ii': 'https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string-ii/',
  'decode string': 'https://leetcode.com/problems/decode-string/',
  'simplify path': 'https://leetcode.com/problems/simplify-path/',
  'make the string great': 'https://leetcode.com/problems/make-the-string-great/',
  'remove stars from string': 'https://leetcode.com/problems/removing-stars-from-a-string/',
  'backspace string compare (stack approach)': 'https://leetcode.com/problems/backspace-string-compare/',

  // Stack Phase 6
  'min stack': 'https://leetcode.com/problems/min-stack/',
  'implement queue using stacks': 'https://leetcode.com/problems/implement-queue-using-stacks/',
  'design browser history': 'https://leetcode.com/problems/design-browser-history/',

  // Stack Phase 7
  'largest rectangle in histogram': 'https://leetcode.com/problems/largest-rectangle-in-histogram/',
  'maximal rectangle': 'https://leetcode.com/problems/maximal-rectangle/',
  'trapping rain water (stack approach)': 'https://leetcode.com/problems/trapping-rain-water/',
  'sum of subarray minimums': 'https://leetcode.com/problems/sum-of-subarray-minimums/',
  'sum of subarray ranges': 'https://leetcode.com/problems/sum-of-subarray-ranges/',

  // Stack Unlocked after Queue
  'implement stack using queues': 'https://leetcode.com/problems/implement-stack-using-queues/',
  'circular tour (related concepts)': 'https://leetcode.com/problems/gas-station/',

  // Stack Unlocked after Trees
  'iterative inorder traversal': 'https://leetcode.com/problems/binary-tree-inorder-traversal/',
  'iterative preorder traversal': 'https://leetcode.com/problems/binary-tree-preorder-traversal/',
  'iterative postorder traversal': 'https://leetcode.com/problems/binary-tree-postorder-traversal/',
  'bst iterator': 'https://leetcode.com/problems/binary-search-tree-iterator/',
  'flatten binary tree (iterative)': 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',

  // Stack Unlocked after Graph
  'topological sort (stack based)': 'https://www.geeksforgeeks.org/problems/topological-sort/1',

  // Stack Unlocked after DP
  'longest valid parentheses (optimal)': 'https://leetcode.com/problems/longest-valid-parentheses/',

  // Queue Phase 1
  'implement queue using array': 'https://www.geeksforgeeks.org/problems/implement-queue-using-array/1',
  'implement queue using linked list': 'https://www.geeksforgeeks.org/problems/implement-queue-using-linked-list/1',

  // Queue Phase 2
  'design circular queue': 'https://leetcode.com/problems/design-circular-queue/',
  'design circular deque': 'https://leetcode.com/problems/design-circular-deque/',
  'gas-station (queue-simulation)': 'https://leetcode.com/problems/gas-station/',

  // Queue Phase 3
  'design front-middle-back queue': 'https://leetcode.com/problems/design-front-middle-back-queue/',
  'recent counter': 'https://leetcode.com/problems/number-of-recent-calls/',
  'moving average from data stream': 'https://leetcode.com/problems/moving-average-from-data-stream/',

  // Queue Phase 4
  'first non-repeating character in a stream': 'https://www.geeksforgeeks.org/problems/first-non-repeating-character-in-a-stream1216/1',
  'number of recent calls': 'https://leetcode.com/problems/number-of-recent-calls/',
  'time needed to buy tickets': 'https://leetcode.com/problems/time-needed-to-buy-tickets/',
  'reveal cards in increasing order': 'https://leetcode.com/problems/reveal-cards-in-increasing-order/',
  'dota2 senate (simulation)': 'https://leetcode.com/problems/dota2-senate/',

  // Queue Phase 5
  'design deque': 'https://www.geeksforgeeks.org/problems/deque-implementations/1',

  // Queue Phase 6
  'jump game vi (advanced introduction)': 'https://leetcode.com/problems/jump-game-vi/',

  // Queue Phase 7
  'task scheduler': 'https://leetcode.com/problems/task-scheduler/',
  'rotten oranges (bfs concept intro)': 'https://leetcode.com/problems/rotting-oranges/',
  'number of students unable to eat lunch': 'https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/',

  // Queue Unlocked after Trees
  'binary tree level order traversal': 'https://leetcode.com/problems/binary-tree-level-order-traversal/',
  'zigzag level order traversal': 'https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/',
  'right side view': 'https://leetcode.com/problems/binary-tree-right-side-view/',
  'left side view': 'https://www.geeksforgeeks.org/problems/left-view-of-binary-tree/1',
  'average of levels': 'https://leetcode.com/problems/average-of-levels-in-binary-tree/',
  'maximum width of binary tree': 'https://leetcode.com/problems/maximum-width-of-binary-tree/',
  'bottom-up level order traversal': 'https://leetcode.com/problems/binary-tree-level-order-traversal-ii/',

  // Queue Unlocked after Graph
  'breadth first search (bfs)': 'https://www.geeksforgeeks.org/problems/bfs-traversal-of-graph/1',
  'number of islands': 'https://leetcode.com/problems/number-of-islands/',
  'flood fill': 'https://leetcode.com/problems/flood-fill/',
  'rotting oranges': 'https://leetcode.com/problems/rotting-oranges/',
  '01 matrix': 'https://leetcode.com/problems/01-matrix/',
  'walls and gates': 'https://leetcode.com/problems/walls-and-gates/',
  'shortest path in unweighted graph': 'https://www.geeksforgeeks.org/problems/shortest-path-in-undirected-graph-having-unit-distance/1',
  'word ladder': 'https://leetcode.com/problems/word-ladder/',
  'open the lock': 'https://leetcode.com/problems/open-the-lock/',

  // Queue Unlocked after Heap
  'merge k sorted arrays': 'https://www.geeksforgeeks.org/problems/merge-k-sorted-arrays/1',

  // Queue Unlocked after DP
  'jump game vi': 'https://leetcode.com/problems/jump-game-vi/',

  // Trees Phase 6
  'lowest common ancestor of binary tree': 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/',
  'lowest common ancestor of bst': 'https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/',

  // Trees Phase 7
  'construct tree from preorder & inorder': 'https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/',
  'construct tree from inorder & postorder': 'https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/',
  'sorted array to bst': 'https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/',
  'sorted list to bst': 'https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/',
  'serialize & deserialize binary tree': 'https://leetcode.com/problems/serialize-and-deserialize-binary-tree/',

  // Trees Phase 8
  'top view': 'https://www.geeksforgeeks.org/problems/top-view-of-binary-tree/1',
  'bottom view': 'https://www.geeksforgeeks.org/problems/bottom-view-of-binary-tree/1',
  'vertical order traversal': 'https://leetcode.com/problems/vertical-order-traversal-of-a-binary-tree/',
  'boundary traversal': 'https://www.geeksforgeeks.org/problems/boundary-traversal-of-binary-tree/1',
  'diagonal traversal': 'https://www.geeksforgeeks.org/problems/diagonal-traversal-of-binary-tree/1',

  // Trees Phase 9
  'insert into bst': 'https://leetcode.com/problems/insert-into-a-binary-search-tree/',
  'delete node in bst': 'https://leetcode.com/problems/delete-node-in-a-bst/',
  'validate bst': 'https://leetcode.com/problems/validate-binary-search-tree/',
  'kth smallest element': 'https://leetcode.com/problems/kth-smallest-element-in-a-bst/',
  'recover binary search tree': 'https://leetcode.com/problems/recover-binary-search-tree/',

  // Trees Phase 10
  'flatten binary tree to linked list': 'https://leetcode.com/problems/flatten-binary-tree-to-linked-list/',
  'house robber iii': 'https://leetcode.com/problems/house-robber-iii/',
  'binary tree cameras': 'https://leetcode.com/problems/binary-tree-cameras/',
  'all nodes distance k': 'https://leetcode.com/problems/all-nodes-distance-k-in-binary-tree/',
  'burn a binary tree': 'https://www.geeksforgeeks.org/problems/burning-tree/1',

  // Trees Unlocked after Graph
  'minimum height trees': 'https://leetcode.com/problems/minimum-height-trees/',
  'tree diameter (graph version)': 'https://leetcode.com/problems/tree-diameter/',

  // Trees Unlocked after DP
  'binary tree maximum path sum': 'https://leetcode.com/problems/binary-tree-maximum-path-sum/',
  'longest zigzag path': 'https://leetcode.com/problems/longest-zigzag-path-in-a-binary-tree/',
  'maximum sum bst': 'https://leetcode.com/problems/maximum-sum-bst-in-binary-tree/',
  'count unique bsts': 'https://leetcode.com/problems/unique-binary-search-trees/',

  // Heap Phase 1
  'implement min heap': 'https://www.geeksforgeeks.org/problems/min-heap/1',
  'implement max heap': 'https://www.geeksforgeeks.org/problems/max-heap/1',

  // Heap Phase 2
  'k closest numbers': 'https://www.geeksforgeeks.org/problems/k-closest-elements3619/1',
  'k closest points to origin': 'https://leetcode.com/problems/k-closest-points-to-origin/',
  'k weakest rows in matrix': 'https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/',
  'kth largest in stream': 'https://leetcode.com/problems/kth-largest-element-in-a-stream/',

  // Heap Phase 3
  'top k frequent words': 'https://leetcode.com/problems/top-k-frequent-words/',
  'reorganize string': 'https://leetcode.com/problems/reorganize-string/',

  // Heap Phase 4
  'smallest range covering k lists': 'https://leetcode.com/problems/smallest-range-covering-elements-from-k-lists/',
  'k pairs with smallest sums': 'https://leetcode.com/problems/find-k-pairs-with-smallest-sums/',

  // Heap Phase 5
  'meeting rooms ii': 'https://leetcode.com/problems/meeting-rooms-ii/',
  'minimum number of platforms': 'https://www.geeksforgeeks.org/problems/minimum-platforms-1587115620/1',
  'maximum events that can be attended': 'https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/',
  'ipo': 'https://leetcode.com/problems/ipo/',
  'course schedule iii': 'https://leetcode.com/problems/course-schedule-iii/',

  // Heap Phase 6
  'find median from data stream': 'https://leetcode.com/problems/find-median-from-data-stream/',
  'smallest infinite set': 'https://leetcode.com/problems/smallest-number-in-infinite-set/',

  // Heap Phase 7
  'minimum cost to connect sticks': 'https://leetcode.com/problems/minimum-cost-to-connect-sticks/',
  'last stone weight': 'https://leetcode.com/problems/last-stone-weight/',
  'furthest building you can reach': 'https://leetcode.com/problems/furthest-building-you-can-reach/',
  'maximum subsequence score': 'https://leetcode.com/problems/maximum-subsequence-score/',

  // Heap Unlocked after Graph
  'network delay time': 'https://leetcode.com/problems/network-delay-time/',

  // Heap Unlocked after DP
  'super ugly number': 'https://leetcode.com/problems/super-ugly-number/',

  // Graph Phase 2
  'depth first search (dfs - recursive)': 'https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1',
  'depth first search (dfs - iterative)': 'https://www.geeksforgeeks.org/problems/depth-first-traversal-for-a-graph/1',
  'number of connected components': 'https://www.geeksforgeeks.org/problems/number-of-provinces/1',
  'count provinces': 'https://leetcode.com/problems/number-of-provinces/',
  'max area of island': 'https://leetcode.com/problems/max-area-of-island/',

  // Graph Phase 3
  'detect cycle in undirected graph (bfs)': 'https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1',
  'detect cycle in undirected graph (dfs)': 'https://www.geeksforgeeks.org/problems/detect-cycle-in-an-undirected-graph/1',
  'detect cycle in directed graph (dfs)': 'https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1',
  'detect cycle using kahn\'s algorithm': 'https://www.geeksforgeeks.org/problems/detect-cycle-in-a-directed-graph/1',
  'redundant connection': 'https://leetcode.com/problems/redundant-connection/',

  // Graph Phase 4
  'topological sort (dfs)': 'https://www.geeksforgeeks.org/problems/topological-sort/1',
  'course schedule': 'https://leetcode.com/problems/course-schedule/',
  'course schedule ii': 'https://leetcode.com/problems/course-schedule-ii/',
  'alien dictionary': 'https://www.geeksforgeeks.org/problems/alien-dictionary/1',
  'eventual safe states': 'https://leetcode.com/problems/find-eventual-safe-states/',

  // Graph Phase 5
  'cheapest flights within k stops': 'https://leetcode.com/problems/cheapest-flights-within-k-stops/',

  // Graph Phase 6
  'prim\'s algorithm': 'https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1',
  'kruskal\'s algorithm': 'https://www.geeksforgeeks.org/problems/minimum-spanning-tree/1',
  'min cost to connect all points': 'https://leetcode.com/problems/min-cost-to-connect-all-points/',

  // Graph Phase 7
  'number of provinces (dsu)': 'https://leetcode.com/problems/number-of-provinces/',
  'accounts merge': 'https://leetcode.com/problems/accounts-merge/',
  'number of operations to make network connected': 'https://leetcode.com/problems/number-of-operations-to-make-network-connected/',

  // Graph Phase 8
  'surrounded regions': 'https://leetcode.com/problems/surrounded-regions/',
  'pacific atlantic water flow': 'https://leetcode.com/problems/pacific-atlantic-water-flow/',
  'shortest path in binary matrix': 'https://leetcode.com/problems/shortest-path-in-binary-matrix/',
  'as far from land as possible': 'https://leetcode.com/problems/as-far-from-land-as-possible/',

  // Graph Phase 9
  'bellman-ford algorithm': 'https://www.geeksforgeeks.org/problems/distance-from-the-source-bellman-ford-algorithm/1',
  'floyd-warshall algorithm': 'https://www.geeksforgeeks.org/problems/implementing-floyd-warshall2042/1',
  'strongly connected components (kosaraju)': 'https://www.geeksforgeeks.org/problems/strongly-connected-components-kosarajus-algo/1',
  'tarjan\'s algorithm': 'https://www.geeksforgeeks.org/problems/critical-connections-in-a-network/1',
  'bridges in graph': 'https://leetcode.com/problems/critical-connections-in-a-network/',
  'articulation points': 'https://www.geeksforgeeks.org/problems/articulation-point-11587115620/1',
  'reconstruct itinerary': 'https://leetcode.com/problems/reconstruct-itinerary/',

  // Graph Unlocked after DP
  'longest increasing path in matrix': 'https://leetcode.com/problems/longest-increasing-path-in-a-matrix/',
  'cherry pickup': 'https://leetcode.com/problems/cherry-pickup/',

  // Graph Unlocked after Backtracking
  'word search ii': 'https://leetcode.com/problems/word-search-ii/',
  'all paths from source to target': 'https://leetcode.com/problems/all-paths-from-source-to-target/',
  'unique paths iii': 'https://leetcode.com/problems/unique-paths-iii/',

  // DP Phase 1
  'min cost climbing stairs': 'https://leetcode.com/problems/min-cost-climbing-stairs/',
  'tribonacci number': 'https://leetcode.com/problems/n-th-tribonacci-number/',
  'decode ways': 'https://leetcode.com/problems/decode-ways/',
  'maximum sum of non-adjacent elements': 'https://www.geeksforgeeks.org/problems/max-sum-without-adjacents2430/1',

  // DP Phase 2
  '0/1 knapsack': 'https://www.geeksforgeeks.org/problems/0-1-knapsack-problem0817/1',
  'subset sum': 'https://www.geeksforgeeks.org/problems/subset-sum-problem2003/1',
  'equal sum partition': 'https://www.geeksforgeeks.org/problems/subset-sum-problem2003/1',
  'count subsets with given sum': 'https://www.geeksforgeeks.org/problems/perfect-sum-problem5633/1',
  'minimum subset sum difference': 'https://www.geeksforgeeks.org/problems/minimum-sum-partition3317/1',
  'ones and zeroes': 'https://leetcode.com/problems/ones-and-zeroes/',

  // DP Phase 3
  'coin change ii': 'https://leetcode.com/problems/coin-change-ii/',
  'rod cutting': 'https://www.geeksforgeeks.org/problems/rod-cutting0840/1',
  'integer break': 'https://leetcode.com/problems/integer-break/',

  // DP Phase 4
  'longest increasing subsequence': 'https://leetcode.com/problems/longest-increasing-subsequence/',
  'number of lis': 'https://leetcode.com/problems/number-of-longest-increasing-subsequence/',
  'maximum length pair chain': 'https://leetcode.com/problems/maximum-length-of-pair-chain/',
  'longest bitonic subsequence': 'https://www.geeksforgeeks.org/problems/longest-bitonic-subsequence0824/1',
  'largest divisible subset': 'https://leetcode.com/problems/largest-divisible-subset/',

  // DP Phase 5
  'longest common subsequence (lcs)': 'https://leetcode.com/problems/longest-common-subsequence/',
  'longest common substring': 'https://www.geeksforgeeks.org/problems/longest-common-substring1452/1',
  'delete operation for two strings': 'https://leetcode.com/problems/delete-operation-for-two-strings/',
  'distinct subsequences': 'https://leetcode.com/problems/distinct-subsequences/',
  'interleaving string': 'https://leetcode.com/problems/interleaving-string/',
  'shortest common supersequence': 'https://leetcode.com/problems/shortest-common-supersequence/',

  // DP Phase 6
  'longest palindromic subsequence': 'https://leetcode.com/problems/longest-palindromic-subsequence/',
  'longest palindromic substring': 'https://leetcode.com/problems/longest-palindromic-substring/',
  'palindrome partitioning ii': 'https://leetcode.com/problems/palindrome-partitioning-ii/',
  'count palindromic substrings': 'https://leetcode.com/problems/palindromic-substrings/',
  'minimum insertions to make palindrome': 'https://leetcode.com/problems/minimum-insertion-steps-to-make-a-string-palindrome/',
  'strange printer': 'https://leetcode.com/problems/strange-printer/',

  // DP Phase 7
  'unique paths': 'https://leetcode.com/problems/unique-paths/',
  'unique paths ii': 'https://leetcode.com/problems/unique-paths-ii/',
  'minimum path sum': 'https://leetcode.com/problems/minimum-path-sum/',
  'triangle': 'https://leetcode.com/problems/triangle/',
  'dungeon game': 'https://leetcode.com/problems/dungeon-game/',
  'minimum falling path sum': 'https://leetcode.com/problems/minimum-falling-path-sum/',

  // DP Phase 8
  'best time to buy and sell stock i': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/',
  'best time to buy and sell stock ii': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/',
  'best time to buy and sell stock iii': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/',
  'best time to buy and sell stock iv': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/',
  'stock with cooldown': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/',
  'stock with transaction fee': 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/',

  // DP Phase 9
  'matrix chain multiplication': 'https://www.geeksforgeeks.org/problems/matrix-chain-multiplication0303/1',
  'burst balloons': 'https://leetcode.com/problems/burst-balloons/',
  'boolean parenthesization': 'https://www.geeksforgeeks.org/problems/boolean-parenthesization5611/1',
  'minimum cost tree from leaf values': 'https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/',

  // DP Phase 11
  'maximum gold': 'https://www.geeksforgeeks.org/problems/gold-mine-problem2122/1',
  'out of boundary paths': 'https://leetcode.com/problems/out-of-boundary-paths/',

  // DP Phase 12
  'count numbers with unique digits': 'https://leetcode.com/problems/count-numbers-with-unique-digits/',
  'numbers at most n given digit set': 'https://leetcode.com/problems/numbers-at-most-n-given-digit-set/',
  'count special integers': 'https://leetcode.com/problems/count-special-integers/',

  // DP Phase 13
  'traveling salesmanship problem (tsp)': 'https://www.geeksforgeeks.org/problems/travelling-salesman-problem2732/1',
  'partition to k equal sum subsets': 'https://leetcode.com/problems/partition-to-k-equal-sum-subsets/',
  'can i win': 'https://leetcode.com/problems/can-i-win/',
  'beautiful arrangement': 'https://leetcode.com/problems/beautiful-arrangement/'
};

export function getAutoLink(title) {
  if (!title) return '';
  const key = title.trim().toLowerCase();
  return AUTO_LINKS[key] || '';
}
