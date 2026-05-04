import express from 'express';
import cors from 'cors';
import pool, { ensureVisitsTable } from './connection/supabase.js';

const app = express();

app.use(cors());
app.use(express.json());

await ensureVisitsTable();

app.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'Backend is running' });
});

app.post('/visit', async (req, res) => {
  try {
    const { clientId } = req.body ?? {};

    if (typeof clientId !== 'string' || clientId.trim().length === 0) {
      return res.status(400).json({ ok: false, error: 'clientId is required' });
    }

    const result = await pool.query(
      `
        INSERT INTO page_visits (client_id, visit_count, updated_at)
        VALUES ($1, 1, now())
        ON CONFLICT (client_id)
        DO UPDATE SET
          visit_count = page_visits.visit_count + 1,
          updated_at = now()
        RETURNING client_id, visit_count
      `,
      [clientId.trim()],
    );

    res.json({
      ok: true,
      clientId: result.rows[0]?.client_id,
      visitCount: result.rows[0]?.visit_count ?? 0,
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Failed to record visit';
    res.status(500).json({ ok: false, error: message });
  }
});

app.get('/db-health', async (_req, res) => {
  try {
    const result = await pool.query('SELECT NOW() AS now');
    res.json({ ok: true, databaseTime: result.rows[0]?.now ?? null });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Database connection failed';
    res.status(500).json({ ok: false, error: message });
  }
});

export default app;
