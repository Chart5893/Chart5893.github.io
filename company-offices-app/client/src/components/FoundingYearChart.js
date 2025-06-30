import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

export default function FoundingYearChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/companies/companies-by-year")
      .then(res => {
        const formatted = res.data.map(entry => ({
          year: entry._id,
          count: entry.count
        }));
        setData(formatted);
      });
  }, []);

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="count" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}
