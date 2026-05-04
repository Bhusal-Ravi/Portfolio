import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import pg from 'pg';

const { Pool } = pg;

const currentDirectory = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.resolve(currentDirectory, '..', '.env') });

const requiredEnvironmentVariables = [
  'SUPABASE_DB_HOST',
  'SUPABASE_DB_PORT',
  'SUPABASE_DB_NAME',
  'SUPABASE_DB_USER',
  'SUPABASE_DB_PASSWORD',
];

for (const environmentVariable of requiredEnvironmentVariables) {
  if (!process.env[environmentVariable]) {
    throw new Error(`Missing required environment variable: ${environmentVariable}`);
  }
}

const pool = new Pool({
  host: process.env.SUPABASE_DB_HOST,
  port: Number(process.env.SUPABASE_DB_PORT),
  database: process.env.SUPABASE_DB_NAME,
  user: process.env.SUPABASE_DB_USER,
  password: process.env.SUPABASE_DB_PASSWORD,
  ssl: {
    rejectUnauthorized: false,
  },
});

export async function ensureVisitsTable() {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS page_visits (
      client_id text PRIMARY KEY,
      visit_count integer NOT NULL DEFAULT 0,
      created_at timestamptz NOT NULL DEFAULT now(),
      updated_at timestamptz NOT NULL DEFAULT now()
    )
  `);
}

export default pool;
