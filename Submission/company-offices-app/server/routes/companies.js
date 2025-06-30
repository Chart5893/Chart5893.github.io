console.log("✅ companies.js is executing");

const express = require('express');
const router = express.Router();
const { getDb } = require('../db');

router.get('/offices-by-state', async (req, res) => {
  console.log('➡️ Route hit: /offices-by-state');
  try {
    const db = getDb();
    const result = await db.collection('companies').aggregate([
      { $unwind: "$offices" },
      { $group: { _id: "$offices.state", count: { $sum: 1 } } },
      { $sort: { count: -1 } }
    ]).toArray();

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get('/companies-by-year', async (req, res) => {
  console.log('➡️ Route hit: /companies-by-year');
  try {
    const db = getDb();
    const { startYear, endYear } = req.query;

    const match = {};
    if (startYear) match.founded_year = { ...match.founded_year, $gte: parseInt(startYear) };
    if (endYear) match.founded_year = { ...match.founded_year, $lte: parseInt(endYear) };

    const pipeline = [];
    if (Object.keys(match).length) pipeline.push({ $match: match });

    pipeline.push(
      { $group: { _id: "$founded_year", count: { $sum: 1 } } },
      { $sort: { _id: 1 } }
    );

    const result = await db.collection('companies').aggregate(pipeline).toArray();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
