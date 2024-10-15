import Heading from "./components/heading";
import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex items-center justify-center h-full">
        {/* Generic messages using simple HTML tags*/}
        {/*HTML formatting won't work since we have styling rules as Tailwind CSS*/}
        <h1 className="text-center text-3xl">GIAIC Class Oct 11, 2024</h1>
        <br></br>
      </div>
      <Heading text="Topics" />
      <div>
        {/* Dynamic messages using TSX */}
        <ul className="list-disc pl-6">
          <li>Dynamic Routes and Data Fetching Using API</li>
          <li>Error Handling</li>
          <li>Loading Message</li>
          <li>Data Fetching, Caching, and Revalidating</li>
          <li>Using NextJS Image Tag</li>
        </ul>
      </div>
      {/* Dynamic messages using TSX */}
      <div className="mt-4 text-xl text-grey-600 mb-4">
        <p>
          Use the navigation bar to access NextJS topics practical application covered in this class.
        </p>
        <p className="text-red-800 mb-4">
          Note: Visit my GitHub Repo for understanding the code mechanism.
        </p>
        <div><Link href="https://github.com/zubairxshah/classwork-oct11" passHref>
  <button className="bg-stone-600 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded">
    Visit GitHub Repo
  </button>
</Link>
</div>
      </div>
    </div>
  );
}
