import { connect } from '@/dbConfig/dbConfig';
import Table from '../../../../models/tableModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function GET(request: NextRequest) {
  try {
    const data = await Table.find();
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}