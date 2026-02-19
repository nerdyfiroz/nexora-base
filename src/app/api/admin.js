import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  // Example: fetch whitelist applications
  if (req.method === 'GET') {
    const { rows } = await pool.query('SELECT * FROM whitelist_applications ORDER BY created_at DESC');
    return res.status(200).json(rows);
  }
  // Example: update status
  if (req.method === 'POST') {
    const { id, status } = req.body;
    await pool.query('UPDATE whitelist_applications SET status = $1 WHERE id = $2', [status, id]);
    return res.status(200).json({ success: true });
  }
  // Example: export winners
  if (req.method === 'PUT') {
    const { type } = req.body; // gtd or wl
    const { rows } = await pool.query('SELECT wallet_address FROM whitelist_winners WHERE type = $1', [type]);
    return res.status(200).json(rows);
  }
  // Delete application
  if (req.method === 'DELETE') {
    const { id } = req.body;
    await pool.query('DELETE FROM whitelist_applications WHERE id = $1', [id]);
    return res.status(200).json({ success: true });
  }
  res.status(405).end();
}
