import React, { useState, useEffect } from "react";

export default function CompaniesByYear() {
  const [startYear, setStartYear] = useState("");
  const [endYear, setEndYear] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      let url = "http://localhost:5000/api/companies/companies-by-year";
      const params = [];
      if (startYear) params.push(`startYear=${startYear}`);
      if (endYear) params.push(`endYear=${endYear}`);
      if (params.length > 0) {
        url += "?" + params.join("&");
      }

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch");
      const result = await response.json();
      setData(result);
      setError("");
    } catch (err) {
      setError("Could not load data.");
    }
  };

  useEffect(() => {
    fetchData(); // fetch on mount
  }, []);

  return (
    <div>
      <h2>Companies by Founding Year</h2>
      <label>
        Start Year:
        <input
          type="number"
          value={startYear}
          onChange={(e) => setStartYear(e.target.value)}
          style={{ margin: "0 1rem" }}
        />
      </label>
      <label>
        End Year:
        <input
          type="number"
          value={endYear}
          onChange={(e) => setEndYear(e.target.value)}
        />
      </label>
      <button style={{ marginLeft: "1rem" }} onClick={fetchData}>
        Filter
      </button>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <table
        border="1"
        cellPadding="8"
        style={{ marginTop: "1rem", borderCollapse: "collapse" }}
      >
        <thead>
          <tr>
            <th>Year</th>
            <th>Number of Companies</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry) => (
            <tr key={entry._id}>
              <td>{entry._id}</td>
              <td>{entry.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
