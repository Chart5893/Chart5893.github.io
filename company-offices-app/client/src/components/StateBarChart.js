import React, { useEffect, useState } from "react";
import axios from "axios";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function StateBarChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/companies/offices-by-state")
      .then(res => {
        const formatted = res.data.map(entry => ({
          state: entry._id,
          count: entry.count
        }));
        setData(formatted);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="state" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="count" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  );
}
