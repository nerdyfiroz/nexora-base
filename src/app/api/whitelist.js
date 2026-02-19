
import { promises as fs } from 'fs';
import path from 'path';
import { Pool } from 'pg';
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

export default async function handler(req, res) {
  if (req.method === 'GET') {
    // If address param is present, check whitelist status
    const { address } = req.query;
    if (address) {
      try {
        const fcfsPath = path.join(process.cwd(), 'src/db/fcfs.csv');
        const gtdPath = path.join(process.cwd(), 'src/db/gtd.csv');
        const [fcfsRaw, gtdRaw] = await Promise.all([
          fs.readFile(fcfsPath, 'utf8'),
          fs.readFile(gtdPath, 'utf8'),
        ]);
        const clean = s => s.replace(/[#].*|\s+/g, '').toLowerCase();
        const addr = address.toLowerCase();
        const fcfs = fcfsRaw.split(/\r?\n/).map(clean).filter(Boolean);
        const gtd = gtdRaw.split(/\r?\n/).map(clean).filter(Boolean);
        if (fcfs.includes(addr)) {
          return res.status(200).json({ status: 'wl' });
        }
        if (gtd.includes(addr)) {
          return res.status(200).json({ status: 'gtd' });
        }
        return res.status(200).json({ status: 'none' });
      } catch (e) {
        return res.status(500).json({ status: 'error', error: e.message });
      }
    }
    // Default: Get all tasks for the form (legacy)
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
