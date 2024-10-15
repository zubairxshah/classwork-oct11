export default async function UserInfo() {
  const url = "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=2";
  const response = await fetch(url, { cache: "no-cache" });
  const data = await response.json();
  console.log(data.data[0].firstname);
  return (
      <div className="flex flex-col min-h-screen">
        <h1>User Info {data.data[0].id}</h1>
        <p>First Name: {data.data[0].firstname}</p>
        <p>Last Name: {data.data[0].lastname}</p>
        <h1>User Info {data.data[1].id}</h1>
        <p>First Name: {data.data[1].firstname}</p>
        <p>Last Name: {data.data[1].lastname}</p>
      </div>
  );
}
