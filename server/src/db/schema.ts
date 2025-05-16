import { sql } from "drizzle-orm";
import { int, sqliteTable, text } from "drizzle-orm/sqlite-core";
import generateUniqueString from "@/utils/generateUniqueString";

const timestamps = {
  updatedAt: int("updated_at", { mode: "timestamp" }),
  createdAt: int("created_at", { mode: "timestamp" })
    .notNull()
    .default(sql`(unixepoch())`),
  deletedAt: int("deleted_at", { mode: "timestamp" }),
};

export const users = sqliteTable("users", {
  id: text()
    .primaryKey()
    .$default(() => generateUniqueString(12)),
  name: text("name", { length: 15 }).notNull(),
  ...timestamps,
});

export const items = sqliteTable("items", {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  quantity: int().notNull(),
  category: text().notNull(),
  expireAt: int("expire_at", { mode: "timestamp" }),
  ownerId: text("owner_id").references(() => users.id),
  ...timestamps,
});
