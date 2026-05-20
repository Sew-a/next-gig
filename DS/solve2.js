//  promise all polyfill
function PromiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!promises || typeof promises[Symbol.iterator] !== "function") {
      return reject(new TypeError("Argument is not iterable"));
    }

    const arr = Array.from(promises);
    if (arr.length === 0) return resolve([]);

    const results = new Array(arr.length);
    let resolvedPromises = 0;

    arr.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          resolvedPromises++;

          if (resolvedPromises === arr.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}

// Debounce function

function debounce(func, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}
