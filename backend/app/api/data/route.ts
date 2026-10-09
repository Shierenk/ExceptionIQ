import { NextResponse } from 'next/server';
import { readDB } from '../../../lib/db';
export async function GET() {
    return NextResponse.json(await readDB());
}
