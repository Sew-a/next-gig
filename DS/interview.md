## Interview Strategy
| Phase | What to Do |
|---|---|
| Listen | Repeat the problem in your own words, ask clarifying questions |
| Think | Say "Let me think of a few approaches..." — silence is OK |
| Brute force | Start with a naive solution, THEN optimize |
| Code | Write clean, readable code. Name variables well. |
| Test | Walk through with examples (including edge cases: empty, null, single element) |
| Optimize | Discuss time/space complexity after working solution |
## Common Edge Cases to Remember
- `null` vs `undefined` vs missing keys
- Empty arrays / objects
- Negative numbers, floating point
- Circular references (always ask: "can there be cycles?")
- Very large inputs (will recursion blow the stack?)
- `this` in nested functions / arrow functions
## Quick Reference: Complexity
| Operation | Array | Map | Set |
|---|---|---|---|
| Access | O(1) | O(1) | — |
| Insert | O(1)* | O(1) | O(1) |
| Delete | O(n) | O(1) | O(1) |
| Search (value) | O(n) | — | O(1) |
\* Array push is amortized O(1); unshift/shift is O(n).
## If You Get Stuck
- "I know there are multiple approaches here. Let me start with the naive one."
- "This looks similar to [problem X], but the twist is Y."
- "I'd check the MDN docs for this API in a real scenario."
## Day Before the Interview
1. Re-write 3 polyfills from memory (bind, Promise.all, debounce)
2. Trace 5 event loop examples until you get them right
3. Review one system design problem (EventEmitter, LRU cache)
4. Sleep well — tired brain can't closure
All files are ready at js-interview-prep/. Here's the summary:
---
10 Problems + Tips
File	Problem	Key Concepts
01-promise-all-polyfill.js	Promise.all / allSettled	Async, microtasks, error handling
02-deep-clone.js	Deep clone (Date, Map, Set, cycles)	Recursion, WeakMap, edge cases
03-debounce-throttle.js	Debounce + throttle (leading/trailing)	Closures, timers, this
04-flatten-array.js	Flatten nested array (any depth)	Recursion, reduce, generators
05-lru-cache-memoize.js	LRU Cache + memoize	Map, O(1) eviction, closures
06-event-emitter.js	EventEmitter (pub/sub)	Observer pattern, OOP, once
07-currying.js	sum(1)(2)(3) + curry()	Closures, valueOf, arity
08-event-loop-output.js	Event loop output guessing	Micro/macrotask, async/await
09-bind-call-apply.js	Polyfills for bind/call/apply	this, Symbol, new
10-flatten-object.js	Flatten nested object keys	Recursion, string paths
TIPS.md has the study guide, interview strategy, edge cases, and complexity cheat sheet.
How to practice
node js-interview-prep/08-event-loop-output.js  # predict, then run
Try writing each from scratch without looking at the solution first. The 3 that appear most often in mid+ interviews:
1. Promise.all polyfill (tests async depth)
2. Deep clone with cycles (tests thoroughness)
3. Event loop output (tests fundamental JS runtime understanding)