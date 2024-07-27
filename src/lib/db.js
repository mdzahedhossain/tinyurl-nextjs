import { neon } from "@neondatabase/serverless";

const sql = neon(process.env.DATABASE_URL);

//console.log(sql`SELECT NOW()`)

export async function helloWorld() {
    const start = new Date();
    const [dbResponse] = await sql`SELECT NOW()`;
    const end = new Date();

    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : "";

    return { dbNow: dbNow, latency: Math.abs(end - start)};
}