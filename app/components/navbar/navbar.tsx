"use client"
// components/Navbar.tsx

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const routes = [
    { path: '/', name: 'Home' },
    { path: '/products', name: 'Products' },
    { path: '/user', name: 'Users Cached' },
    { path: '/user2', name: 'Users Revalidated' },
    { path: '/imagetag', name: 'Image Rendering' },
    // Add more routes here based on your folder structure
  ];

  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        {routes.map((route) => (
          <li key={route.path}>
            <Link 
              href={route.path}
              className={`text-white hover:text-gray-300 ${
                pathname === route.path ? 'font-bold' : ''
              }`}
            >
              {route.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
