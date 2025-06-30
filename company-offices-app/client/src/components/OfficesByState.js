// src/components/OfficesByState.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './OfficesByState.css'

const OfficesByState = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/companies/offices-by-state')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(err => {
        setError('Failed to fetch data');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-gray-600">Loading...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Offices by State</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded shadow">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">State</th>
            <th className="py-2 px-4 border-b">Office Count</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4 border-b text-center">{item._id}</td>
              <td className="py-2 px-4 border-b text-center">{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OfficesByState;
