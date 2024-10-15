import Link from "next/link";

type Products = {
    id:number,
    title:string
}
export default async function ProductList(){
    const url = "https://jsonplaceholder.typicode.com/posts"
    const fetchData = await fetch(url, {cache:"no-store"});
    const response = await fetchData.json()
    console.log(response.product)
    return(
        <div className="flex flex-col min-h-screen">
        <h1 className="text-xl mb-4">Product List</h1>
        <ul>
            {response.map((post:Products)=>{
                return (<li key={post.id}><Link href={`/products/${post.id}`}>{post.title}</Link></li>)
            })}
        </ul>
        </div>
    )
}