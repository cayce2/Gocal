import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from '../components/Form';

export default function Dashboard() {
  const [totalRecords, setTotalRecords] = useState(0);

  useEffect(() => {
    // Fetch the data from the backend
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/form');
        setTotalRecords(response.data.length); // Update total records
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    return today.toDateString(); // Format the date as a string
  };

  const stats = [
    { id: 1, name: 'Bookings this month', value: totalRecords },
    { id: 2, name: 'Current Date', value: getCurrentDate() },
    { id: 3, name: 'Current Route', value: 'Waiyaki way' },
  ];

  return (
    <div className="bg-white py-24 sm:py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-6">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-6">
              <dt className="text-base leading-8 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-3xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="px-2 sm:px-0">
        <Form />
      </div>
    </div>
  );
}
