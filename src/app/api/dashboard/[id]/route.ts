import { connect } from '@/dbConfig/dbConfig';
import Table from '../../../../models/tableModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function GET(request: NextRequest, {params } : {params: {id: string}}) {
  const {id}  =  params;
  const dumper  = await Table.find({ dumperId: id});
  return NextResponse.json(dumper);
}

