// Promises

const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1").then(
  (res) => res.json(),
);
const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2").then(
  (res) => res.json(),
);
const promise3 = fetch("https://jsonplaceholder.typicode.com/todos/3").then(
  (res) => res.json(),
);

Promise.all([promise1, promise2, promise3])
  .then((response) => {
    console.log("All promises resolved:", response);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

  const getUser = () => Promise.resolve({ name: "John", id: 3 });
  const getPosts = (userId) => Promise.resolve({ title: "My Post", userId });

  // Chaining promises

  getUser()
  .then((user) => getPosts(user.id))
  .then((post) => {
    console.log("User's post:", post);
  });

  async function fetchData() {
    const [user, posts] = await Promise.all(([getUser(), getPosts(3)]));
    return { user, posts };
  }