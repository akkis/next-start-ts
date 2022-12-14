import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1 className='text-3xl text-stone-300'>Hello Tailwind CSS!</h1>
    </div>
  )
}

export default Home
