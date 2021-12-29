import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Header} from '@/components/Header/Header';
import {AccountsSection} from '@/components/AccountsSection/AccountsSection';
import {CompanySection} from '@/components/CompanySection/CompanySection';
import {UserSection} from '@/components/UserSection/UserSection';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mansa</title>
        <meta name="description" content="Mansa test frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <UserSection/>
        <CompanySection/>
        <AccountsSection/>
      </main>
    </div>
  )
}

export default Home
