import fs from 'fs/promises';
import path from 'path';
export const DB_PATH = path.join(process.cwd(), 'data', 'db.json');
export async function readDB() {
    return JSON.parse(await fs.readFile(DB_PATH, 'utf8'));
}
export async function writeDB(db: any) {
    await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
    return db;
}
export function audit(event: string, detail: string, actor = 'Finance Analyst') {
    return { id: `AUD-${Date.now()}`, timestamp: new Date().toISOString(), actor, event, detail };
}
