import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/eventItem.module.css';

export default function EventItem({ evt }) {
  const events = evt.events
  return (
    <div>
      {events.map((e, i) => {
        return (
          <div className={styles.event} key={i}>
            <div className={styles.img}>
              <Image src={e.image ? e.image : '/images/event-default.png'}
                width={150} height={100}
              />
            </div>
            <div className={styles.info}>
              <span>
                {e.date} at {e.time}
              </span>
              <h3>{e.name}</h3>
            </div>
            <div className={styles.link}>
              <Link href={`/events/${e.slug}`}>
                <a className="btn">details</a>
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}
