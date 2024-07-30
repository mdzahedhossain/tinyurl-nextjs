import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { LinksTable } from "./schema";
import { desc, eq } from "drizzle-orm";
import randomShortStrings from "./randomShortStrings";

const sql = neon(process.env.DATABASE_URL);
const db = drizzle(sql);

export async function helloWorld() {
    const start = new Date();
    const [dbResponse] = await sql`SELECT NOW();`;
    const end = new Date();

    const dbNow = dbResponse && dbResponse.now ? dbResponse.now : "";

    return { dbNow: dbNow, latency: Math.abs(end - start)};
}



async function configureDatabase() {
    const [dbResponse] = await sql`
        CREATE TABLE IF NOT EXISTS "links" (
            "id" serial PRIMARY KEY NOT NULL,
            "url" text NOT NULL,
            "short" varchar(50),
            "created_at" timestamp DEFAULT now()
        ) 
    `;

    console.log("DB response for new table", dbResponse);
}

configureDatabase().catch(err => console.log("db config error", err));

export async function addLink(url) {
    const short = randomShortStrings();
    const newLink = { url: url, short: short};
    return await db.insert(LinksTable).values(newLink).returning();
}

export async function getLinks(limit, offset) {
    const lookupLimit = limit ? limit : 10;
    const lookupOffset = offset ? offset : 0;
    return await db.select().from(LinksTable).limit(lookupLimit).offset(lookupOffset).orderBy(desc(LinksTable.createdAt));
}

export async function getShortLinkRecord(shortSlugValue) {
    return await db.select().from(LinksTable).where(eq(LinksTable.short, shortSlugValue));
}

export async function getMinLinks(limit, offset) {
    const lookupLimit = limit ? limit : 10;
    const lookupOffset = offset ? offset : 0;
    return await db.select({
        id: LinksTable.id,
        url: LinksTable.url,
        createdAt: LinksTable.createdAt,
    }).from(LinksTable).limit(lookupLimit).offset(lookupOffset).orderBy(desc(LinksTable.createdAt));
}