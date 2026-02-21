import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { wallet_address, reward } = req.body;
    await pool.query(
      'INSERT INTO spin_rewards (wallet_address, reward) VALUES ($1, $2)',
      [wallet_address, reward]
    );
    return res.status(200).json({ success: true });
  }
  if (req.method === 'GET') {
    const { wallet_address } = req.query;
    const { rows } = await pool.query(
      'SELECT * FROM spin_rewards WHERE wallet_address = $1 ORDER BY created_at DESC',
      [wallet_address]
    );
    return res.status(200).json(rows);
  }
  res.status(405).end();
}
