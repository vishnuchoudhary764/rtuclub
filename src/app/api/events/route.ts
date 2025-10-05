

import { NextResponse } from "next/server";
import Event from "@/models/Events";
import { connectDB } from "@/lib/db";


export async function GET(req:Request) {
    

   try {
    await connectDB();
     const { searchParams } = new URL(req.url);
    const CreatedBy = searchParams.get("CreatedBy");

    let events;

    if (CreatedBy) {
      
      events = await Event.find({ CreatedBy}).sort({ date: 1 });
    } else {
      
      events = await Event.find().sort({ date: 1 });
    }
    return NextResponse.json(events, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to fetch events" }, { status: 500 });
  }
}

export async function POST(req: Request) {
  await connectDB();
  try {
    
    const { description, clubName, location ,date,CreatedBy} = await req.json();
    console.log(CreatedBy)
   

    if (!description || !clubName || !location || !date ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }
    const newEvent = new Event({ description, clubName, date, location, CreatedBy });
    await newEvent.save();
    return NextResponse.json(newEvent, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to create event" }, { status: 500 });
  }
}
export async function DELETE(req: Request) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({ error: "Event ID is required" }, { status: 400 });
    }

     await Event.findByIdAndDelete(id);
     
    return NextResponse.json({ message: "Event deleted successfully" }, { status: 200 });
    
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to delete event" }, { status: 500 });
  }
}
export async function PATCH(req: Request) {
  try {
    await connectDB();

    const { id, description, clubName, date, location, CreatedBy } = await req.json();

    if (!id) return NextResponse.json({ error: "Event ID is required" }, { status: 400 });

      await Event.findByIdAndUpdate(
      id,
      { description, clubName, date, location, CreatedBy },
      { new: true } 
    );
     
      return NextResponse.json({ error: "Event Updated !" }, { status: 404 });


  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Failed to update event" }, { status: 500 });
  }
}
