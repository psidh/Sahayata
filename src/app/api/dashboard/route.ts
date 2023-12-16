import { connect } from '@/dbConfig/dbConfig';
import Table from '../../../models/tableModel';
import { NextRequest, NextResponse } from 'next/server';

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const {
      date,
      dumperId,
      status,
      currentCapacity,
      availableCapacity,
      operatorId,
      time,
    } = reqBody;

    console.log(reqBody);

    // Check if data with the same dumperId already exists
    // const existingRecord = await Table.findOne({ dumperId });

    // if (existingRecord) {
    //   // Data with the same dumperId already exists, log the data
    //   console.log('Data with dumperId already exists:', existingRecord);

    //   return NextResponse.json({
    //     message: 'Data with the same dumperId already exists',
    //     success: false,
    //   }, { status: 400 });
    // }

    // Create a new record if it doesn't exist
    const newTable = new Table({
      date,
      dumperId,
      status,
      currentCapacity,
      availableCapacity,
      operatorId,
      time,
    });

    const savedTable = await newTable.save();
    console.log('New data saved:', savedTable);

    return NextResponse.json({
      message: 'Table created successfully',
      success: true,
      savedTable,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id');
    const data = await Table.find({dumperId : id});
    console.log(data);
    return NextResponse.json(data);
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get('id');
  console.log(id);
  const deletedData = await Table.findByIdAndDelete(id);
  console.log(deletedData);
  return NextResponse.json({ message: 'Row deleted', status: 200 });
}
