import { NextResponse } from 'next/server';
export async function GET(){return NextResponse.json({name:'ExceptionIQ API',status:'ok',version:'1.0.0'});}
