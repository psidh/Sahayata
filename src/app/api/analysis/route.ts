import { connect } from '@/dbConfig/dbConfig';
import Table from '../../../models/tableModel';
import { NextRequest, NextResponse } from 'next/server';

connect();


export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    const data = await Table.find({operatorId : id});
    console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
