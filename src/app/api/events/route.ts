import Events from '@/app/components/Events'
import { query } from '../../../lib/db'


export async function GET() {
  try {
    const events = await query(
      'SELECT * FROM events WHERE event_date >= CURDATE() ORDER BY event_date ASC'
      )
  
    return Response.json(events)
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}


export async function POST(req: Request) {
  const body = await req.json()
  const { title, description, event_date, location, role } = body
  const events =  await query("DELETE FROM events WHERE event_date < CURDATE()");
   

  try {
     if (role !== "Coordinator") {
      return Response.json(
        { error: "Only coordinators can add events" },
        { status: 403 }
      )
    }
    await query(
      'INSERT INTO events (title, description, event_date, location) VALUES (?, ?, ?, ?)',
      [title, description, event_date, location]
    )

    return Response.json({ message: 'Event added successfully' })
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }
}
