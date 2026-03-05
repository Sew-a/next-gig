async function makePostRequest() {
  const response = await fetch(`${process.env.NEXT_URL}/api/cyber`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: "Maelstrom" }),
  });
  const data = await response.json();
  
  return { data };
}


export default async function Maelstrom() {

  const { data } = await makePostRequest();

  return (
    <div>
        <h1>Maelstrom</h1>
        <p>{data?.message}</p>
    </div>
  )
}

 