import Head from 'next/head'

export default function HomePage() {
  return (
    <div>
      <Head>
        <title>Ladislav's site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="antialiased max-w-3xl mx-auto h-screen flex items-center p-4 " >
        <div className=" ">
          <h1 className="font-black text-4xl pb-2 text-indigo-600" >Hi, I am ladislav</h1>
          <p className="font-medium  text-3xl pb-4">A designer and software engineer from Slovakia, currently living in Switzerland.</p>
          <p className="text-lg ">...my home site is currently under construction, but thanks for visiting.</p>
        </div>
      </main>
      
    </div>
  )
}
