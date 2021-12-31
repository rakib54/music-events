import Link from 'next/link';
import styles from '@/styles/Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>copyright &copy; Music Events 2022</p>
      <Link href='/about'>This is about Page</Link>
    </footer>
  )
}
