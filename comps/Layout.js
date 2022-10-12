import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

export default function Layout({children}){
	return (
	 <div>
	  <Head>
        <title>Travel App</title>
        <meta name="description" content="travel app designed by Ak with nextjs & tailwind" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
	  <Header />
	   {children}
	  <Footer />
	 </div>
	)
}