import { drizzle } from "drizzle-orm/postgres-js";
import { PgBoss } from 'pg-boss';

export const db = drizzle({
  connection: process.env.POSTGRESQL_URL || "",
});

export const boss = new PgBoss(process.env.POSTGRESQL_URL || "");
