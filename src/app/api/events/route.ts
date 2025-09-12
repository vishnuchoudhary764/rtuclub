
import { query } from '../../../lib/db'
import { NextResponse } from "next/server"



export async function GET() {
  try {
    const events = await query(
      'SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC'
      )
  
    return NextResponse.json(events)
  } catch (error) {
     if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ error: "Unknown error" }, { status: 500 })
  }
}


export async function POST(req: Request) {
  const body = await req.json()
  const { title, description, event_date, location, role } = body
   // const events =  await query("DELETE FROM events WHERE event_date < CURDATE()");
   

  try {
     if (role !== "Coordinator") {
      return NextResponse.json(
        { error: "Only coordinators can add events" },
        { status: 403 }
      )
    }
    await query(
      'INSERT INTO events (title, description, event_date, location) VALUES (?, ?, ?, ?)',
      [title, description, event_date, location]
    )

    return NextResponse.json({ message: 'Event added successfully' })
  } catch (error) {
     if (error instanceof Error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
  return NextResponse.json({ error: "Unknown error" }, { status: 500 })
  }
}

