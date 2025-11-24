import { integer, pgTable, text } from "drizzle-orm/pg-core";

export const Users = pgTable("users", {
  id: integer("id").primaryKey().generatedAlwaysAsIdentity(),
  username: text("username").notNull().default(""),
  password: text("password").notNull().default(""),
});
