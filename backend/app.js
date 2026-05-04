import express from 'express';
import cors from 'cors';
import pool, { ensureVisitsTable } from './connection/supabase.js';

const app = express();

app.use(cors({ origin: 'https://bhusalravi.com.np' }));
app.use(express.json());

await ensureVisitsTable();

const defaultSiteId = 'bhusalravi.com.np';

app.get('/health', (_req, res) => {
  res.json({ ok: true, message: 'Backend is running' });
});

app.post('/visit', async (req, res) => {
  try {
    const { siteId } = req.body ?? {};
    const resolvedSiteId = typeof siteId === 'string' && siteId.trim().length > 0 ? siteId.trim() : defaultSiteId;

    const result = await pool.query(
      `
        INSERT INTO site_visits (site_id, visit_count, updated_at)
        VALUES ($1, 1, now())
        ON CONFLICT (site_id)
        DO UPDATE SET
          visit_count = site_visits.visit_count + 1,
          updated_at = now()
        RETURNING site_id, visit_count
      `,
      [resolvedSiteId],
    );

    res.json({
      ok: true,
      siteId: result.rows[0]?.site_id,
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
