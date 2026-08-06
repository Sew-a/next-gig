//  find missing number
function findMissingNumber(arr) {
  const sortedArray = arr.sort((a, b) => a - b);

  for (let i = 0; i < sortedArray.length - 1; i++) {
    if (sortedArray[i + 1] - sortedArray[i] > 1) {
      return sortedArray[i] + 1;
    }
  }
  return null; // Return null if no missing number is found
}

console.log("Missing number is: " + findMissingNumber([1, 2, 3, 5])); // Output: 4

// oddSort
function oddSort(arr) {
  const oddNums = [];
  const oddIndices = [];

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i];

    if (currentNum % 2 === 1) {
      oddNums.push(currentNum);
      oddIndices.push(i);
    }
  }

  oddNums.sort((a, b) => a - b);

  oddIndices.forEach((index, i) => {
    arr[index] = oddNums[i];
  });
  return arr;
}

console.log("Odd numbers sorted: " + oddSort([2, 3, 7, 4, 6, 1, 5, 8, 9]));

//orderMapper
const users = [
  { id: 2, name: "Alice" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Eve" },
];

const orders = [
  { orderId: 2, product: "Laptop" },
  { orderId: 3, product: "Phone" },
  { orderId: 4, product: "Tablet" },
];

function orderMapper(users, orders) {
  if (!Array.isArray(users) || !Array.isArray(orders)) {
    throw new Error("Both users and orders must be arrays");
  }

  const userMap = new Map(users.map((user) => [user.id, user]));

  return orders.map((order) => {
    if (!order || typeof order.orderId === "undefined") {
      console.warn("Invalid order:", order);
      return { ...order, user: null };
    }

    return {
      ...order,
      user: userMap.get(order.orderId) || null,
    };
  });
}
console.log("Mapped Orders:", orderMapper(users, orders));

const newInput = [
  { value: "abcd", order: 4, expired: false },
  { value: "qwer", order: 2, expired: true },
  { value: "xyz1", order: 1, expired: false },
  { value: "abx2", order: 3, expired: false },
];

function filteredSymbols(input) {
  if (!Array.isArray(input)) {
    throw new Error("Input must be an array");
  }

  const validItems = input
    .filter((item) => !item.expired)
    .sort((a, b) => a.order - b.order)
    .map((item) => item.value.split("").reverse());

  console.log("validItems:", validItems);

  const uniqueChars = [];
  const seenChars = new Set();

  for (const char of validItems) {
    if (!seenChars.has(char)) {
      seenChars.add(char);
      uniqueChars.push(char);
    }
  }

  return uniqueChars.join(' ');
}

console.log("Filtered Symbols:", filteredSymbols(newInput));
