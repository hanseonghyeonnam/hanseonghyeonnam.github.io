import { db, messages } from 'astro:db';

export default async function () {
  await db.insert(messages).values([
    {
    	id: 1,
    	title: "Hello",
    	subtitle: `
    		Hello, I'm the site developer, And admin, And manager. This server fully free and 'unlimited' note server,
    		But some actions (like server attack behavior, ...) will blocked.

    		If not? ENJOY.
    	`
    }
  ]);
}
