/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {};                  // 1 * 1 = O(1)
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    if (!seen[word]) {              // 2 * n = O(2n)
      seen[word] = true;
      unique[unique.length] = word; // 2 * n = O(2n)
    }
  }
  return unique;
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = [];                // 1 * 1 = O(1)
  for (
    let i = 0;                      // 1 * 1 = O(1)
    i < words.length;               // 2 * n = O(2n)
    i++                             // 2 * n = O(2n)
  ) {
    const word = words[i];          // 2 * n = O(2n)
    let isUnique = true;            // 1 * 1 = O(2)
    for (
      let c = 0;                    // 1 * 1 = O(1)
      c < i;                        // 1 * n = O(n)
      c++                           // 2 * n = O(2n)
    ) {
      const comparing = words[c];   // 2n * 2n = O(4n^2)
      if (comparing === word) {     // 1 * 1 = O(1)
        isUnique = false;           // 1 * 1 = O(1)
      }
    }
    if (isUnique) {                 // 1 * 1 = O(1)
      unique[unique.length] = word; // 2 * 2 = O(4)
    }
  }
  return unique;                    // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
