import { defineDb, defineTable, column } from 'astro:db';

const users = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    text: column.text(),
    body: column.text()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    users
  }
});
