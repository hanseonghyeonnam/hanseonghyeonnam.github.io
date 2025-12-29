import { defineDb, defineTable, column } from 'astro:db';

const messages = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    subtitle: column.text()
  }
});

// https://astro.build/db/config
export default defineDb({
  tables: {
    messages
  }
});
