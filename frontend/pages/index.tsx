import type {GetServerSideProps, GetServerSidePropsContext, InferGetServerSidePropsType, NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import {Header} from '@/components/Header/Header';
import {AccountsSection} from '@/components/AccountsSection/AccountsSection';
import {CompanySection} from '@/components/CompanySection/CompanySection';
import {UserSection} from '@/components/UserSection/UserSection';
import {RandomUserResponse} from '../models/api/randomUserResponse';
import {getRandomUser} from '@/components/services/randomUser.service';
import {GetAccounts} from '@/components/services/accounts.service';
import {GetCompanyDescription} from '@/components/services/companySiren.service';

const Home: NextPage = ({data}: InferGetServerSidePropsType<typeof getServerSideProps>) => {

  const {data: accounts, error: accountError} = GetAccounts();
  const {data: company, error: companyError} = GetCompanyDescription('852379890');
  return (
    <div className={styles.container}>
      <Head>
        <title>Mansa</title>
        <meta name="description" content="Mansa test frontend" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Header/>
        <UserSection dataUser={data}/>
        <CompanySection company={company} error={companyError}/>
        <AccountsSection accounts={accounts} error={accountError}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const data: RandomUserResponse = await getRandomUser();
  return {
    props: {
      data
    },
  }
}

export default Home
