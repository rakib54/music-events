import Image from 'next/image';
import Link from 'next/link';

export default function EventItem({ evt }) {
  const events = evt.events
  return (
    <div>
      { events.map(e => {
        return (
          <div>
          <Image src={e.image ? e.image : '/images/event-default.png'}
            width={150} height={100}
          />
        </div>
        )
      })}
    </div>
  )
}
