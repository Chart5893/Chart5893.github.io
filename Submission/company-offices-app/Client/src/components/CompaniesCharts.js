// src/components/CompaniesCharts.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar,
  ResponsiveContainer
} from 'recharts';

export default function CompaniesCharts() {
  const [companiesByYear, setCompaniesByYear] = useState([]);
  const [officesByState, setOfficesByState] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/companies/companies-by-year')
      .then(res => {
        const sorted = res.data.map(entry => ({
          year: entry._id,
          count: entry.count
        })).sort((a, b) => a.year - b.year);
        setCompaniesByYear(sorted);
      });

    axios.get('http://localhost:5000/api/companies/offices-by-state')
      .then(res => {
        const sorted = res.data.map(entry => ({
          state: entry._id,
          count: entry.count
        })).sort((a, b) => b.count - a.count).slice(0, 10);
        setOfficesByState(sorted);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Company Expansion Rate by Year</h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={companiesByYear}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="count" stroke="#8884d8" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>

      <h2 style={{ marginTop: '3rem' }}>Top 10 States by Number of Offices</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={officesByState}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="state" />
          <YAxis allowDecimals={false} />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
