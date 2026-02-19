import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { rows } = await pool.query('SELECT * FROM whitelist_tasks ORDER BY created_at DESC');
    return res.status(200).json(rows);
  }
  if (req.method === 'POST') {
    const { name, description, required } = req.body;
    await pool.query('INSERT INTO whitelist_tasks (name, description, required) VALUES ($1, $2, $3)', [name, description, required]);
    return res.status(200).json({ success: true });
  }
  if (req.method === 'DELETE') {
    const { id } = req.query;
    await pool.query('DELETE FROM whitelist_tasks WHERE id = $1', [id]);
    return res.status(200).json({ success: true });
  }
  if (req.method === 'PUT') {
    const { id, required } = req.body;
    await pool.query('UPDATE whitelist_tasks SET required = $1 WHERE id = $2', [required, id]);
    return res.status(200).json({ success: true });
  }
  res.status(405).end();
}
