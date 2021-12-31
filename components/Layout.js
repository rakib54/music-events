import Head from 'next/head';
import styles from '../styles/Layout.module.css';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ title, description, children, keywords }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={styles.container}>       
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Music Events | find the events',
  description: 'find the latest musical events',
  keywords: "DJ, 'music, 'events'",
}
