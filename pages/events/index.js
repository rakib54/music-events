import EventItem from '@/components/EventItem'
import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export default function EventsPage({ events }) {
  return (
    <Layout>
      {events.length === 0 && <h3>No Event to show</h3>}
      <h3>All Events</h3>
     <EventItem evt={events} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props:{
      events,
      revalidate: 1
    }     
  }
}
