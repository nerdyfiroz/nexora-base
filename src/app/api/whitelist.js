import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // Get all tasks for the form
    const { rows } = await pool.query('SELECT * FROM whitelist_tasks ORDER BY created_at ASC');
    return res.status(200).json(rows);
  }
  if (req.method === 'POST') {
    // User submits wallet and proofs
    const { wallet_address, proofs } = req.body;
    await pool.query('INSERT INTO whitelist_applications (wallet_address, tasks) VALUES ($1, $2)', [wallet_address, JSON.stringify(proofs)]);
    return res.status(200).json({ success: true });
  }
  res.status(405).end();
}
