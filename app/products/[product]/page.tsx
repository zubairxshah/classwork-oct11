export default async function ProductInfo({
  params,
}: {
  params: { product: string };
}) {
  const url = `https://jsonplaceholder.typicode.com/posts/${params.product}`;
  const fetchData = await fetch(url);
  const response = await fetchData.json();
  console.log(params.product);
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="text-xl mb-4">Product List</h1>

      <ul>
        <li>{response.id}</li>
        {response.title}
        <li>{response.body}</li>
      </ul>
    </div>
  );
}
