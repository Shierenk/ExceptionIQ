import { NextResponse } from 'next/server';
import { readDB, writeDB, audit } from '../../../../lib/db';
export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const db = await readDB();
    const item = db.exceptions.find((x: any) => x.id === id);
    if (!item) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    return NextResponse.json({
        ...item,
        records: db.records.filter((r: any) => item.evidence.includes(r.id)),
        policies: db.policies,
    });
}
export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const body = await req.json();
    const db = await readDB();
    const i = db.exceptions.findIndex((x: any) => x.id === id);
    if (i < 0) return NextResponse.json({ error: 'Not found' }, { status: 404 });
    db.exceptions[i] = { ...db.exceptions[i], ...body };
    db.audit.unshift(audit('Exception updated', `${id} → ${JSON.stringify(body)}`));
    await writeDB(db);
    return NextResponse.json(db.exceptions[i]);
}
