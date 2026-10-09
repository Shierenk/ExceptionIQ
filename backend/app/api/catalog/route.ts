import { NextResponse } from 'next/server';
import { readDB } from '../../../lib/db';
export async function GET() {
    const db = await readDB();
    return NextResponse.json({
        records: db.records,
        policies: db.policies,
        skills: db.skills,
        tools: db.tools,
    });
}
