import Head from 'next/head'
import HotelPromotion from '../components/HotelPromotion'

export default function Home() {
  return (
    <>
      <Head>
        <title>BharatComfort — Hotel & Restaurant Promotions</title>
      </Head>
      <HotelPromotion />
    </>
  )
}
