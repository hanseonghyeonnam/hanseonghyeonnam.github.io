import { db, user } from 'astro:db';

export default async function () {
  await db.insert(user).values([
    {
    	id: 1,
    	text: "Hello",
    	body: `
    		Hello, I'm the site developer, And admin, And manager. This server fully free and 'unlimited' note server,
    		But some actions (like server attack behavior, ...) will blocked.

    		If not? ENJOY.
    	`
    }
  ]);
}
