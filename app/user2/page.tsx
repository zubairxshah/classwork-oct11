'use client'

import { useState, useEffect } from 'react';

interface User {
  firstname: string;
  lastname: string;
}

interface UserData {
  data: User[];
}

export default function UserInfo() {
  const [userData, setUserData] = useState<UserData>({ data: [] });
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    setIsLoading(true);
    const url = "https://fakerapi.it/api/v1/persons?_locale=en_US&_quantity=2";
    const response = await fetch(url, { cache: 'no-store' });
    const data = await response.json();
    setUserData(data as UserData);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData();
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen">
      
      {userData.data.map((user, index) => (
        <div key={index}>
          <h1>User Info {index + 1}</h1>
          <p>First Name: {user.firstname}</p>
          <p>Last Name: {user.lastname}</p>
        </div>
      ))}
    <div><button onClick={handleRefresh} className="bg-stone-600 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded">
        Refresh Data
      </button></div>
    </div>
  );
}
