

type UserType = {
  id: string;
  name: string;
};

export default async function Users() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();
  console.log(users);

  return (
    <>
      <div>Users</div>
      {users.map((user: UserType) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
        </div>
      ))}
    </>
  );
}
